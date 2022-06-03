import nodemailer from "nodemailer";

const smtpTransport = nodemailer.createTransport(
    {
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
            user: "mrandrushik@yandex.ru",
            pass: "Rghkt193945",
        },
    },
    {
        from: "museum <mrandrushik@yandex.ru>",
    }
);

const sendEmail = (message) => {
    smtpTransport.sendMail(message, function (error, info) {
        console.log(info);
        smtpTransport.close();
    });
};

export default sendEmail;

// import nodemailer from "nodemailer";

// let transporter = nodemailer.createTransport({
//     sendmail: true,
//     newline: "unix",
//     path: "/usr/sbin/sendmail",
// });

// const sendMail = (message) => {
//     transporter.sendMail(
//         {
//             from: "sender@example.com",
//             to: "recipient@example.com",
//             subject: "Message",
//             text: `${message.text}`,
//         },
//         (err, info) => {
//             console.log(info.envelope);
//             console.log(info.messageId);
//         }
//     );
// }

// export default sendMail;
