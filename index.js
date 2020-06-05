//TODO:
// Setup the directory structure
// Install the express
// Add the static folder for css

// Accessing express 
const port = 8000;
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');


// Accesing databse

const db = require('./config/mongoose');

// Accessing express session for cookie handling
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

// Using url encoder

app.use(express.urlencoded());

app.use(cookieParser());

// accessing the static folders
app.use(express.static('./assets'));
// To access the express layout
app.use(expressLayouts);

// To set the styles and scripts for pages

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// Setting up the view engine

app.set('view engine','ejs');

app.set('views','./views');

// Using sessions
app.use(session({
    name: 'DevDen',
    // TODO: Change the secret before deployment in production mode
    secret : 'blahSomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

// Using passport
app.use(passport.initialize());
app.use(passport.session());

// Intializing router
app.use('/',require('./routes'));


// Intializing PORT for the server
app.listen(port,(err) =>{
    if(err){
        console.log(`Unable to start the server :/ ${err}`);
        return;
    }

    console.log(`Server is running fine :) at : http://localhost:${port}`);
})