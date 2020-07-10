const nodeMailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');


// Defining tranporter

let transporter = nodeMailer.createTransport({
    service : 'gmail',
    host : 'smtp.gmail.com',
    port : 587,
    secure : false,
    auth : {
        user : 'amansingh13260@gmail.com',
        pass : 'txafezahdznkwuvg'
    }
})

let renderTemplate = (data,relativePath) =>{

    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,(err,template)=>{
            if(err){
                console.log("Error in rendering template :/",err);
                return;
            }

            mailHTML = template;
        } 
    )

    return mailHTML;
}

module.exports = {
    transporter : transporter,
    renderTemplate : renderTemplate
}