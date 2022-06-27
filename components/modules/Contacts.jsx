import Image from "next/image";
import styles from "../../styles/modules/Contacts.module.scss";

const Contacts = () => {
    return (
        <section id="contacts" className={styles.contacts}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.content} content`}>
                    <div className={styles.column1}>
                        <h2 className={`${styles.title} stn-title`}>
                            Контакты
                        </h2>
                        <div
                            itemScope
                            itemType="http://schema.org/LocalBusiness"
                            className={styles.wrapper}
                        >
                            <div>
                                <h3 className={styles.graphic}>Режим работы</h3>
                                <div className={styles.timeBlock}>
                                    <time
                                        itemProp="openingHours"
                                        dateTime="Mo-Fr, 9:00−18:00"
                                        className={styles.time}
                                    >
                                        Пн - Птн <br />с 9:00 - 18:00
                                    </time>
                                    <time
                                        itemProp="openingHours"
                                        dateTime="Sa-Su, 9:00−20:00"
                                        className={styles.time}
                                    >
                                        Сб, Вск
                                        <br /> 9:00 - 20:00
                                    </time>
                                </div>
                            </div>
                            <ul className={styles.data}>
                                <li>
                                    <a
                                        href="tel:79996669999"
                                        className={styles.tel}
                                        itemProp="telephone"
                                    >
                                        +7 999 666 99 99
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:museumUssr@mail.ru"
                                        className={styles.email}
                                        itemProp="email"
                                    >
                                        museumUssr@mail.ru
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={styles.geo}>
                                        г. Москва Егорьевскйи проезд д2/с10
                                        <span
                                            itemProp="address"
                                            itemScope
                                            itemType="http://schema.org/PostalAddress"
                                        >
                                            <meta
                                                itemProp="streetAddress"
                                                content="Егорьевскйи проезд д2/с10"
                                            ></meta>
                                            <meta
                                                itemProp="addressLocality"
                                                content="г. Москва"
                                            ></meta>
                                        </span>{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.imgBlock}>
                        <Image
                            src="https://static-maps.yandex.ru/1.x/?ll=37.734982,55.673763&z=17&l=map&size=650,450&pt=37.734982,55.673763,org"
                            width={650}
                            height={450}
                            objectFit="cover"
                            alt="map"
                            quality={100}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
