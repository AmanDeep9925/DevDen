module.exports.user = (req,res) =>{
    return res.render('user',{
        title : 'Welcome to your Den'
    })
}

module.exports.profile = (req,res) =>{
    return res.render('profile',{
        title : 'Manage your Den'
    })
}

