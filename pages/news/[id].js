import styles from "../../styles/modules/News.module.scss";
import Image from "next/image";
import Link from "next/link";

// export const getStaticPaths = async () => {
//     const res = await fetch("http://localhost:3000/api/news");
//     const data = await res.json();
//     const paths = data.map((item) => {
//         return {
//             params: { id: item.id.toString() },
//         };
//     });

//     return {
//         paths,
//         fallback: false,
//     };
// };

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch("http://localhost:3000/api/news/" + id);
//     const data = await res.json();

//     return {
//         props: { news: data },
//     };
// };

// export const getStatic = async () => {
//     const res = await fetch("/api/news");
//     const data = res.json();
//     conosle.log(data);
// };

// getStatic();

const NewsDetails = ({ news }) => {
    return (
        <section className={styles.currrentNews}>
            <div className={`${styles.fullContainer} container`}>
                <Link href="/news">
                    <p className={styles.back}>Вернуться к нашим событиям</p>
                </Link>
                <div className={styles.fullWrapper}>
                    {/* {news.map((item, index) => (
                        <div key={index} className={styles.newsBlockFull}>
                            <div className={styles.imgBlockFull}>
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
                            <div className={styles.flexFull}>
                                <p className={styles.fullDate}>{item.date}</p>
                                <div>
                                    <h3 className={`${styles.caption}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`${styles.text} stn-text`}>
                                        {item.fullDescr}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </section>
    );
};

export default NewsDetails;
