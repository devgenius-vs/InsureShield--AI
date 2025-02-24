from flask import Blueprint, request, jsonify
from flask_cors import CORS
from utils.otp_utils import send_otp, verify_otp
from db import policies_collection  # Import MongoDB collection

policy_bp = Blueprint('policy_routes', __name__)
CORS(policy_bp)

# Add New Life Insurance Policy (Request OTP)
@policy_bp.route('/add_policy', methods=['POST'])
def add_policy():
    data = request.json
    phone_number = data.get("phone_number")

    if not phone_number:
        return jsonify({"error": "Phone number is required"}), 400

    # Send OTP before adding policy
    otp_response = send_otp(phone_number)
    return jsonify(otp_response)

# Confirm Policy Addition with OTP
@policy_bp.route('/confirm_add_policy', methods=['POST'])
def confirm_add_policy():
    data = request.json
    phone_number = data.get("phone_number")
    entered_otp = data.get("otp")
    policy_id = data.get("policy_id")
    holder_name = data.get("holder_name")
    premium_amount = data.get("premium_amount")

    # Verify OTP
    otp_verification = verify_otp(phone_number, entered_otp)
    if "error" in otp_verification:
        return jsonify(otp_verification), 400

    # Check if policy already exists
    if policies_collection.find_one({"policy_id": policy_id}):
        return jsonify({"error": "Policy ID already exists"}), 400

    # Insert policy into MongoDB
    policy_data = {
        "policy_id": policy_id,
        "holder_name": holder_name,
        "phone_number": phone_number,
        "premium_amount": premium_amount,
        "status": "Active"
    }
    policies_collection.insert_one(policy_data)

    return jsonify({"message": "Policy added successfully", "policy_id": policy_id}), 200

# Terminate a Life Insurance Policy (Request OTP)
@policy_bp.route('/terminate_policy', methods=['POST'])
def terminate_policy():
    data = request.json
    phone_number = data.get("phone_number")
    policy_id = data.get("policy_id")

    if not phone_number or not policy_id:
        return jsonify({"error": "Phone number and policy ID are required"}), 400

    policy = policies_collection.find_one({"policy_id": policy_id})
    if not policy:
        return jsonify({"error": "Policy not found"}), 404

    # Send OTP before termination
    otp_response = send_otp(phone_number)
    return jsonify(otp_response)

# Confirm Policy Termination with OTP
@policy_bp.route('/confirm_terminate_policy', methods=['POST'])
def confirm_terminate_policy():
    data = request.json
    phone_number = data.get("phone_number")
    entered_otp = data.get("otp")
    policy_id = data.get("policy_id")

    # Verify OTP
    otp_verification = verify_otp(phone_number, entered_otp)
    if "error" in otp_verification:
        return jsonify(otp_verification), 400

    # Check if policy exists
    policy = policies_collection.find_one({"policy_id": policy_id})
    if not policy:
        return jsonify({"error": "Policy not found"}), 404

    # Update policy status to "Terminated"
    policies_collection.update_one({"policy_id": policy_id}, {"$set": {"status": "Terminated"}})

    return jsonify({"message": "Policy terminated successfully", "policy_id": policy_id}), 200
