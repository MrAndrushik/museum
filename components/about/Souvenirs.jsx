import styles from "../../styles/about/Souvenirs.module.scss";
import CircleLink from "../modules/CircleLink";
import Image from "next/image";
import { useState } from "react";

import cl from "classnames";

const Souvenirs = ({ obj }) => {
    const [activeItems, setActiveItems] = useState(6);
    return (
        <section className={styles.souvenirs}>
            <div className={`${styles.container} container`}>
                <CircleLink
                    onClick={true}
                    theme={"green"}
                    href="/news"
                    mobile={false}
                >
                    Оставить заявку
                </CircleLink>
                <div className={styles.content}>
                    <h2 className={`${styles.title} stn-title`}>
                        сувернирная лавка
                    </h2>
                    <p className={`${styles.descr} stn-text`}>
                        Здесь вы можете приобрести интересные экспонаты из нашей
                        коллекции
                    </p>
                    <div className={styles.wrapper}>
                        {obj.map(
                            (item, index) =>
                                index < activeItems && (
                                    <div
                                        key={index}
                                        className={cl({
                                            [styles.souvenir1]: index % 6 < 3,
                                            [styles.souvenir2]: index % 6 >= 3,
                                        })}
                                    >
                                        <div className={styles.imgBlock}>
                                            <Image
                                                src={item.imgSrc}
                                                alt="souvenir"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <h3 className={styles.caption}>
                                            {item.title}
                                        </h3>
                                        <p className={styles.souvenirDescr}>
                                            {item.shortDescr}
                                        </p>
                                        <div className={styles.mb}>
                                            <p className={styles.price}>
                                                <span>{item.price}</span> ₽
                                            </p>
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                    {obj.length > activeItems && (
                        <button
                            className={styles.showMore}
                            onClick={() => setActiveItems(obj.length)}
                        >
                            <svg
                                width="30"
                                height="22"
                                viewBox="0 0 30 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.3203 0.247991C20.9683 0.247991 25.6083 4.42399 26.3923 9.84799H29.7203L24.1203 16.248L18.5203 9.84799H22.2323C21.8743 8.28176 20.9959 6.88316 19.7405 5.88058C18.4851 4.878 16.9269 4.33068 15.3203 4.32799C13.0003 4.32799 10.9523 5.46399 9.65627 7.17599L6.92027 4.05599C7.96749 2.85848 9.25896 1.89906 10.7078 1.24223C12.1567 0.585404 13.7295 0.246392 15.3203 0.247991ZM14.6803 21.752C9.04827 21.752 4.39227 17.576 3.60827 12.152H0.280273L5.88027 5.75199C7.75227 7.87999 9.60827 10.024 11.4803 12.152H7.76827C8.12622 13.7182 9.00462 15.1168 10.26 16.1194C11.5154 17.122 13.0737 17.6693 14.6803 17.672C17.0003 17.672 19.0483 16.536 20.3443 14.824L23.0803 17.944C22.0341 19.1427 20.7428 20.103 19.2937 20.7599C17.8446 21.4168 16.2713 21.7552 14.6803 21.752Z"
                                    fill="#131722"
                                />
                            </svg>
                            Показать еще
                        </button>
                    )}
                </div>
            </div>
            <div className={`container`}>
                <CircleLink
                    onClick={true}
                    theme={"green"}
                    href="/news"
                    mobile={true}
                >
                    Оставить заявку
                </CircleLink>
            </div>
        </section>
    );
};

export default Souvenirs;
