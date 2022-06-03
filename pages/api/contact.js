import sendEmail from "../../lib/mail";

export default async function handler(req, res) {
    await req;
    const message = {
        to: "petrovandrey13@mail.ru",
        subject: `Письмо с сайта museum от ${req.body.firstName}`,
        text: `
Имя: ${req.body.firstName}
Телефон: ${req.body.tel}
Связаться по: ${req.body.contact}
Сообщение: ${req.body.comment}
        `,
    };
    sendEmail(message);
    console.log(message);
    res.send(`Спасибо за заявку, ${req.body.name}!`);
}
