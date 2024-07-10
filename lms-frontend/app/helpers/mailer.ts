import nodemailer from 'nodemailer';

const sendEmail = async function (email: string, subject: string, message: string) {
  var transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: "accd926f99d2af31d757b1842a732ab8"
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