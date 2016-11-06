var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/collegeride');
var Promise = require('promise');
var User = require('models/User');
var bcrypt = require('bcryptjs');
var _ = require('lodash');
var jwt = require('jsonwebtoken');

var service = {};

service.authenticate = authenticate;
service.create = create;
service.getAllUsers = getAllUsers;
service.getByEmail = getByEmail;

function authenticate(email, password) {
    var promise = new Promise(function(resolve, reject) {
        User.findOne({"email" : email}, function(err, userInfo) {
            if (err) {
                reject(err.name + ':' + err.message);
            }
            if (userInfo && bcrypt.compareSync(password, userInfo.password)) {
                resolve(jwt.sign({ sub: userInfo._id}, "ahashedstring"));
            }
            else {
                resolve();
            }
            
        });
    });

    return promise;    
}

function create(params) {
    var promise = new Promise(function (resolve, reject) {
        User.findOne({"email" : params.email}, function(err, user) {
            if (user) {
                reject("Email already exists.")
            } else {
                createUser();
            }
            function createUser() {
                var newUser = new User();
                newUser.firstname = params.firstname;
                newUser.lastname = params.lastname;
                newUser.email = params.email;
                newUser.password = bcrypt.hashSync(params.password, 10);
                newUser.school = params.school;
                newUser.save();
                resolve();
        }
        });
    });

    return promise;
}

function getAllUsers(req, res) {
    var promise = new Promise(function (resolve, reject) {
        User.find(function(err, users){
            if (err) {
                res.send(err);
                reject();
            }
            res.json(users);
            resolve();
        });
    });
}

function getByEmail(req, res) {
    var promise = new Promise(function (resolve, reject) {
        User.findOne({"email": req.params.email}, function(err, user) {
            if (err) {
                res.send(err);
                reject();
            }
            res.json(user);
            resolve();
        });
    });
}
module.exports = service;