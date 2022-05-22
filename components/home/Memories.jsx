import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/home/Memories.module.scss";

const Memories = ({ tags }) => {
    const [activeTag, setActiveTag] = useState(0);

    return (
        <section className={styles.memories}>
            <div className={`container`}>
                <h2 className={`${styles.title} stn-title`}>
                    Вспомни свое детство, посетив наш музей
                </h2>
                <div className={styles.wrapper}>
                    <ul className={styles.navbar}>
                        {tags.map(({ title }, index) => (
                            <li key={title} onClick={() => setActiveTag(index)}>
                                <h3
                                    className={
                                        index === activeTag
                                            ? `${styles.tag} ${styles.active}`
                                            : styles.tag
                                    }
                                >
                                    {title}
                                </h3>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.flex}>
                        <div className={styles.content}>
                            <p className={styles.notice}>
                                Любая из комнат может приехать к вам на площадку
                            </p>
                            <h3 className={styles.caption}>
                                {tags[activeTag].title}
                            </h3>
                            <p className={styles.text}>
                                {" "}
                                {tags[activeTag].descr}
                            </p>
                        </div>
                        <div className={styles.image}>
                            <Image
                                src={tags[activeTag].imgSrc}
                                alt="cartoon"
                                layout="fill"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Memories;
