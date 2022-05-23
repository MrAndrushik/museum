import Image from "next/image";
import Link from "next/link";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "../styles/modules/USSRCorporate.module.scss";

const USSRCorporate = ({ obj }) => {
    const { cards } = obj;
    return (
        <section className={styles.corporate}>
            <div className={`${styles.container} container`}>
                <Link href="/">
                    <a className={styles.link}>Подробнее</a>
                </Link>
                <div className={styles.flex}>
                    <div className="container">
                        <div className={styles.top}>
                            <div className={styles.content}>
                                <h2 className={`${styles.title} stn-title`}>
                                    Организуем мероприятия в стиле СССР
                                </h2>
                                <div className={styles.imgMobile}></div>
                                <p className={`${styles.descr} stn-text`}>
                                    Вечеринки, корпоративы, дни рождения,
                                    экскурсии и публичные вуступления, квесты
                                    и викторины, командные соревнования
                                </p>
                                <p className={styles.notice}>
                                    на нашей площадке с бесплатным посещением
                                    музея
                                </p>
                                <p className={styles.notice}>
                                    на любой другой локации
                                </p>
                            </div>
                            <div className={styles.imgDesc}>
                                <Swiper
                                    effect={"cards"}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className={styles.cardSwiper}
                                >
                                    <SwiperSlide className={styles.cardSlide}>
                                        Slide 1
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.cardSlide}>
                                        Slide 2
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.cardSlide}>
                                        Slide 3
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.cardSlide}>
                                        Slide 4
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <h3 className={styles.caption}>Интерактивы СССР</h3>
                        </div>
                    </div>
                    <div className={`${styles.swiper}`}>
                        <div className={styles.swiperConntainer}>
                            <Swiper
                                className={`${styles.swiper} container`}
                                breakpoints={{
                                    1228: {
                                        slidesPerView: 3,
                                        spaceBetween: 24,
                                    },
                                }}
                                grabCursor={true}
                                scrollbar
                                slidesPerView="auto"
                                spaceBetween={24}
                            >
                                {cards.map((card, index) => (
                                    <SwiperSlide
                                        className={styles.slide}
                                        key={index}
                                    >
                                        <div className={styles.card}>
                                            <div
                                                style={{
                                                    background: `url(${card.imgSrc}) no-repeat center center`,
                                                    backgroundSize: "cover",
                                                }}
                                                className={styles.imgBlock}
                                            ></div>
                                            <p
                                                className={`${styles.text} stn-text`}
                                            >
                                                {card.text}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container`}>
                <Link href="/">
                    <a className={`${styles.link} ${styles.mobile}`}>
                        Подробнее
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default USSRCorporate;
