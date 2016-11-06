var express = require('express');
var router = express.Router();
var userService = require('Express_services/crud.services');
router.get('/', getAllUsers);
router.get('/:email', getByEmail);
router.post('/registerUser', registerUser);
router.post('/authenticateUser', authenticateUser);

function authenticateUser(req, res) {
    userService.authenticate(req.body.email, req.body.password)
        .then(function(token) {
            if(token) {
                res.send({token});
            } else {
                res.status(401).send('Username or passworld is incorrect');
                console.log('Authenticate failed.');
            }
        });
}
module.exports = router;


function registerUser(req, res) {
    userService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function getAllUsers(req, res) {
    userService.getAllUsers(req, res);
}

function getByEmail(req, res) {
    userService.getByEmail(req, res);
}