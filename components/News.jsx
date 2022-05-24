import styles from "../styles/modules/News.module.scss";
import Link from "next/link";
import Image from "next/image";

const News = ({ obj }) => {
    const { news } = obj;

    return (
        <section className={styles.news}>
            <div className={`${styles.container} container`}>
                <Link href="/news">
                    <a className={styles.link}>Смотреть все</a>
                </Link>
                <div className={styles.content}>
                    <h2 className={`${styles.title} stn-title`}>
                        Наши события
                    </h2>
                    <div className={styles.wrapper}>
                        {news.map((item, index) => (
                            <div key={index} className={styles.newsBlock}>
                                <div className={styles.imgBlock}>
                                    <Image
                                        alt="news-preview"
                                        src={item.imgSrc}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className={styles.flex}>
                                    <p className={styles.date}>{item.date}</p>
                                    <div>
                                        <h3 className={`${styles.caption}`}>
                                            {item.title}
                                        </h3>
                                        <p className={`stn-text`}>
                                            {item.shortDescr}
                                        </p>
                                    </div>
                                    <div className={styles.icon}>
                                        <svg
                                            width="44"
                                            height="44"
                                            viewBox="0 0 44 44"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.66667 2H42V35.3333M42 2L2 42L42 2Z"
                                                stroke="#313748"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`container`}>
                <Link href="/news">
                    <a className={`${styles.link} ${styles.mobile}`}>
                        Смотреть все
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default News;
