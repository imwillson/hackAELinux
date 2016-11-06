var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.sendFile('/home/archer/hackAELinux/app/views/home.html');
});

module.exports = router;