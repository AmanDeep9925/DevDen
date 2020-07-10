const nodeMailer = require('../config/nodeMailer');

// this is another way of exporting a method

exports.newComment = (comment)=>{

    // console.log('Inside new Comment mailer',comment);
    let htmlString = nodeMailer.renderTemplate({comment : comment},'/comments/comments.ejs');

    nodeMailer.transporter.sendMail({
        from : 'amansingh13260@gmail.com',
        to : comment.user.email,
        subject : 'New Comment Published',
        html : htmlString
    },(err,info)=>{
        if(err){
            console.log("Error in sending mail",err);
            return;
        }
        console.log("Message Sent",info);
        return;
    });
}

