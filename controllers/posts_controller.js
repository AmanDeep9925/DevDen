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
        let post = await Post.create({
            content: req.body.content,
            user: req.user._id
        });

        if(req.xhr){
            return res.status(200).json({
                data : {
                    post : post
                },
                message : "Post Created"
            })
        }
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

        if(req.xhr){
            return response.status('200').json({
                data : {
                    post_id : req.params.id
                },
                message : 'Post Deleted'
            })
        }

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