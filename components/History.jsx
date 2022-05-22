import styles from "../styles/modules/History.module.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import Image from "next/image";

const History = ({ obj }) => {
    const { title, descr, cards } = obj;
    return (
        <section className={styles.history}>
            <div className={`container`}>
                <div className={`${styles.content} content`}>
                    <h2 className={`${styles.title} stn-title`}>{title}</h2>
                    {descr && (
                        <p className={`${styles.description} stn-text`}>
                            {descr}
                        </p>
                    )}
                </div>
            </div>
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
                        {cards.map((card, index) => (
                            <SwiperSlide className={styles.slide} key={index}>
                                <Image
                                    src={card.imgSrc}
                                    alt="card"
                                    width={378}
                                    height={280}
                                />
                                <p className={`${styles.text}`}>{card.descr}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default History;
