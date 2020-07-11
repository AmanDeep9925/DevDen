const queue = require('../config/kue');

const commentsMailer = require('../mailers/mailer');

// Worker process function

queue.process('emails',(job,done)=>{
    console.log('emails worker is processing a job',job.data);
    commentsMailer.newComment(job.data);
    done();
})