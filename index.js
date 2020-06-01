//TODO:
// Setup the directory structure
// Install the express
// Add the static folder for css

// Accessing express 
const port = 8000;
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// Accesing databse

const db = require('./config/mongoose');



// accessing the static folders
app.use(express.static('./assets'));
// To access the express layout
app.use(expressLayouts);

// To set the styles and scripts for pages

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// importing router
app.use('/',require('./routes'));

// Setting up the view engine

app.set('view engine','ejs');

app.set('views','./views');

// Intializing PORT for the server


app.listen(port,(err) =>{
    if(err){
        console.log(`Unable to start the server :/ ${err}`);
        return;
    }

    console.log(`Server is running fine :) at : http://localhost:${port}`);
})