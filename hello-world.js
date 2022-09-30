// First Task

// console.log('HELLO WORLD');

// --------------------------------------------------

// Second Task

// const http = require('http');
// const port = 3000;
// let server = http.createServer((req, res) => {
//   console.log('Server Created');
//   res.end('<h1>Hello World</h1>\n');
// });

// server.listen(port);

// console.log('Server is up and running');

// --------------------------------------------------

// Third Task

// const fs = require('fs');

// fs.appendFile('welcome.txt', 'Hello Node', (err) => {
//   if (err) throw err;
//   console.log('Created Welcome.txt');
// });

// console.log('Program is Running');

// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// --------------------------------------------------

// Fourth Task

// const generator = require('generate-password');

// let password = generator.generate({});

// // 'uEyMTw32v9'
// console.log(password);

// --------------------------------------------------

// Fifth Task

// const nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//   service: 'hotmail',
//   auth: {
//     user: 'ahmedmohamed.amin@hotmail.com',
//     pass: '************'
//   }
// });

// let mailOptions = {
//   from: 'ahmedmohamed.amin@hotmail.com',
//   to: 'medo_zezo1992@yahoo.com',
//   subject: 'Testing Sending Email',
//   text: 'Hello World!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
