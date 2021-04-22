from flask import Flask,jsonify ,request,make_response
from flask_pymongo import PyMongo
import pymongo
import jwt
import datetime
from bson.json_util import dumps
from bson.objectid import ObjectId
from functools import wraps
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cors = CORS(app,resources={
    r"/*":{
        "origins":"*"
    }
})

app.config['SECRET_KEY'] = 'mysecretkey'
#app.config['MONGO_URI'] = 'mongodb://localhost:27017/Lion'
#this will connect the databse to pymongo library
#mongo = PyMongo(app)
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["liondatabase"]
myuser = mydb["customers"]
myproduct = mydb["products"]

#signin required functons
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
           token = request.headers['x-access-token']

        if not token:
           return jsonify({'message': 'Token is missing'}), 401

        try:
           data = jwt.decode(token, app.config['SECRET_KEY'])
           current_user = myuser.find_one({'email': data['email']})
        except:
            return jsonify({'message': 'Token is Invalid'}), 401

        return f(current_user, *args, **kwargs)           
      
    return decorated        
               

#signin routes
@app.route('/signin', methods=['POST'])
def user_signin():
    auth = request.get_json()
    _email = auth['email']
    
    if not auth or not auth['email'] or not auth['password']:
        return make_response('Could not verify',401,{'WWW-Authenticate':'Basic realm="Login required!"'})
    user = myuser.find_one({'email': _email})
    id = dumps(user['_id'])
    if not user:
        return make_response('Could not verify',401,{'WWW-Authenticate':'Basic realm="Login required!"'})
    if check_password_hash(user['password'], auth['password']):
        token = jwt.encode({'id':id, 'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=30)},app.config['SECRET_KEY'])
        tokens = token.decode('UTF-8')
        resp = dumps(tokens)
        return resp
        
    return make_response('Could not verify',401,{'WWW-Authenticate':'Basic realm="Login required!"'})


#signup routes
@app.route('/signup', methods=['POST'])
def create_user():
    data = request.get_json()
    hashed_password = generate_password_hash(data['pwd'], method='sha256')
    mydict = {
        'username':data['username'],
        'email': data['email'],
        'password': hashed_password,
        'avatar': '',
        'address': [],
        'mob':''
    }
    myuser.insert(mydict)
    
    return jsonify({'message':'New User Created'})


#get route for user
@app.route('/profile/<id>' ,methods=['GET'])
def get_user(id):
    _id = id
    user=myuser.find_one({'_id':ObjectId(_id)})
    resp =dumps(user)
    return resp


#update user data
@app.route('/updateuser/<id>', methods=['PUT'])
def update_user(id):
    _id = id
    data = request.get_json()

    myuser.update_one({'_id': ObjectId(_id)}, {
        '$set': {
            'username':data['username'],
            'mob': data['mob'],
            'avatar':data['avatar'],
            'address':data['address']
        }
    })
    # myuser.update({'_id': ObjectId(_id)}, {
    #     '$push': {
    #         'address':data['address']
    #     }
    # })
    return jsonify({'message':'Udated Successfully'})



#get all products
@app.route('/allproducts', methods=['GET'])
def all_product():
    product = myproduct.find()
    resp = dumps(product)
    return resp

#insert products
@app.route('/insertproduct', methods=['POST'])
def insert_product():
    data = request.get_json()
    print(data)
    product = {
        'pimage': data['pimage'],
        'pname': data['pname'],
        'pcost':data['pcost']
    }
    myproduct.insert(product)
    return jsonify({'message':'Product created successfully!'})





#error handler
@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        message:'Not Found'+request.url
    }
    resp = jsonify(message)
    resp.status_code = 404
    return resp



if __name__ == '__main__':
    app.run(debug = True)