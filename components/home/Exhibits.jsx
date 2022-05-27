import styles from "../../styles/home/Exhibits.module.scss";
import { useState } from "react";
import Image from "next/image";
import useModal from "../../hooks/useModal";
import { Swiper, SwiperSlide } from "swiper/react";
import cl from "classnames";

import "swiper/css";

const Exhibits = ({ obj }) => {
    const { tags, cards } = obj;
    const [activeCategory, setActiveCategory] = useState("Разное");
    const { onOpen, onClose, isOpen } = useModal();

    const handleOpen = () => {
        onOpen();
        document.querySelector("html").classList.add("hidden");
    };

    const handleClose = () => {
        onClose();
        document.querySelector("html").classList.remove("hidden");
    };

    return (
        <section className={styles.exhibit}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.content} content`}>
                    <h2 className={`${styles.title} stn-title`}>
                        Наши экспонаты
                    </h2>
                    <div className={`${styles.tagContainer} container`}>
                        <ul className={styles.tags}>
                            {tags.map((tag) => (
                                <li
                                    onClick={() => setActiveCategory(tag)}
                                    className={cl(`${styles.text} stn-text`, {
                                        [styles.tagActive]:
                                            tag === activeCategory,
                                    })}
                                    key={tag}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.wrapper}>
                        {cards.map(
                            (card, index) =>
                                card.category === activeCategory && (
                                    <div
                                        onClick={() => handleOpen()}
                                        className={
                                            index % 4 < 2
                                                ? `${styles.imgBlock1} ${styles.imgBlock}`
                                                : `${styles.imgBlock2} ${styles.imgBlock}`
                                        }
                                        key={index}
                                    >
                                        <Image
                                            objectFit="cover"
                                            src={card.imgSrc}
                                            alt="examples"
                                            layout="fill"
                                        />
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
            <div
                className={
                    isOpen
                        ? `${styles.modal} ${styles.modalOpen}`
                        : `${styles.modal}`
                }
            >
                <h3 className={styles.caption}>{activeCategory}</h3>
                <button className={styles.close} onClick={() => handleClose()}>
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="48" height="48" fill="#fff" />
                        <path
                            d="M30 18L18 30"
                            stroke="#131722"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M18 18L30 30"
                            stroke="#131722"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    className={`${styles.swiper}`}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide className={styles.slide} key={index}>
                            <Image
                                objectFit="contain"
                                src={card.imgSrc}
                                alt="examples"
                                layout="fill"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Exhibits;
