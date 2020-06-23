// importing model

const User = require('../models/user');

// Renders the user page
module.exports.user = (req, res) => {
    return res.render('user', {
        title: 'Welcome to your Den'
    })
}
// Renders the post page
module.exports.profile = (req, res) => {

    User.findById(req.params.id, (err, user) => {
        return res.render('profile', {
            title: "User's  Den",
            profileUser: user

        })
    })

}

// Updating the user info

module.exports.update = (req, res) => {
    if (req.params.id == req.user.id) {
        User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            return res.redirect('back');
        })
    }else{
        return res.status(401).send('Unauthorized');
    }
}

// Remders the signup page
module.exports.signup = (req, res) => {

    if (req.isAuthenticated()) {
        res.redirect('/users/profile');
    }

    return res.render("signUp", { title: "Make a new Den" });
}

// Reders the sing in page

module.exports.login = (req, res) => {

    if (req.isAuthenticated()) {
        res.redirect('/users/profile');
    }

    return res.render("logIn", { title: "LogIn to Den" });
}

// Get the sign up data

module.exports.create = (req, res) => {
    // ToDo later

    if (req.body.password != req.body.confirmPassword) {
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log("Error in finding user in Sign Up ");
            return;
        }

        if (!user) {
            // create user
            User.create(req.body, (err, user) => {
                if (err) {
                    req.flash("error","Unable to create a new user :/");
                    return;
                }
                req.flash("success","Account created, Login to Continue");
                return res.redirect('/users/login');
            })
        } else {
            return res.redirect('back');
        }
    })
}

module.exports.createSession = (req, res) => {
    req.flash('success',"Logged In Successfully")
    return res.redirect('/');
}

// LogOut

module.exports.destroySession = (req, res) => {

    req.logout();
    req.flash('success','You have been logged out !');
    return res.redirect('/');
}