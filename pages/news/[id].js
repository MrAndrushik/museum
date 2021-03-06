import styles from "../../styles/modules/News.module.scss";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export const getStaticPaths = async () => {
    const res = await fetch("https://museumapp.vercel.app/api/news");
    // const res = await fetch("http://localhost:3000/api/news");
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
    const res = await fetch("https://museumapp.vercel.app/api/news/" + id);
    // const res = await fetch("http://localhost:3000/api/news/" + id);
    const data = await res.json();

    return {
        props: { news: data },
    };
};

const NewsDetails = ({ news }) => {
    return (
        <div>
            <Head itemScope itemType="http://schema.org/WPHeader">
                <title itemProp="headline">{news[0].title}</title>
                <meta
                    itemProp="description"
                    name="description"
                    content={`${news[0].metaDescr}`}
                />
                <meta
                    itemProp="keywords"
                    name="keywords"
                    content="ключевые_слова_для_страницы"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.currrentNews}>
                <div className={`${styles.fullContainer} container`}>
                    <Link href="/news">
                        <a className={styles.back}>
                            Вернуться к нашим событиям
                        </a>
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
        </div>
    );
};

export default NewsDetails;
