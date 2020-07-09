const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

// Using google OAuth
passport.use(new googleStrategy({
    clientID: '507235032273-2en4u84r8hvjc5plkhg0r9idemqm5spv.apps.googleusercontent.com',
    clientSecret: 'IyTHtGNfqzp6C-UFX75WsY9p',
    callbackURL: 'http://localhost:8000/users/auth/google/callback',
    },
    (accessToken,refreshToken,profile,done)=>{
        // Find a user
        User.findOne({email : profile.emails[0].value}).exec((err,user)=>{
            if(err){
                console.log('Error in google strategy passport',err);
                return;
            }
            console.log(accessToken + "" + refreshToken)
            // console.log(profile);

            if(user){
                // if user set this user as req.user
                return done(null,user);
            }else{

                // if not found create and it as req.user
                User.create({
                    name : profile.displayName,
                    email : profile.emails[0].value,
                    password : profile.id
                },(err,user)=>{
                    if(err){
                        console.log('Error in creating user',err);
                        return;
                    }
                    return  done(null,user);
                })
            }

        })
    }

));

module.exports = passport;