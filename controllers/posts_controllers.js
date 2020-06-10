const post = require('../models/post');

module.exports.posts = (req,res) =>{
    return res.render('posts',{
        title : "Check Your Hunts"
    })
}

module.exports.create = (req,res) =>{
    post.create({
        content: req.body.content,
        user : req.user._id
    },(err,post) =>{
        if(err){
            console.log('Error in creating a post :/');
            return;
        }

        return res.redirect('back');
    })
}