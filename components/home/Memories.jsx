import { useState, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/home/Memories.module.scss";
import { useSwiper } from "swiper/react";
import cl from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Memories = ({ tags }) => {
    const [activeTag, setActiveTag] = useState(0);
    const ref = useRef(null);

    const getCoords = (elem) => {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset,
        };
    };

    const handleTagClick = (e, index) => {
        setActiveTag(index);
        if (window.innerWidth <= 1228) {
            setTimeout(() => {
                const position = getCoords(e.target);
                const offset = e.target.offsetHeight;
                window.scrollTo({
                    top: `${position.top - offset}`,
                    behavior: "smooth",
                });
            }, 0);
        }
    };

    const scrollToBottom = () => {
        const height = ref.current.scrollHeight;
        ref.current.scrollTo({ top: `${height}`, behavior: "smooth" });
    };

    function SlideBtn({ type }) {
        const swiper = useSwiper();
        return (
            <button
                className={cl({
                    [styles.next]: type === "next",
                    [styles.prev]: type === "prev",
                })}
                onClick={() =>
                    type === "next" ? swiper.slideNext() : swiper.slidePrev()
                }
            ></button>
        );
    }

    return (
        <section className={styles.memories}>
            <div className={`container`}>
                <h2 className={`${styles.title} stn-title`}>
                    Вспомни свое детство, посетив наш музей
                </h2>
                <div className={styles.wrapper}>
                    <ul ref={ref} className={styles.navbar}>
                        {tags.map((tag, index) => (
                            <li key={tag.title}>
                                <h3
                                    onClick={(e) => handleTagClick(e, index)}
                                    className={
                                        index === activeTag
                                            ? `${styles.tag} ${styles.active}`
                                            : styles.tag
                                    }
                                >
                                    {tag.title}
                                    <span className={styles.dropdownBtn}>
                                        <svg
                                            width="14"
                                            height="8"
                                            viewBox="0 0 14 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1L7 7L13 1"
                                                stroke="#131722"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </h3>
                                <div
                                    className={
                                        index === activeTag
                                            ? `${styles.flexMoblie} ${styles.flexMoblieActive}`
                                            : `${styles.flexMoblie}`
                                    }
                                >
                                    <div className={styles.content}>
                                        <p className={styles.notice}>
                                            Любая из комнат может приехать к вам
                                            на площадку
                                        </p>
                                        <h3 className={styles.caption}>
                                            {tag.title}
                                        </h3>
                                        <p className={styles.text}>
                                            {" "}
                                            {tag.descr}
                                        </p>
                                    </div>
                                    <div className={styles.mobileImage}>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            className={`${styles.swiper}`}
                                        >
                                            <SlideBtn type="next" />
                                            <SlideBtn type="prev" />
                                            {tag.imgSrc.map((src, index) => (
                                                <SwiperSlide
                                                    className={
                                                        styles.mobileSlide
                                                    }
                                                    key={index}
                                                >
                                                    <Image
                                                        priority
                                                        src={src}
                                                        alt="cartoon"
                                                        width={680}
                                                        height={430}
                                                        objectFit="cover"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <button
                            onClick={() => scrollToBottom()}
                            className={styles.tagBtn}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="48" height="48" fill="#EFEDED" />
                                <path
                                    d="M25 17L32 24L25 31M16 24H32H16Z"
                                    stroke="#221313"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </ul>
                    <div className={styles.flex}>
                        <div className={styles.content}>
                            <p className={styles.notice}>
                                Любая из комнат может приехать к вам на площадку
                            </p>
                            <h3 className={styles.caption}>
                                {tags[activeTag].title}
                            </h3>
                            <p className={styles.text}>
                                {" "}
                                {tags[activeTag].descr}
                            </p>
                        </div>
                        <div className={styles.image}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                className={`${styles.swiper}`}
                            >
                                <SlideBtn type="next" />
                                <SlideBtn type="prev" />
                                {tags[activeTag].imgSrc.map((src, index) => (
                                    <SwiperSlide
                                        className={styles.slide}
                                        key={index}
                                    >
                                        <Image
                                            priority
                                            src={src}
                                            alt="cartoon"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Memories;
