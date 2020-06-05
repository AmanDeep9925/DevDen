// importing passport
const passport = require('passport');

// importing strategies
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// Authentication using passport

passport.use(new LocalStrategy({
    usernameField: 'email'
},
    (email, password, done) => {
        // find a user and establish the identity
        User.findOne({email: email},(err,user) =>{
            if(err){
                console.log("Error in finding user :/");
                return done(err);
            }

            // if user is found
            if(!user || user.password != password){
                console.log('Invalid Username / Password');
                return done(null,false);
            }

            return done(null,user);
        });
    }

));

// Serializing the user to check which key is to be kept or not in cookies
passport.serializeUser((user,done) => {
    done(null,user.id);
})

// Deserializing the user from the key in cookies
passport.deserializeUser((id,done) =>{
    User.findById(id,(err,user) =>{
        if(err){
            console.log("Error in finding user :/");
            return done(err);
        }

        return done(null,user);
    })
})

module.exports = passport;