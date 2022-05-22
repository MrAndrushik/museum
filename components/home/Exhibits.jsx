import styles from "../../styles/home/Exhibits.module.scss";
import { useState } from "react";
import Image from "next/image";

const Exhibits = ({ obj }) => {
    const { tags, cards } = obj;
    const [activeCategory, setActiveCategory] = useState("Разное");
    return (
        <section className={styles.exhibit}>
            <div className={`container`}>
                <div className={`${styles.content} content`}>
                    <h2 className={`${styles.title} stn-title`}>
                        Наши экспонаты
                    </h2>
                    <ul className={styles.tags}>
                        {tags.map((tag) => (
                            <li className={`${styles.text} stn-text`} key={tag}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.wrapper}>
                        {cards.map(
                            (card, index) =>
                                card.category === activeCategory && (
                                    <div
                                        className={
                                            index % 4 < 2
                                                ? `${styles.imgBlock1}`
                                                : `${styles.imgBlock2}`
                                        }
                                        key={index}
                                    >
                                        <Image
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
        </section>
    );
};

export default Exhibits;
