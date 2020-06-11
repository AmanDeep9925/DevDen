const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req, res){
    Post.findById(req.body.post,(err,post) =>{
        if(err){
            console.log("Unable to find the post :/");
            return;
        }

        if(post){
            // console.log(post.comments);
            Comment.create({
                content : req.body.content,
                post : req.body.post,
                user : req.user._id
            },(err,comment) =>{
                post.comments.push(comment);
                post.save();
                console.log("Added Comment :)");
                res.redirect('/');
            })
        
        }

        
        
    })
}