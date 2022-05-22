import { useSwiper } from "swiper/react";
import styles from "../styles/modules/SlideBtn.module.scss";

function SlideBtn({ type }) {
    const swiper = useSwiper();
    // Type: next | prev
    if (type) {
        return (
            <button
                className={type === "next" ? styles.next : styles.prev}
                onClick={() =>
                    type === "next" ? swiper.slideNext() : swiper.slidePrev()
                }
            >
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="48" height="48" fill="#EFEDED" />
                    <path
                        d="M25 17L32 24L25 31M16 24H32H16Z"
                        stroke="#131722"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        );
    }
}

export default SlideBtn;
