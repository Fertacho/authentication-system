"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import get_jwt_identity, jwt_required


api = Blueprint('api', __name__)



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST', 'GET'])
def handle_register():
    request_body = request.get_json()
    new_user = User()
    new_user.email=request_body["email"]
    new_user.password=request_body["password"]
    new_user.is_active=request_body["is_active"]
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message":"texto"})

@api.route("/token", methods=["POST", "GET"])
def create_token():
    email = request.json.get("email")
    password = request.json.get("password")
    if email != "hola@hola.com" or password != "holala":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=  access_token)