import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles/modules/PreviewBlock.module.scss";
import SlideBtn from "./SlideBtn";

const PreviewBlock = ({ obj }) => {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <section className={styles.previewBlock}>
            <div className={`${styles.container} container`}>
                <Link href={obj.link}>
                    <a className={styles.link}>{obj.linkText}</a>
                </Link>
                <div className="content">
                    <div className={styles.top}>
                        <div className={styles.content}>
                            <h2 className={`${styles.title} stn-title`}>
                                {obj.title}
                            </h2>
                            <div className={styles.imgMobile}>
                                <Image
                                    src={`${obj.cards[activeCard].imgSrc}`}
                                    alt="full-screen"
                                    width={710}
                                    height={400}
                                />
                            </div>
                            <p className={`${styles.descr} stn-text`}>
                                {obj.descr}
                            </p>
                            {obj.notice && (
                                <p className={styles.notice}>{obj.notice}</p>
                            )}
                        </div>
                        <div className={styles.imgDesc}>
                            <Image
                                src={`${obj.cards[activeCard].imgSrc}`}
                                alt="full-screen"
                                width={710}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <h3 className={styles.caption}>{obj.galleryCaption}</h3>
                    </div>
                </div>
            </div>
            <div className={`${styles.swiper} container`}>
                <div className={styles.swiperConntainer}>
                    <Swiper
                        className={`${styles.swiper} container`}
                        modules={[Navigation]}
                        navigation
                        breakpoints={{
                            1228: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                            350: {
                                slidesPerView: "auto",
                                spaceBetween: 24,
                            },
                        }}
                        onReachEnd={() => console.log("end")}
                        slidesPerView={4}
                        spaceBetween={24}
                    >
                        {obj.cards.map((card, index) => (
                            <SwiperSlide className={styles.slide} key={index}>
                                <div
                                    onClick={() => setActiveCard(index)}
                                    className={styles.card}
                                >
                                    <div
                                        style={{
                                            background: `url(${card.imgSrc}) no-repeat center center`,
                                            backgroundSize: "cover",
                                        }}
                                        className={styles.imgBlock}
                                    ></div>
                                    <p className={`${styles.text} stn-text`}>
                                        {card.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PreviewBlock;
