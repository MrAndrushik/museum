import sendEmail from "../../lib/mail";

export default async function handler(req, res) {
    const message = {
        to: "example@maol.ru",
        subject: `Письмо с сайта museum от ${req.body.firstName}`,
        text: `
Имя: ${req.body.firstName}
Телефон: ${req.body.tel}
Связаться по: ${req.body.contact}
Сообщение: ${req.body.comment}
        `,
    };
    sendEmail(message);
    res.send(`Спасибо за заявку, ${req.body.name}!`);
}
