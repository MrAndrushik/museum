import Image from "next/image";
import styles from "../../styles/corporate-ussr/Hero.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <aside className={styles.aside}>
                <div className={styles.asideImg}>
                    <Image
                        src="/img/corporate-ussr/aside-1.jpg"
                        className="border-3"
                        alt="aside"
                        width={270}
                        height={200}
                    />
                </div>
                <div className={`${styles.asideImg} ${styles.imgRelative}`}>
                    <Image
                        src="/img/corporate-ussr/aside-2.jpg"
                        className="border-1"
                        alt="aside"
                        width={270}
                        height={270}
                    />
                </div>
                <div className={styles.asideImg}>
                    <Image
                        src="/img/corporate-ussr/aside-3.jpg"
                        className="border-3"
                        alt="aside"
                        width={270}
                        height={200}
                    />
                </div>
            </aside>
            <div className={styles.mobileImg1}>
                <Image
                    src="/img/corporate-ussr/aside-1.jpg"
                    className="border-1"
                    alt="aside"
                    layout="fill"
                />
            </div>
            <div className={styles.mobileImg2}>
                <Image
                    src="/img/corporate-ussr/hero-1.jpg"
                    className="border-3"
                    alt="aside"
                    layout="fill"
                />
            </div>
            <div className={`${styles.container} container`}>
                <div className={styles.column}>
                    <h1 className={styles.title}>
                        <span>Мероприятия</span>
                        <span className={styles.span}>в&nbsp;стиле СССР</span>
                    </h1>
                    <p className={`${styles.description} stn-text`}>
                        Ретро вечеринка в стиле СССР отлично подходит для
                        празднования корпоратива, дня рождения или юбилея
                        взрослого человека, желающего ненадолго окунуться в
                        прошлое..
                    </p>
                    <div className={styles.img3}>
                        <Image
                            className="border-3"
                            src="/img/corporate-ussr/hero-2.jpg"
                            alt="examples"
                            width={420}
                            height={280}
                        />
                    </div>
                </div>
                <div className={styles.column1}>
                    <div className={styles.img1}>
                        <Image
                            className="border-3"
                            src="/img/corporate-ussr/hero-1.jpg"
                            alt="examples"
                            width={270}
                            height={200}
                        />
                    </div>
                    <div className={styles.img2}>
                        <Image
                            className="border-1"
                            src="/img/corporate-ussr/hero-2.jpg"
                            alt="examples"
                            width={420}
                            height={280}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
