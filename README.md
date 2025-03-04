# InureShield AI

## Project Overview
This repository contains the dedicated work to solving the problem statement: **AI-Driven Fraud Detection and Prevention in Insurance**. Our focus is on developing an effective system to detect and prevent fraudulent activities in insurance claims using AI techniques.

## Problem Statement
To design an AI-powered solution for fraud detection and prevention in the insurance industry. The project involves exploratory data analysis (EDA), feature engineering, and implementation of both supervised and unsupervised machine learning models to identify fraudulent claims effectively.

## Dataset Description
The dataset consists of various fields capturing customer, policy, and incident-related information. Below is the list of fields included in the dataset:

### Customer Information:
- months_as_customer  
- age  
- insured_zip  
- insured_sex  
- insured_education_level  
- insured_occupation  
- insured_hobbies  
- insured_relationship  
- capital-gains  
- capital-loss

### Policy Information:
- policy_number  
- policy_bind_date  
- policy_state  
- policy_csl  
- policy_deductable  
- policy_annual_premium  
- umbrella_limit

### Incident Information:
- incident_date  
- incident_type  
- collision_type  
- incident_severity  
- authorities_contacted  
- incident_state  
- incident_city  
- incident_location  
- incident_hour_of_the_day  
- number_of_vehicles_involved  
- property_damage  
- bodily_injuries  
- witnesses  
- police_report_available

### Claim Information:
- total_claim_amount  
- injury_claim  
- property_claim  
- vehicle_claim

### Vehicle Information:
- auto_make  
- auto_model  
- auto_year

### Target Variable:
- fraud_reported

## Fraud Detection Models
We applied a variety of models to analyze the dataset, including both supervised and unsupervised learning approaches. 

### Supervised Learning Models:
- Logistic Regression
- Decision Tree Classifier
- XGBoost Classifier

### Unsupervised Learning Models:
- K-Means Clustering
- Isolation Forest
- DBSCAN

### Performance Evaluation Metrics:
- Accuracy
- Precision
- Recall
- F1 Score

### Key Features and Insights
- **EDA (Exploratory Data Analysis):** Conducted a thorough analysis of the dataset, identifying key patterns and outliers related to fraudulent claims.
- **Feature Engineering:** Processed and transformed raw data into meaningful features for model training.
- **Model Comparison:** Evaluated multiple models to identify the best-performing approach for fraud detection.

Note: For a deeper understanding of our Product's novel aspects and Unique Selling Propositions (USPs), please refer to our Idea Submission Slides. It provides a comprehensive overview of each feature.
