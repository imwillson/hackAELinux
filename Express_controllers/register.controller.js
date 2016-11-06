var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
    res.sendFile('/home/archer/hackAELinux/Express_views/register.html');
}); 

router.post('/', function(req, res) {
    request.post({
        url: 'http://localhost:8000/api/users/registerUser',
        form: req.body,
        json: true
    }, function(){
          return res.redirect('http://localhost:8000');
        }
    );   
});

module.exports = router;