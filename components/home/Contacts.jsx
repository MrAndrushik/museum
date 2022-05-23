import Image from "next/image";
import styles from "../../styles/home/Contacts.module.scss";

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.content} content`}>
                    <div className={styles.column1}>
                        <h2 className={`${styles.title} stn-title`}>
                            Контакты
                        </h2>
                        <div className={styles.wrapper}>
                            <div>
                                <h3 className={styles.graphic}>Режим работы</h3>
                                <div className={styles.timeBlock}>
                                    <p className={styles.time}>
                                        Пн - Птн <br />с 9:00 - 18:00
                                    </p>
                                    <p className={styles.time}>
                                        Сб, Вск
                                        <br /> 9:00 - 20:00
                                    </p>
                                </div>
                            </div>
                            <ul className={styles.data}>
                                <li>
                                    <a
                                        href="tel:79996669999"
                                        className={styles.tel}
                                    >
                                        +7 999 666 99 99
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:museumUssr@mail.ru"
                                        className={styles.email}
                                    >
                                        museumUssr@mail.ru
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={styles.geo}>
                                        г. Москва Егорьевскйи проезд д2/с10
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Image
                        src="/img/home/map.jpg"
                        width={710}
                        height={400}
                        alt="map"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contacts;
