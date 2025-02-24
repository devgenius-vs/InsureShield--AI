from flask import Flask
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Change this in production

# Apply CORS to the Flask app
CORS(app)

# Load environment variables
load_dotenv()
db_password = os.getenv('DB_PASSWORD')

# Initialize JWTManager globally
jwt = JWTManager(app)

# import routes
from routes.auth_routes import auth_bp
from routes.document_verify_routes import document_bp
from routes.policy_routes import policy_bp

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(document_bp, url_prefix='/document')
app.register_blueprint(policy_bp, url_prefix='/policy')

if __name__ == '__main__':
    app.run(debug=True)