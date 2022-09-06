// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'hotmail',
//   auth: {
//     user: 'medcare1987@outlook.com',
//     pass: 'Medcare198'
//   }
// });

// var mailOptions = {
//   from: 'medcare1987@outlook.com',
//   to: '19b421@gcek.ac.in',
//   subject: 'Sending Email using Node.js',
//   text: `Hi dude.`
//   // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

const sgMail = require('@sendgrid/mail');

const API_KEY = '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';

sgMail.setApiKey(API_KEY);

const Messsage={
  to:'19b421@gcek.ac.in',
  from:'medcare1987@outlook.com',
  subject:'Appointment confirmation',
  text:'Test email'
};

sgMail.send(Messsage)
  .then(Response => console.log('Email sent'))
.catch(error => console.log(error.Messsage))


