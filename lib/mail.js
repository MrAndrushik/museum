import nodemailer from "nodemailer";

const smtpTransport = nodemailer.createTransport(
    {
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        tls: { rejectUnauthorized: false },
    },
    {
        from: "museum <example@yandex.ru>",
    }
);

const sendEmail = (message) => {
    smtpTransport.sendMail(message, function (error, info) {
        smtpTransport.close();
        if (error) {
            console.error(error);
        }
    });
};

export default sendEmail;
