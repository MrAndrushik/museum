import styles from "../../styles/modules/News.module.scss";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/news");
    const data = await res.json();
    const paths = data.map((item) => {
        return {
            params: { id: item.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("http://localhost:3000/api/news/" + id);
    const data = await res.json();

    return {
        props: { news: data },
    };
};

const NewsDetails = ({ news }) => {
    return (
        <section className={styles.currrentNews}>
            <div className={`${styles.fullContainer} container`}>
                <Link href="/news">
                    <a className={styles.back}>Вернуться к нашим событиям</a>
                </Link>
                <div className={styles.fullWrapper}>
                    {news.map((item, index) => (
                        <article
                            itemProp="blogPosts"
                            itemScope
                            itemType="http://schema.org/BlogPosting"
                            key={index}
                            className={styles.newsBlockFull}
                        >
                            <div className={styles.imgBlockFull}>
                                <Image
                                    alt="news-preview"
                                    src={item.imgSrc}
                                    layout="fill"
                                    itemProp="image"
                                    objectFit="cover"
                                />
                            </div>
                            <div className={styles.imgMobile}>
                                <Image
                                    alt="news-preview"
                                    src={item.imgSrc}
                                    width={680}
                                    height={500}
                                    itemProp="image"
                                ></Image>
                            </div>
                            <div className={styles.flexFull}>
                                <time
                                    itemProp="datePublished"
                                    dateTime={`${item.date}`}
                                    className={styles.fullDate}
                                >
                                    {item.date}
                                </time>
                                <div>
                                    <h3
                                        itemProp="headline"
                                        className={`${styles.caption}`}
                                    >
                                        {item.title}
                                    </h3>
                                    <div
                                        className={styles.descrBlock}
                                        dangerouslySetInnerHTML={{
                                            __html: item.fullDescr,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsDetails;
