import Image from "next/image";
import Form from "./Form";

import "swiper/css";
import "swiper/css/scrollbar";
import styles from "../../styles/modules/Tickets.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

const Tickets = () => {
    const tickets = [
        {
            imgSrc: "/img/tickets/ticket-1.jpg",
            caption: "Детей",
            descr: "Посетители младше 18 лет",
            price: 300,
            background: "#F4B63E",
            color: "#131722",
        },
        {
            imgSrc: "/img/tickets/ticket-2.jpg",
            caption: "Взрослых",
            descr: "Посетители старше 18 лет",
            price: 500,
            background: "#A2543D",
            color: "#fff",
        },
        {
            imgSrc: "/img/tickets/ticket-3.jpg",
            caption: "Групп от 15 человек",
            descr: "Посетители старше 18 лет",
            price: 400,
            background: "#131722",
            color: "#fff",
        },
    ];
    return (
        <section className={styles.tickets}>
            {/* <div className={`${styles.swiper} container`}>
                <div className={styles.swiperConntainer}>
                    <Swiper
                        scrollbar={{
                            hide: false,
                        }}
                        slidesPerView="auto"
                        spaceBetween={24}
                        breakpoints={{
                            1228: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        modules={[Scrollbar]}
                        className="history-swiper"
                    >
                        {tickets.map((ticket, index) => (
                            <SwiperSlide className={styles.slide} key={index}>
                                <div
                                    style={{
                                        color: `${ticket.color}`,
                                        backgroundColor: `${ticket.background}`,
                                    }}
                                    key={index}
                                    className={styles.ticket}
                                >
                                    <div className={styles.imgBlock}>
                                        <Image
                                            alt="ticket preview"
                                            src={ticket.imgSrc}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className={styles.content}>
                                        <div
                                            className={`${styles.flex} ${styles.flexMargined}`}
                                        >
                                            <span className={styles.span}>
                                                Для
                                            </span>
                                            <div>
                                                <h3 className={styles.caption}>
                                                    {ticket.caption}
                                                </h3>
                                                <span className={styles.text}>
                                                    {ticket.descr}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={styles.flex}>
                                            <span className={styles.span}>
                                                Цена
                                            </span>
                                            <div>
                                                <h3 className={styles.price}>
                                                    {ticket.price} ₽
                                                </h3>
                                                <span className={styles.text}>
                                                    1 чел
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div> */}
            <div className={`${styles.container} container`}>
                <div className={styles.column1}>
                    <h2 className={`${styles.title} stn-title`}>
                        Билеты в музей{" "}
                    </h2>
                    <div className={`${styles.swiper} container`}>
                        <div className={styles.swiperConntainer}>
                            <Swiper
                                scrollbar={{
                                    hide: false,
                                }}
                                slidesPerView="auto"
                                spaceBetween={24}
                                breakpoints={{
                                    1228: {
                                        slidesPerView: 3,
                                        spaceBetween: 24,
                                    },
                                }}
                                modules={[Scrollbar]}
                                className="history-swiper"
                            >
                                {tickets.map((ticket, index) => (
                                    <SwiperSlide
                                        className={styles.slide}
                                        key={index}
                                    >
                                        <div
                                            style={{
                                                color: `${ticket.color}`,
                                                backgroundColor: `${ticket.background}`,
                                            }}
                                            key={index}
                                            className={styles.ticket}
                                        >
                                            <div className={styles.imgBlock}>
                                                <Image
                                                    alt="ticket preview"
                                                    src={ticket.imgSrc}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <div className={styles.content}>
                                                <div
                                                    className={`${styles.flex} ${styles.flexMargined}`}
                                                >
                                                    <span
                                                        className={styles.span}
                                                    >
                                                        Для
                                                    </span>
                                                    <div>
                                                        <h3
                                                            className={
                                                                styles.caption
                                                            }
                                                        >
                                                            {ticket.caption}
                                                        </h3>
                                                        <span
                                                            className={
                                                                styles.text
                                                            }
                                                        >
                                                            {ticket.descr}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={styles.flex}>
                                                    <span
                                                        className={styles.span}
                                                    >
                                                        Цена
                                                    </span>
                                                    <div>
                                                        <h3
                                                            className={
                                                                styles.price
                                                            }
                                                        >
                                                            {ticket.price} ₽
                                                        </h3>
                                                        <span
                                                            className={
                                                                styles.text
                                                            }
                                                        >
                                                            1 чел
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        {tickets.map((ticket, index) => (
                            <div
                                style={{
                                    color: `${ticket.color}`,
                                    backgroundColor: `${ticket.background}`,
                                }}
                                key={index}
                                className={styles.ticket}
                            >
                                <div className={styles.imgBlock}>
                                    <Image
                                        alt="ticket preview"
                                        src={ticket.imgSrc}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.flex}>
                                        <span className={styles.span}>Для</span>
                                        <span className={styles.span}>
                                            Цена
                                        </span>
                                    </div>
                                    <div>
                                        <div
                                            className={`${styles.flex} ${styles.flexMargined}`}
                                        >
                                            <h3 className={styles.caption}>
                                                {ticket.caption}
                                            </h3>
                                            <span className={styles.price}>
                                                {ticket.price} ₽
                                            </span>
                                        </div>
                                        <div className={styles.flex}>
                                            <span className={styles.text}>
                                                {ticket.descr}
                                            </span>
                                            <span className={styles.text}>
                                                1 чел
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.column2}>
                    <p className={styles.notice}>Внимание!</p>
                    <p className={styles.noticeDescr}>
                        Бронирования онлайн билетов на сайте нет. Напишите в
                        комментарие сколько билетов и на какое число вам нужно
                    </p>
                    <Form title="Оформление заказа" />
                </div>
            </div>
        </section>
    );
};

export default Tickets;
