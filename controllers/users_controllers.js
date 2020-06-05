// importing model

const User = require('../models/user');

// Renders the user page
module.exports.user = (req,res) =>{
    return res.render('user',{
        title : 'Welcome to your Den'
    })
}
// Renders the post page
module.exports.profile = (req,res) =>{
    return res.render('profile',{
        title : 'Manage your Den'
    })
}

// Remders the signup page
module.exports.signup = (req,res) =>{
    return res.render("signUp",{title: "Make a new Den"});
}

// Reders the sing in page

module.exports.login = (req,res) =>{
    return res.render("logIn",{title : "LogIn to Den"});
}

// Get the sign up data

module.exports.create = (req,res) =>{
    // ToDo later

    if(req.body.password != req.body.confirmPassword){
        return res.redirect('back');
    }

    User.findOne({email : req.body.email},(err,user) =>{
        if(err){
            console.log("Error in finding user in Sign Up ");
            return;
        }

        if(!user){
            // create user
            User.create(req.body,(err,user) =>{
                if(err){
                    console.log("Error in creating user while singing Up :/ ");
                    return;
                }

                return res.redirect('/users/login');
            })
        }else{
            return res.redirect('back');
        }
    })
}

module.exports.createSession = (req,res) =>{
    return res.redirect('/');
}