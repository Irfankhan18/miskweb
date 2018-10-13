const express = require("express");
const router = express.Router();
//const nodemailer = require("nodemailer");
 // using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');


//Register
router.post('/sendmail', (req, res) =>{
    console.log("reached email");
   
//console.log(process.env);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'info@misksolutions.com',
  from: 'miskweb@misksolutions.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail
.send(msg)
.then(() => {
  //Celebrate
  res.send({success:true, msg:"Your email send successfully!"});
})
.catch(error => {

  //Log friendly error
  console.error(error.toString());


  //Extract error msg
  const {message, code, response} = error;

  //Extract response msg
  const {headers, body} = response;
  res.send({success:false, msg:"Something went Wrong!"});
});
   // res.send('email');
    
});

module.exports=router;