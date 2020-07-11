const Comment = require('../models/comment');
const Post = require('../models/post');
const commentMailer = require('../mailers/mailer');

const commentEmailWorker = require('../workers/commentEmailWorker');
const queue= require('../config/kue');

module.exports.create = async function (req, res) {


    try {
        let post = await Post.findById(req.body.post);

        if (post) {
            let comment = await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });

            post.comments.push(comment);
            post.save();

            comment = await comment.populate('user','name email').execPopulate();
            // commentMailer.newComment(comment);
            let job = queue.create('emails',comment).save((err)=>{
                if(err){
                    console.log("Error in creating a queue :/");
                    // return;
                }
                console.log("Job enqued ->",job.id);
            })

            req.flash("success","Added a Commnet :)");
            res.redirect('/');
        }
    } catch (err) {
        console.log(`Error :/ ${err}`);
    }
}

module.exports.destroy = async (req, res) => {


    try {
        let comment = await Comment.findById(req.params.id);
        if(comment.user == req.user.id){
            let postId = comment.post;
            comment.remove();

            let post = await Post.findByIdAndUpdate(postId,{$pull : {comments : req.params.id}});
            req.flash('success',"Comment removed :/");
            return res.redirect('back');
        }else{
            return res.redirect('back');
        }
    } catch (error) {
        console.log(`Error :/ + ${error}`);
        return;
    }
}