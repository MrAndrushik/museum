import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
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
                <div className={styles.flex}>
                    <div className="container">
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
                                    <p className={styles.notice}>
                                        {obj.notice}
                                    </p>
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
                            <h3 className={styles.caption}>
                                {obj.galleryCaption}
                            </h3>
                        </div>
                    </div>
                    <div className={`${styles.swiper}`}>
                        <div className={styles.swiperConntainer}>
                            <Swiper
                                className={`${styles.swiper} container`}
                                modules={[Navigation, Scrollbar]}
                                breakpoints={{
                                    1228: {
                                        slidesPerView: 4,
                                        spaceBetween: 24,
                                    },
                                }}
                                scrollbar
                                slidesPerView="auto"
                                spaceBetween={24}
                            >
                                {obj.cards.map((card, index) => (
                                    <SwiperSlide
                                        className={styles.slide}
                                        key={index}
                                    >
                                        <div
                                            onClick={() => setActiveCard(index)}
                                            className={styles.card}
                                        >
                                            <div
                                                // style={{
                                                //     background: `url(${card.imgSrc}) no-repeat center center`,
                                                //     backgroundSize: "cover",
                                                // }}
                                                className={styles.imgBlock}
                                            >
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
                <Link href={obj.link}>
                    <a className={`${styles.link} ${styles.mobile}`}>
                        {obj.linkText}
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default PreviewBlock;
