import Image from "next/image";
import styles from "../../styles/holiday-at-museum/Hero.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <aside className={styles.aside}>
                <div className={`${styles.asideImg} ${styles.imgRelative}`}>
                    <Image
                        src="/img/holiday-at-museum/aside-1.jpg"
                        className="border-3"
                        alt="aside"
                        width={320}
                        height={430}
                    />
                </div>
            </aside>
            <div className={styles.mobileImg1}>
                <Image
                    src="/img/holiday-at-museum/hero-3.jpg"
                    className="border-1"
                    alt="aside"
                    layout="fill"
                />
            </div>
            <div className={styles.mobileImg2}>
                <Image
                    src="/img/holiday-at-museum/hero-2.jpg"
                    className="border-3"
                    alt="aside"
                    layout="fill"
                />
            </div>
            <div className={`${styles.container} container`}>
                <div className={styles.column}>
                    <h1 className={styles.title}>
                        <span>Праздник</span>
                        <span className={styles.span}>в&nbsp;музее</span>
                    </h1>
                    <p className={`${styles.description} stn-text`}>
                        Ретро вечеринка в стиле СССР отлично подходит для
                        празднования корпоратива, дня рождения или юбилея
                        взрослого человека, желающего ненадолго окунуться в
                        прошлое..
                    </p>
                    <div className={styles.img1}>
                        <Image
                            className="border-1"
                            src="/img/holiday-at-museum/hero-1.jpg"
                            alt="examples"
                            width={370}
                            height={270}
                        />
                    </div>
                </div>
                <div className={styles.column1}>
                    <Image
                        className="border-3"
                        src="/img/holiday-at-museum/hero-2.jpg"
                        alt="examples"
                        width={270}
                        height={210}
                    />
                    <div className={styles.flex}>
                        <Image
                            className="border-3"
                            src="/img/holiday-at-museum/hero-3.jpg"
                            alt="examples"
                            width={270}
                            height={200}
                        />
                        <Image
                            className="border-1"
                            src="/img/holiday-at-museum/hero-4.jpg"
                            alt="examples"
                            width={200}
                            height={270}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
