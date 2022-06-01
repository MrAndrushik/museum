import mailer from "nodemailer";

const smtpTransport = mailer.createTransport(
    {
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
            user: "example@mail.ru",
            pass: "12345421museum",
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
