import nodemailer from 'nodemailer';

const sendEmail = async function (email: string, subject: string, message: string) {
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        auth: {
          user: "api",
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