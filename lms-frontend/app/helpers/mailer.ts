import nodemailer from 'nodemailer';

const sendEmail = async function (email: string, subject: string, message: string) {
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  await transport.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: subject,
    html: message
  })
}

export default sendEmail;