import Image from "next/image";
import styles from "../../styles/home/Types.module.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const Types = ({ obj }) => {
    return (
        <section className={styles.types}>
            <div className={`${styles.container} container`}>
                <h2 className={`${styles.title} stn-title`}>
                    В музее счастливого детства можно проводить
                </h2>
            </div>
            <Swiper
                breakpoints={{
                    1228: {
                        slidesPerView: 4,
                        spaceBetween: 89,
                    },
                    350: {
                        slidesPerView: "auto",
                        spaceBetween: 24,
                    },
                }}
                className={`${styles.swiper} container  `}
            >
                {obj.map((card, index) => (
                    <SwiperSlide className={styles.slide} key={index}>
                        <div
                            style={{
                                backgroundColor: card.background,
                            }}
                            className={
                                index % 2 === 1
                                    ? `${styles.card} ${styles.margined}`
                                    : styles.card
                            }
                        >
                            <Image
                                src={card.imgSrc}
                                alt="card"
                                width={240}
                                height={240}
                            />
                            <p
                                style={{ color: card.color }}
                                className={`${styles.text} stn-text`}
                            >
                                {card.descr}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Types;
