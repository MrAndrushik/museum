import Image from "next/image";
import styles from "../../styles/home/Children.module.scss";

const Children = ({ obj }) => {
    const data = obj;
    return (
        <section className={styles.children}>
            <div className={`${styles.container} container`}>
                <div className={styles.imgDesctop}>
                    <Image
                        src="/img/home/children.jpg"
                        alt="childen"
                        width={334}
                        height={500}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.block}>
                        <p className={styles.subtitle}>А САМОЕ ГЛАВНОЕ</p>
                        <h2 className={`${styles.title} stn-title`}>
                            Дети, рожденные в СССР{" "}
                        </h2>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.imgMobile}>
                            <Image
                                src="/img/home/children.jpg"
                                alt="childen"
                                width={280}
                                height={420}
                            />
                        </div>
                        <ul className={styles.grid}>
                            {data.map((item, index) => (
                                <li key={index} className={styles.item}>
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20 2.5L14.3125 14.025L1.6 15.8625L10.8 24.8375L8.625 37.5L20 31.525L31.375 37.5L29.2 24.8375L38.4 15.875L25.6875 14.025L20 2.5Z"
                                            fill="#082E25"
                                        />
                                    </svg>
                                    <p className={`${styles.text} stn-text`}>
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Children;
