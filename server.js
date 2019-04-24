const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

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

//GET New User Route
app.get('/signup', (req,res)=>{
    res.send('<h1>Sign Up</h1>')

})











//======================Start Server==============================//
app.listen(PORT, ()=> console.log(`Server Started on PORT ${PORT}`))
