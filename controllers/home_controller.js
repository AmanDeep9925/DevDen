module.exports.home = (req,res) =>{
    return res.render("home",{title : 'DevDen'});
}; 

module.exports.practice = (req,res) =>{
    return res.end(`<h1> In the Practice Section </h1>`);
}

// module.exports.about = (req,res) =>{
//     return res.end(`<h1> about </h1>`);
//     // return res.end(r)
// }