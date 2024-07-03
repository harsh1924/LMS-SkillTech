import nodemailer from 'nodemailer';

const sendEmail = async function (email: string, subject: string, message: string) {
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 2525,
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

// export const transpoter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_HOST),
//     secure: false,
//     auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD
//     }
// });

// export const sendEmail = async (
//     email: string,
//     subject: string,
//     message: string
// ): Promise<string | null> => {
//     const info = await transpoter.sendMail({
//         from: process.env.EMAIL_FROM,
//         to: email,
//         subject: subject,
//         html: message
//     })

//     return info?.messageId;
// }