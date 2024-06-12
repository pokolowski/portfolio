const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3300
var nodemailer = require('nodemailer');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'coding.eye.mailer@gmail.com',
    pass: 'nkxz qlkq ljlf dsxu'
  }
});





app.post('/api/sendmail', (req, res) => {
//   res.send('Hello World!')
var mailOptions = {
    from: 'coding.eye.mailer@gmail.com',
    to: 'okolowski.p@gmail.com',
    subject: req.body.subject,
    text: req.body.content
  };
  // console.log(req.body);
  transporter.sendMail(mailOptions, function(error, info){
    let response ={res:''}
    if (error) {
      console.log(error);
      response = {res: error};
    } else {
      console.log('Email sent: ' + info.response);
      response = {res: 'Mail Sent'};
    }
    res.send(response);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})