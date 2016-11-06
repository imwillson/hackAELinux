require('rootpath')();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var expressJwt = require('express-jwt');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret:"ahashedstring", resave:false, saveUninitialized:true}));

//app.use('/api/users', expressJwt({secret:"ahashedstring"}).unless({path:['/api/users/authenticateUser', '/api/users/registerUser']}));

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/app/public'));


app.use('/', require('./Express_controllers/login.controller'));
app.use('/register', require('./Express_controllers/register.controller'));
app.use('/app/home', require('./Express_controllers/home.controller'));

app.use('/api/users', require('./Express_controllers/users.controller'));

var server = app.listen(8000, function () {
    console.log("Loading collegeride.net at http://localhost:" + server.address().port);
});