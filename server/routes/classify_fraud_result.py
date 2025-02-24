from flask import Flask, request, jsonify, Blueprint
import joblib
import pandas as pd
import shap
import numpy as np
import google as genai

# Load the saved model
model = joblib.load("model/fraud_classify_model.pkl")

# Create Blueprint
fraud_bp = Blueprint('fraud', __name__)

# Set API Key
GOOGLE_API_KEY = "AIzaSyAC-8MK8GHlPxvTNgqmywIlf541yR5GdhY"
genai.configure(api_key=GOOGLE_API_KEY)

# Function to get Gemini response
def get_gemini_explanation(prompt):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    return response.text

def preprocess_data(df):
    # Drop irrelevant columns (Modify based on your dataset)
    df.drop(["Dummy Policy No", "CORRESPONDENCEPOSTCODE", "POLICYRISKCOMMENCEMENTDATE", "Date of Death", "INTIMATIONDATE", "Bank code", "Policy Payment Term", "CORRESPONDENCECITY", "CORRESPONDENCESTATE"], axis=1, inplace=True, errors='ignore')

    # Convert all string data in the dataset to lowercase
    df = df.applymap(lambda x: x.lower() if isinstance(x, str) else x)
    # categorical_cols = ["NOMINEE_RELATION", "OCCUPATION", "PREMIUMPAYMENTMODE", "HOLDERMARITALSTATUS", "INDIV_REQUIREMENTFLAG", "Product Type", "CHANNEL", "STATUS", "SUB_STATUS"]

    label_encoders = joblib.load("model/label_encoders.pkl")
    for col in label_encoders.keys():
            if col in df:
                df[col] = df[col].astype(str)  # Ensure string type
                df[col] = df[col].map(lambda x: label_encoders[col].transform([x])[0] if x in label_encoders[col].classes_ else -1)

    scaler = joblib.load("model/scaler.pkl")

    # Select columns to normalize
    cols_to_standardize = ["ASSURED_AGE", "POLICY SUMASSURED", "Premium", "Annual Income", "Policy Term"]
    
    # Remove commas and convert to float
    df[cols_to_standardize] = df[cols_to_standardize].replace({",": ""}, regex=True).astype(float)

    # Apply the same scaling transformation
    df[cols_to_standardize] = scaler.transform(df[cols_to_standardize])

    print(df)

    return df

@fraud_bp.route('/classify_fraud', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.get_json()

        print("1", data)
        # Convert JSON to DataFrame
        df = pd.DataFrame([data])  # Assuming data is a single dictionary

        print("2", df)
        # 
        print("Started Executing")

        data = preprocess_data(df)

        # Make prediction
        prediction = model.predict(data)[0]  # Extract first prediction
        print("Prediction: ", prediction)

        # data = np.array([0.09935402, 11., 10., -0.02660355, -0.160922, 4.,
        #         -0.03829866, 1., 0., -0.67224783, 3., 0., 0., 9.])

        # Convert to DataFrame
        features = ["ASSURED_AGE", "NOMINEE_RELATION", "OCCUPATION", "POLICY SUMASSURED", "Premium", 
                    "PREMIUMPAYMENTMODE", "Annual Income", "HOLDERMARITALSTATUS", "INDIV_REQUIREMENTFLAG", 
                    "Policy Term", "Product Type", "CHANNEL", "STATUS", "SUB_STATUS"]
        
        df = pd.DataFrame(data, columns=features)

        # prediction = 0.012563
        # Convert prediction to class label
        if prediction < 0.7:
            res = "Misrepresentation"
        else:
            res = "Unauthorized Claim Fraud"

        # Get confidence score
        confidence = prediction if prediction > 0.7 else 1 - prediction

        print("Res: ", res)
        print("Confidence: ", confidence)

        # Use SHAP for Explainability
        explainer = shap.Explainer(model, df)
        shap_values = explainer(df)  # Get SHAP values for input
        important_features = np.argsort(np.abs(shap_values.values[0]))[::-1][:3]  # Top 3 important features

        print("3", df)
        print({df.iloc[0, 0].item()})
        # Convert features to human-readable format
        feature_explanations = [
            f"{df.columns[i]} contributed significantly with value '{df.iloc[0, i].item():.2f}'"
            for i in important_features
        ]
        print("Hii")
        print(feature_explanations)

        # API_KEY = "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"
        # client = OpenAI(api_key=API_KEY)

        # Generate Human-Friendly Explanation using Gemini API

        exp_prompt = ', '.join(feature_explanations)

        print(exp_prompt)
        explanation_prompt = f"""
        A claim has been classified as '{res}' with a confidence of {confidence:.2f}. 
        Key factors that influenced this decision are:
        '{exp_prompt}'.

        Do not include the values of the features in the response. Just intimate that these features
        highly contributed to the result. Also try to give an explanation of what could be the reason 
        for this prediction with these features?
        
        Imagine you are explaining the results to a insurance claim approver agent who does not know about 
        machine learning. Can you provide a simple, easy-to-understand explanation for a claim 
        approval agent?
        """

        print("After Explanation")
        print(explanation_prompt)

        # get_gemini_explanation(explanation_prompt)

        # Extract response
        human_friendly_explanation = get_gemini_explanation(explanation_prompt)

        # Return response
        return jsonify({
            "prediction": res,
            "confidence": confidence,
            "explanation": human_friendly_explanation
        })

    except Exception as e:
        return jsonify({"error": str(e)})
