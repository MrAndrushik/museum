import styles from "../../styles/modules/News.module.scss";
import Link from "next/link";
import Image from "next/image";
import CircleLink from "./CircleLink";

const News = ({ obj }) => {
    return (
        <section className={styles.news}>
            <div className={`${styles.container} container`}>
                <CircleLink theme={"green"} href="/news" mobile={false}>
                    Смотреть все
                </CircleLink>
                <div className={styles.content}>
                    <h2 className={`${styles.title} stn-title`}>
                        Наши события
                    </h2>
                    <div className={styles.wrapper}>
                        {obj.map(
                            (item, index) =>
                                index < 2 && (
                                    <Link key={index} href={`/news/${item.id}`}>
                                        <div className={styles.newsBlock}>
                                            <div className={styles.imgBlock}>
                                                <Image
                                                    alt="news-preview"
                                                    src={item.imgSrc}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <div className={styles.imgMobile}>
                                                <Image
                                                    alt="news-preview"
                                                    src={item.imgSrc}
                                                    width={680}
                                                    height={500}
                                                ></Image>
                                            </div>
                                            <div className={styles.flex}>
                                                <p className={styles.date}>
                                                    {item.date}
                                                </p>
                                                <div>
                                                    <h3
                                                        className={`${styles.caption}`}
                                                    >
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
                                    </Link>
                                )
                        )}
                    </div>
                </div>
            </div>
            <div className={`container`}>
                <CircleLink theme={"green"} href="/news" mobile={true}>
                    Смотреть все
                </CircleLink>
            </div>
        </section>
    );
};

export default News;
