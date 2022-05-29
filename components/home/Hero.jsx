import Image from "next/image";
import styles from "../../styles/home/Hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <aside className={styles.aside}>
                <div className={styles.asideImg}>
                    <Image
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/igAoAKACgD/2Q=="
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
            <div className={styles.mobileImg1}>
                <Image
                    src="/img/home/aside-1.jpg"
                    className="border-1"
                    alt="aside"
                    layout="fill"
                />
            </div>
            <div className={styles.mobileImg2}>
                <Image
                    src="/img/home/hero-1.jpg"
                    className="border-3"
                    alt="aside"
                    layout="fill"
                />
            </div>
            <div className={`${styles.container} container`}>
                <div className={styles.top}>
                    <h1 className={styles.title}>
                        <span>Музей</span>
                        <span className={styles.span}>Советского Детства</span>
                    </h1>
                    <motion.div
                        className={styles.img1}
                        animate={{ x: [0, 0, 100, 0], y: [0, -60, -60, 0] }}
                        transition={{
                            ease: "easeOut",
                            duration: 10,
                            repeat: Infinity,
                            type: "spring",
                        }}
                    >
                        <Image
                            className={`border-3`}
                            src="/img/home/hero-1.jpg"
                            alt="examples"
                            width={270}
                            height={210}
                        />
                    </motion.div>
                </div>
                <div className={styles.bottom}>
                    <motion.div
                        className={styles.img2}
                        animate={{ x: [0, -60, 50, 0], y: [0, 50, 30, 0] }}
                        transition={{
                            ease: "easeOut",
                            duration: 8,
                            repeat: Infinity,
                            type: "spring",
                        }}
                    >
                        <Image
                            className="border-3"
                            src="/img/home/hero-2.jpg"
                            alt="examples"
                            width={420}
                            height={280}
                        />
                    </motion.div>
                    <p className={`${styles.description} stn-text`}>
                        Это ретро-пространство, оформленное винтажными
                        эксклюзивными предметами быта, мебели, сувенирами,
                        игрушками, книгами и журналами, а также прочими
                        артефактами недавнего прошлого нашей страны
                    </p>
                    <motion.div
                        className={styles.img3}
                        animate={{ x: [0, 100, 100, 0], y: [0, -100, 100, 0] }}
                        transition={{
                            ease: "easeOut",
                            duration: 7,
                            repeat: Infinity,
                            type: "spring",
                        }}
                    >
                        <Image
                            className={`border-1`}
                            src="/img/home/hero-3.jpg"
                            alt="examples"
                            width={270}
                            height={270}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
