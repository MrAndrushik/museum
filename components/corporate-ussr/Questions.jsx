import styles from "../../styles/corporate-ussr/Questions.module.scss";
import CircleLink from "../modules/CircleLink";

const Questions = () => {
    return (
        <section className={styles.questions}>
            <div className={`${styles.container} container`}>
                <div className={`${styles.wrapper} content`}>
                    <div className={`${styles.content}`}>
                        <h2 className={styles.title}>Не нашли что искали?</h2>
                        <p className={styles.descr}>
                            Оставьте заявку и наши менеджеры составят для вас
                            персональное предложение
                        </p>
                    </div>
                    <CircleLink onClick={true} theme="green">
                        Оставить заявку
                    </CircleLink>
                </div>
            </div>
        </section>
    );
};

export default Questions;
