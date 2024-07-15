import nodemailer from 'nodemailer';

const sendEmail = async function (email: string, subject: string, message: string) {
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    service: process.env.SMTP_SERVICE,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      // api
      pass: process.env.SMTP_PASSWORD
      // accd926f99d2af31d757b1842a732ab8
    }
  });

  await transport.sendMail({
    from: process.env.EMAIL_FROM,
    //skilltechindia.net
    to: email,
    subject: subject,
    html: message
  })
}

console.log('end');


export default sendEmail;