import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import styles from "../styles/modules/Space.module.scss";
import SlideBtn from "./SlideBtn";

const Space = ({ obj }) => {
    return (
        <section className={styles.space}>
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

                                <p className={`${styles.descr} stn-text`}>
                                    {obj.descr}
                                </p>
                                {obj.notice && (
                                    <p className={styles.notice}>
                                        {obj.notice}
                                    </p>
                                )}
                            </div>
                        </div>
                        <ul className={styles.bottom}>
                            {obj.info.map((item, index) => (
                                <li className={styles.infoBlock} key={index}>
                                    <h3 className={styles.value}>
                                        {item.value}{" "}
                                        <span className={styles.unit}>
                                            {item.unit}
                                        </span>
                                    </h3>
                                    <p className={`${styles.info} stn-text`}>
                                        {item.descr}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${styles.swiper}`}>
                        <div className={styles.swiperConntainer}>
                            <Swiper
                                className={`${styles.swiper} container`}
                                modules={[Navigation, Scrollbar]}
                                scrollbar
                                spaceBetween={24}
                            >
                                {obj.cards.map((card, index) => (
                                    <SwiperSlide
                                        className={styles.slide}
                                        key={index}
                                    >
                                        {/* <div className={styles.card}>
                                            <div
                                                style={{
                                                    background: `url(${card.imgSrc}) no-repeat center center`,
                                                    backgroundSize: "cover",
                                                }}
                                                className={styles.imgBlock}
                                            ></div>
                                        </div> */}
                                        <img src={card.imgSrc} alt="gallery" />
                                    </SwiperSlide>
                                ))}
                                <SlideBtn type="prev" />
                                <SlideBtn type="next" />
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

export default Space;
