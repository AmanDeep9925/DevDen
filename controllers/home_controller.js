module.exports.home = (req,res) =>{
    return res.end(`<h1>Express is Up for DEVDEN </h1>`);
}; 

module.exports.practice = (req,res) =>{
    return res.end(`<h1> In the Practice Section </h1>`);
}

module.exports.about = (req,res) =>{
    return res.end(`<h1> about </h1>`);
    // return res.end(r)
}