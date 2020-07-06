const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

let opts = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'secret'
}

passport.use(new JWTStrategy(opts,(jwtPayload,done)=>{

    User.findById(jwtPayload._id,(err,user)=>{
        if(err){
            console.log("Error in finding user :/");
            return;
        }

        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    })

}))

module.exports = passport;