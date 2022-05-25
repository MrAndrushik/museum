import { Navigation, Scrollbar, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import cl from "classnames";

import styles from "../../styles/modules/Space.module.scss";
import SlideBtn from "./SlideBtn";
import CircleLink from "./CircleLink";

const Space = ({ obj }) => {
    return (
        <section className={styles.space}>
            <div className={`${styles.container} container`}>
                <CircleLink theme="yellow" href={obj.link} mobile={false}>
                    {obj.linkText}
                </CircleLink>
                <div className={styles.flex}>
                    <div className="container">
                        <div className={styles.top}>
                            <div className={styles.content}>
                                {obj.title && (
                                    <h2
                                        className={cl(
                                            `${styles.title} caption`,
                                            {
                                                [styles.titleMargined]:
                                                    obj.room,
                                            }
                                        )}
                                    >
                                        {obj.title}
                                    </h2>
                                )}
                                {obj.room && (
                                    <h3 className={styles.room}>{obj.room}</h3>
                                )}
                                {obj.descr && (
                                    <p className={`${styles.descr} stn-text`}>
                                        {obj.descr}
                                    </p>
                                )}
                                {obj.notice && (
                                    <p className={styles.notice}>
                                        {obj.notice}
                                    </p>
                                )}
                            </div>
                        </div>
                        {obj.info && (
                            <ul className={styles.bottom}>
                                {obj.info.map((item, index) => (
                                    <li
                                        className={styles.infoBlock}
                                        key={index}
                                    >
                                        <h3 className={styles.value}>
                                            {item.value}{" "}
                                            <span className={styles.unit}>
                                                {item.unit}
                                            </span>
                                        </h3>
                                        <p
                                            className={`${styles.info} stn-text`}
                                        >
                                            {item.descr}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className={`${styles.swiper}`}>
                        <div className={styles.swiperConntainer}>
                            <Swiper
                                className={`${styles.swiper} container`}
                                modules={[Navigation, Scrollbar, FreeMode]}
                                freeMode={true}
                                scrollbar
                                slidesPerView={"auto"}
                                spaceBetween={24}
                            >
                                {obj.cards.map((card, index) => (
                                    <SwiperSlide
                                        className={styles.slide}
                                        key={index}
                                    >
                                        {index === 0 && card.videoLink && (
                                            <a
                                                rel="noreferrer"
                                                target="_blank"
                                                href={card.videoLink}
                                                className={styles.videoBtn}
                                            >
                                                <svg
                                                    width="80"
                                                    height="80"
                                                    viewBox="0 0 80 80"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="40"
                                                        cy="40"
                                                        r="40"
                                                        fill="#EFEDED"
                                                        fillOpacity="0.4"
                                                    />
                                                    <circle
                                                        cx="40.5"
                                                        cy="39.5"
                                                        r="29.5"
                                                        fill="#8ACDB8"
                                                    />
                                                    <path
                                                        d="M49.192 41.394L36.466 48.778C35.386 49.404 34 48.646 34 47.384V32.616C34 31.356 35.384 30.596 36.466 31.224L49.192 38.608C49.4377 38.7482 49.6419 38.9509 49.7839 39.1956C49.926 39.4402 50.0008 39.7181 50.0008 40.001C50.0008 40.2839 49.926 40.5617 49.7839 40.8063C49.6419 41.051 49.4377 41.2537 49.192 41.394V41.394Z"
                                                        fill="#0D4135"
                                                    />
                                                </svg>
                                            </a>
                                        )}
                                        <img
                                            className={styles.imgBlock}
                                            src={card.imgSrc}
                                            alt="card"
                                        />
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
                <CircleLink theme="yellow" href={obj.link} mobile={true}>
                    {obj.linkText}
                </CircleLink>
            </div>
        </section>
    );
};

export default Space;
