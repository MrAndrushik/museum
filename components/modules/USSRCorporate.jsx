import Image from "next/image";
import Link from "next/link";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import "swiper/css";
import styles from "../../styles/modules/USSRCorporate.module.scss";
import CircleLink from "./CircleLink";

const USSRCorporate = ({ obj }) => {
    const { cards, slider } = obj;
    return (
        <section className={styles.corporate}>
            <div className={`${styles.container} container`}>
                <CircleLink theme={"yellow"} href={"/"} mobile={false}>
                    Подробнее
                </CircleLink>
                <div className={styles.flex}>
                    <div className="container">
                        <div className={styles.top}>
                            <div className={styles.content}>
                                <h2 className={`${styles.title} caption`}>
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

                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className={styles.cardSwiper}
                            >
                                {slider.map((item, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className={styles.cardSlide}
                                    >
                                        <Image
                                            objectFit="cover"
                                            layout="fill"
                                            alt="card"
                                            src={item}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
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
                                modules={[Scrollbar]}
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
                                            <div className={styles.imgBlock}>
                                                <Image
                                                    objectFit="cover"
                                                    layout="fill"
                                                    alt="card"
                                                    src={card.imgSrc}
                                                />
                                            </div>
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
                <CircleLink theme={"yellow"} href={"/"} mobile={true}>
                    Подробнее
                </CircleLink>
            </div>
        </section>
    );
};

export default USSRCorporate;
