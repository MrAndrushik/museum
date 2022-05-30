import Image from "next/image";
import styles from "../../styles/museum-on-departure/Hero.module.scss";
import { motion } from "framer-motion";

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
            <motion.div
                className={styles.mobileImg1}
                animate={{ x: [0, 0, 30, 0], y: [0, -5, 5, 0] }}
                transition={{
                    ease: "easeOut",
                    duration: 7,
                    repeat: Infinity,
                    type: "spring",
                }}
            >
                <Image
                    src="/img/museum-on-departure/hero-3.jpg"
                    className="border-1"
                    alt="aside"
                    layout="fill"
                />
            </motion.div>
            <motion.div
                className={styles.mobileImg2}
                animate={{ x: [0, 0, -30, 0], y: [0, -10, -10, 0] }}
                transition={{
                    ease: "easeOut",
                    duration: 10,
                    repeat: Infinity,
                    type: "spring",
                }}
            >
                <Image
                    src="/img/museum-on-departure/hero-4.jpg"
                    className="border-3"
                    alt="aside"
                    layout="fill"
                />
            </motion.div>
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
                    <motion.div
                        className={styles.img2}
                        animate={{ x: [0, -30, 10, 0], y: [0, 30, 30, 0] }}
                        transition={{
                            ease: "easeOut",
                            duration: 8,
                            repeat: Infinity,
                            type: "spring",
                        }}
                    >
                        <Image
                            className="border-3"
                            src="/img/museum-on-departure/hero-1.jpg"
                            alt="examples"
                            width={420}
                            height={280}
                        />
                    </motion.div>
                </div>
                <div className={styles.column1}>
                    <motion.div
                        animate={{
                            x: [0, 0, 0, 0],
                            y: [0, 232 * 1, 232 * 2, 0],
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 8,
                            repeat: Infinity,
                            type: "spring",
                        }}
                    >
                        <Image
                            className="border-3"
                            src="/img/museum-on-departure/hero-2.jpg"
                            alt="examples"
                            width={270}
                            height={200}
                        />
                    </motion.div>
                    <motion.div
                        animate={{
                            x: [0, 0, 0, 0],
                            y: [0, 232 * 1, -232, 0],
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 8,
                            repeat: Infinity,
                            type: "spring",
                        }}
                    >
                        <Image
                            className="border-1"
                            src="/img/museum-on-departure/hero-3.jpg"
                            alt="examples"
                            width={270}
                            height={200}
                        />
                    </motion.div>
                    <motion.div
                        animate={{
                            x: [0, 0, 0, 0],
                            y: [0, -232 * 2, -232, 0],
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 8,
                            repeat: Infinity,
                            type: "spring",
                        }}
                    >
                        <Image
                            className="border-3"
                            src="/img/museum-on-departure/hero-4.jpg"
                            alt="examples"
                            width={270}
                            height={200}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
