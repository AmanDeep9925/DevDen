const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/devden_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error Connecting to DataBase"));


db.once('open',() =>{
    console.log("Connected to DATABASE :: MongoDB");
})

module.exports = db;