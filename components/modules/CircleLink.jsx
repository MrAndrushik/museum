import Link from "next/link";
import styles from "../../styles/modules/CircleLink.module.scss";
import cl from "classnames";

import { setSidebarIsOpen } from "../../redux/toolkitSlice";
import { useDispatch } from "react-redux";

const CircleLink = ({ href, action, theme, mobile, children, onClick }) => {
    const dispatch = useDispatch();

    const handleSidebarClick = (e) => {
        e.preventDefault();
        document.querySelector("html").classList.add("hidden");
        dispatch(setSidebarIsOpen(true));
    };

    return onClick ? (
        <a
            onClick={(e) => handleSidebarClick(e)}
            className={cl(styles.link, {
                [styles.green]: theme === "green",
                [styles.yellow]: theme === "yellow",
                [styles.mobile]: mobile === true,
            })}
        >
            {children}
        </a>
    ) : (
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
