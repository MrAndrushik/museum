import nodemailer from "nodemailer";

const smtpTransport = nodemailer.createTransport(
    {
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
            user: "example@mail.ru",
            pass: "12344321",
        },
        tls: { rejectUnauthorized: false },
    },
    {
        from: "museum <example@mail.ru>",
    }
);

const sendEmail = (message) => {
    smtpTransport.sendMail(message, function (error, info) {
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
