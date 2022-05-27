import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import styles from "../../styles/modules/Form.module.scss";

const Form = ({ title }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        await fetch("/api/contact", {
            method: "post",
            body: JSON.stringify(data),
        });
    };

    return (
        <>
            {title && <h3 className={styles.title}>{title}</h3>}
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.label}>
                    Имя
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Иван"
                        {...register("firstName", {
                            required: "Обязательное поле",
                        })}
                    />
                    <span className={styles.error}>
                        {errors.firstName?.message}
                    </span>
                </label>
                <label className={styles.label}>
                    Телефон
                    <input
                        className={styles.input}
                        type="tel"
                        placeholder="+7 999 999 999"
                        {...register("tel", {
                            required: "Обязательное поле",
                            pattern: {
                                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                                message: "Введите корректный номер",
                            },
                        })}
                    />
                    <span className={styles.error}>{errors.tel?.message}</span>
                </label>
                <p className={styles.text}>Как с вами связаться</p>
                <div className={styles.flex}>
                    <input
                        {...register("contact", {
                            required: true,
                        })}
                        checked
                        name="contact"
                        className={styles.radio}
                        type="radio"
                        id="telephone"
                        value="telephone"
                    />

                    <label className={styles.label} htmlFor="telephone">
                        По телефону
                    </label>

                    <input
                        {...register("contact", {
                            required: true,
                        })}
                        name="contact"
                        className={styles.radio}
                        type="radio"
                        id="whatsApp"
                        value="whatsApp"
                    />

                    <label className={styles.label} htmlFor="whatsApp">
                        WhatsApp
                    </label>

                    <input
                        {...register("contact", {
                            required: true,
                        })}
                        name="contact"
                        className={styles.radio}
                        type="radio"
                        id="telegram"
                        value="telegram"
                    />
                    <label className={styles.label} htmlFor="telegram">
                        Telegram
                    </label>
                </div>

                <label className={styles.label}>
                    Комментарий
                    <textarea
                        className={styles.textarea}
                        {...register("comment", {
                            required: "Обязательное поле",
                        })}
                        name="comment"
                        rows="2"
                        placeholder="Мне нужно 2 взрослых, 1 детский на 9 мая"
                    ></textarea>
                    <span className={styles.error}>
                        {errors.comment?.message}
                    </span>
                </label>

                <input
                    value="Отправить заявку"
                    className={styles.submit}
                    type="submit"
                />
                <p className={styles.descr}>
                    Нажимая на кнопку, соглашаюсь с
                    <Link href="/privacy">
                        <a className={styles.link}>
                            политикой обработки персональных данных
                        </a>
                    </Link>
                </p>
            </form>
        </>
    );
};

export default Form;
