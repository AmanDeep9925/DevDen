const Post = require('../models/post');


module.exports.home = (req,res) =>{

    // console.log(req.cookies)

    // Posts.find({},(err,posts) =>{
    //     return res.render("home",
    //     {
    //         title : 'DevDen',
    //         posts : posts
    //     });
    // })
    
    // Populate the user of the each post

    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate :{
            path :'user'
        }
    })
    .exec((err,posts) =>{
        return res.render("home",
        {
            title : 'DevDen',
            posts : posts
        });
    })

    // return res.render("home",
    //     {
    //         title : 'DevDen',
    //     });
}; 

module.exports.practice = (req,res) =>{
    return res.end(`<h1> In the Practice Section </h1>`);
}

// module.exports.about = (req,res) =>{
//     return res.end(`<h1> about </h1>`);
//     // return res.end(r)
// }