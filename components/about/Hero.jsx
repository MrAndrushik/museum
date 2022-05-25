import styles from "../../styles/about/Hero.module.scss";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={styles.about}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Основатель музея{" "}
                        <span className={styles.name}>Владислав Метревели</span>
                    </h1>
                    <div className={styles.imgMobile}>
                        <Image
                            alt="Vladislav Metreveli"
                            src="/img/about/person.jpg"
                            width={500}
                            height={600}
                        />
                    </div>
                    <p className={styles.text1}>
                        Основатель музея — человек, прошедший в период «застоя»
                        все этапы жизни и быта советского человека — ясли,
                        детский сад, школу, Университет, службу в армии, работу
                        на ниве образования и организации первых зачатков
                        частного бизнеса. При этом Владислав Метревели
                        не потерял веру в светлые идеалы, но в тоже время готов
                        откровенно и без прикрас поведать о всех самых
                        сокровенных сторонах жизни в СССР
                    </p>
                    <p className={styles.text2}>
                        Музей счастливого детства начался с желания
                        его создателя восполнить, восстановить какие-то
                        утерянные по разным причинам любимые детские книги
                        и игрушки. Постепенно коллекция разрасталась, возник
                        интерес не только к самим предметам, но к авторам
                        и иллюстраторам детской литературы, создателям игрушек
                        и игр, истории производства ёлочных игрушек, кукол,
                        головоломок и традиций их использования.
                    </p>
                </div>
                <div className={styles.imgDesc}>
                    <Image
                        alt="Vladislav Metreveli"
                        src="/img/about/person.jpg"
                        width={500}
                        height={600}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
