import styles from "../../styles/modules/Feedback.module.scss";
import Form from "./Form";

import { useDispatch, useSelector } from "react-redux";
import { setSidebarIsOpen } from "../../redux/toolkitSlice";

const Feedback = () => {
    const dispatch = useDispatch();
    const sidebarIsOpen = useSelector((state) => state.toolkit.sidebarIsOpen);

    const handleSidebarClick = () => {
        document.querySelector("html").classList.remove("hidden");
        dispatch(setSidebarIsOpen(false));
    };

    return (
        <div
            className={
                sidebarIsOpen
                    ? `${styles.overflow} ${styles.overflowActive}`
                    : `${styles.overflow}`
            }
        >
            <div
                className={
                    sidebarIsOpen
                        ? `${styles.modal} ${styles.modalOpen}`
                        : `${styles.modal}`
                }
            >
                <div>
                    <button
                        onClick={() => handleSidebarClick()}
                        className={styles.close}
                    >
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="48" height="48" fill="#fff" />
                            <path
                                d="M30 18L18 30"
                                stroke="#131722"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 18L30 30"
                                stroke="#131722"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <Form title="Обратная связь" />
                </div>
            </div>
        </div>
    );
};

export default Feedback;
