const Post = require('../models/post');
const Comment = require('../models/comment');
// TO create a post

module.exports.create = async (req, res) => {
    // Post.create({
    //     content:req.body.content,
    //     user : req.user._id
    // },(err,post) => {
    //     if(err){
    //         console.log("Error in creating a post :/");
    //         return;
    //     }

    //     return res.redirect('back');
    // })

    try {
        await Post.create({
            content: req.body.content,
            user: req.user._id
        });
        req.flash('success',"Post a new story :)");
        return res.redirect('back');
    } catch (error) {
        console.log("Error :/" + err);
        return;
    }
}

// to delete a post

module.exports.destroy = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);

    if (post.id == req.params.id) {
        post.remove();

        req.flash("success","Post and associated comments removed :/");

        await Comment.deleteMany({ post: req.params.id });
        return res.redirect('back');
    } else {
        req.flash("error","You cannot delete this post :?");
        return res.redirect('back');
    }
    } catch (err) {
        console.log(`Error :/ ${err}`);
    }
}