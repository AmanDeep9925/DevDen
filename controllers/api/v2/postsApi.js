module.exports.index = (req,res) => {
    return res.json(200,{
        version : 'V2',
        message : "New UI for the posts",
        posts : []
    })
}