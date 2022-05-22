import Image from "next/image";
import styles from "../../styles/home/Hero.module.scss";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <aside className={styles.aside}>
                <div className={styles.asideImg}>
                    <Image
                        src="/img/home/aside-1.jpg"
                        className="border-1"
                        alt="aside"
                        width={268}
                        height={200}
                    />
                </div>
                <div className={styles.asideImg}>
                    <Image
                        src="/img/home/aside-2.jpg"
                        className="border-2"
                        alt="aside"
                        width={268}
                        height={200}
                    />
                </div>
            </aside>
            <div className={`${styles.container} container`}>
                <div className={styles.top}>
                    <h1 className={styles.title}>
                        <span>Музей</span>
                        <span className={styles.span}>Советского Детсва</span>
                    </h1>
                    <div className={styles.img1}>
                        <Image
                            className={`border-3`}
                            src="/img/home/hero-1.jpg"
                            alt="examples"
                            width={270}
                            height={210}
                        />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.img2}>
                        <Image
                            className="border-3"
                            src="/img/home/hero-2.jpg"
                            alt="examples"
                            width={420}
                            height={280}
                        />
                    </div>
                    <p className={`${styles.description} stn-text`}>
                        Это ретро-пространство, оформленное винтажными
                        эксклюзивными предметами быта, мебели, сувенирами,
                        игрушками, книгами и журналами, а также прочими
                        артефактами недавнего прошлого нашей страны
                    </p>
                    <div className={styles.img3}>
                        <Image
                            className={`border-1`}
                            src="/img/home/hero-3.jpg"
                            alt="examples"
                            width={270}
                            height={270}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
