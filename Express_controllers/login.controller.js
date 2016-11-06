var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
    res.sendFile('/home/archer/hackAELinux/app');
});

router.post('/', function(req, res) {
    request.post({
        url: 'http://localhost:8000/api/users/authenticateUser',
        form: req.body, 
        json: true
    }, function(err, response, body) {
        if (!body.token) {
            return res.redirect('http://localhost:8000');
        }
        req.session.token = body.token;
        res.redirect('app/home');
    });
});

module.exports = router;