import Link from "next/link";
import styles from "../../styles/modules/CircleLink.module.scss";
import cl from "classnames";

const CircleLink = ({ href, action, theme, mobile, children }) => {
    return (
        <Link href={href}>
            <a
                className={cl(styles.link, {
                    [styles.green]: theme === "green",
                    [styles.yellow]: theme === "yellow",
                    [styles.mobile]: mobile === true,
                })}
            >
                {children}
            </a>
        </Link>
    );
};

export default CircleLink;
