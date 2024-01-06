"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/users', methods=['GET', 'POST'])
def manage_users():
    if request.method == 'GET':
        users = User.query.all()
        return jsonify([user.name for user in users])
    
    elif request.method == 'POST':
        data = request.json

        if 'name' not in data or 'email' not in data or 'password' not in data:
            return jsonify({'message': 'faltan datos para crear el usuario'}), 400
        
        try:
             
            user = User(
                 name=data['name'], 
                 email=data['email'], 
                 is_active= True,
                 password=generate_password_hash(data['password'])
                 )
             
            db.session.add(user)
            db.session.commit()
            print(user)

            return jsonify({'message': 'Usuario creado '}), 201
        
        except Exception as e:
            db.session.rollback()
            return jsonify({'message':f'Error creando el user: {str(e)}'}),500

@api.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        users = User.query.all()
        return jsonify([user.name for user in users])
    elif request.method == 'POST':
        data = request.json
        print(data)
        email = data.get('email')
        password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'falta data'}), 400
    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({'message': 'Invalid email or password'}), 401
    
    token = create_access_token(identity={'email': user.email})
    return jsonify({'token': token, 'message': 'Logeado'}), 200
