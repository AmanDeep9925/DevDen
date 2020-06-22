const Post = require('../models/post');
const User = require('../models/user');


module.exports.home = async (req, res) => {

    try {
        // Populate the user of the each post

        let posts = await Post.find({})
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                }
            });

        let users = await User.find({});

        return res.render("home", {
            title: 'DevDen',
            posts: posts,
            allUsers: users
        });
    } catch (err) {
        console.log("Error :/" + err);
        return;
    }



};

module.exports.practice = (req, res) => {
    return res.end(`<h1> In the Practice Section </h1>`);
}
