import nodemailer from 'nodemailer';

const sendEmail = async function (email: string, subject: string, message: string) {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "92bca9cd86422f",
      pass: "6588e7836d396d"
    }
  });
  console.log('hello mailer');
  console.log(email);
  

  await transport.sendMail({
    from: "skilltechindia.net",
    to: email,
    subject: 'subject',
    html: 'message'
  })
}

console.log('end');


export default sendEmail;