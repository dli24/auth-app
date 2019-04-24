const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

// View Engine (MUST TYPE BELOW CORRECTLY!!!!)
app.set('view engine', 'ejs')

//Database
const db = require('./models');

// ============================Middle Ware=========================//
//Parse URL ENCODED
app.use(bodyParser.urlencoded({extened: true}));
// Parse JSON DATA
app.use(bodyParser.json());

//Serve Public Directory
app.use(express.static(__dirname + '/public'));
//=============================ROUTE==============================//
//GET ROOT ROUTE
app.get('/', (req,res)=>{
    res.send('<h1>Auth APP</h1>');
});

//GET New User Route, SignUp Route
app.get('/signup', (req,res)=>{
    res.render('auth/signup')

})

//Create USER ROUTE POST for Sign Up
app.post('/signup', (req,res)=>{
    db.User.create(req.body, (err,newUser)=> {
        if (err) return res.render('auth/signup', { errors: [err]});
        res.redirect('/login');
    });
});

//Get Login Route
app.get('/login', (req,res)=>{
    res.render('auth/login');
});










//======================Start Server==============================//
app.listen(PORT, ()=> console.log(`Server Started on PORT ${PORT}`))
