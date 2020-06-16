const Post = require('../models/post');
const Comment = require('../models/comment');
// TO create a post

module.exports.create = (req, res) => {
    Post.create({
        content:req.body.content,
        user : req.user._id
    },(err,post) => {
        if(err){
            console.log("Error in creating a post :/");
            return;
        }

        return res.redirect('back');
    })
}

// to delete a post

module.exports.destroy = (req,res) =>{
    Post.findById(req.params.id,(err,post) =>{

        if(err){
            console.log("Unable to get the post :/");
            return;
        }
        // Am i allowed to delete a post that i am no tauthorised
        // .id is the string format of the _id
        // console.log(post + " " + req.params.id);
        if(post.id == req.params.id){
            post.remove();
            Comment.deleteMany({post : req.params.id},(err) =>{
                if(err){
                    console.log("Cannot delete the comments :/")
                }
            })
            return res.redirect('back');
        }else{
            return res.redirect('back');  
        }
        
    })
}