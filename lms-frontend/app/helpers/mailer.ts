import nodemailer from 'nodemailer';

const sendEmail = async function (email: string, subject: string, message: string) {
  var transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "api",
      pass: "accd926f99d2af31d757b1842a732ab8"
    }
  });
  console.log('hello mailer');
  console.log(email);
  

  await transport.sendMail({
    from: "skilltechindia.net",
    to: email,
    subject: subject,
    html: message
  })
}

console.log('end');


export default sendEmail;