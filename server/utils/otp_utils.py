import random
import time
import os
from twilio.rest import Client
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Twilio Credentials (stored in .env)
ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.getenv("TWILIO_PHONE_NUMBER")

# OTP Expiry Time (in seconds)
OTP_EXPIRY = 300  # 5 minutes

# Initialize Twilio Client
client = Client(ACCOUNT_SID, AUTH_TOKEN)

# Temporary storage for OTPs
otp_store = {}

def send_otp(phone_number):
    """Generate and send an OTP via Twilio."""
    if not phone_number:
        return {"error": "Phone number is required"}, 400

    otp = str(random.randint(100000, 999999))
    otp_store[phone_number] = {"otp": otp, "timestamp": time.time()}

    try:
        message = client.messages.create(
            body=f"Your OTP is: {otp}. It is valid for 5 minutes.",
            from_=TWILIO_PHONE_NUMBER,
            to=phone_number
        )
        return {"message": "OTP sent successfully"}  # Don't return OTP in production
    except Exception as e:
        return {"error": f"Failed to send OTP: {str(e)}"}, 500

def verify_otp(phone_number, entered_otp):
    """Verify the OTP entered by the user."""
    if not phone_number or not entered_otp:
        return {"error": "Phone number and OTP are required"}, 400

    if phone_number not in otp_store:
        return {"error": "Invalid or expired OTP"}, 400

    stored_otp_data = otp_store[phone_number]
    stored_otp = stored_otp_data["otp"]
    timestamp = stored_otp_data["timestamp"]

    if time.time() - timestamp > OTP_EXPIRY:
        del otp_store[phone_number]
        return {"error": "OTP expired"}, 400

    if stored_otp == entered_otp:
        del otp_store[phone_number]  # Remove OTP after verification
        return {"message": "OTP verified successfully"}, 200
    else:
        return {"error": "Invalid OTP"}, 400
