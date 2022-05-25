import Image from "next/image";
import styles from "../../styles/museum-on-departure/Hero.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <aside className={styles.aside}>
                <div className={styles.asideImg}>
                    <Image
                        src="/img/museum-on-departure/aside-1.jpg"
                        className="border-1"
                        alt="aside"
                        width={270}
                        height={270}
                    />
                </div>
            </aside>
            <div className={styles.mobileImg1}>
                <Image
                    src="/img/museum-on-departure/hero-3.jpg"
                    className="border-1"
                    alt="aside"
                    layout="fill"
                />
            </div>
            <div className={styles.mobileImg2}>
                <Image
                    src="/img/museum-on-departure/hero-4.jpg"
                    className="border-3"
                    alt="aside"
                    layout="fill"
                />
            </div>
            <div className={`${styles.container} container`}>
                <div className={styles.column}>
                    <h1 className={styles.title}>
                        <span>Музей</span>
                        <span className={styles.span}>на&nbsp;выезд</span>
                    </h1>
                    <p className={`${styles.description} stn-text`}>
                        Наш музей...мобилен! Это удивительно, но вполне возможно
                        воссоздать обстановку и атмосферу недавнего прошлого,
                        счастливого на любой площадке
                    </p>
                    <div className={styles.img2}>
                        <Image
                            className="border-3"
                            src="/img/museum-on-departure/hero-1.jpg"
                            alt="examples"
                            width={420}
                            height={280}
                        />
                    </div>
                </div>
                <div className={styles.column1}>
                    <Image
                        className="border-3"
                        src="/img/museum-on-departure/hero-2.jpg"
                        alt="examples"
                        width={270}
                        height={200}
                    />
                    <Image
                        className="border-1"
                        src="/img/museum-on-departure/hero-3.jpg"
                        alt="examples"
                        width={270}
                        height={200}
                    />
                    <Image
                        className="border-3"
                        src="/img/museum-on-departure/hero-4.jpg"
                        alt="examples"
                        width={270}
                        height={200}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
