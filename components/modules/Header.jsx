import Image from "next/image";
import Link from "next/link";
import useModal from "../../hooks/useModal";
import {
    MUSEUM_ON_DEPARTURE,
    CORPORATE_OF_THE_USSR,
    HOLIDAY_AT_THE_MUSEUM,
    MUSEUM,
} from "../../const/routes";

const Header = () => {
    const { onToggle, isOpen, onClose } = useModal();

    const onBurgerClick = () => {
        document.querySelector("html").classList.toggle("hidden");
        onToggle();
    };

    const handleLinks = () => {
        onClose();
        document.querySelector("html").classList.remove("hidden");
    };

    const links = [
        {
            title: "Мероприятия СССР",
            href: CORPORATE_OF_THE_USSR,
        },
        {
            title: "Музей на выезд",
            href: MUSEUM_ON_DEPARTURE,
        },
        {
            title: "Праздник в музее",
            href: HOLIDAY_AT_THE_MUSEUM,
        },
        {
            title: "О нас",
            href: MUSEUM,
        },
        {
            title: "Контакты",
            href: "/",
        },
    ];

    return (
        <header className="header">
            <div className="container header__container">
                <Link href="/">
                    <a className="header__logo-link">
                        <Image
                            className="header__logo"
                            src="/img/logo-dark.svg"
                            alt="МУЗЕЙ СОВЕТСКОГО ДЕТСВА"
                            width={118}
                            height={64}
                        />
                    </a>
                </Link>
                <nav className={isOpen ? "nav nav--open" : "nav"}>
                    <ul className="nav__list">
                        {links.map((link, index) => (
                            <li key={index} className="nav__item">
                                <Link href={link.href}>
                                    <a
                                        onClick={() => handleLinks()}
                                        className="nav__link"
                                    >
                                        {link.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header__buttons">
                    <div className="header__tel-block">
                        <Link href="tel:79996669999">
                            <a className="header__tel">
                                <Image
                                    src="/img/phone.svg"
                                    alt="telephone"
                                    width={32}
                                    height={26}
                                />
                                <span>+7 999 666 99 99</span>
                            </a>
                        </Link>
                    </div>
                    <button className="header__tickets">
                        <svg
                            width="32"
                            height="31"
                            viewBox="0 0 32 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M32 9.2081L30.384 13.7201V13.7041C29.552 13.4001 28.736 13.4481 27.936 13.8321C27.136 14.2161 26.576 14.8241 26.272 15.6561C25.968 16.4881 26.016 17.3041 26.384 18.1041C26.768 18.9041 27.376 19.4481 28.224 19.7521V19.7681L26.608 24.2801L2.512 15.6721L4.096 11.2081C4.928 11.5121 5.744 11.4641 6.544 11.0801C7.344 10.7121 7.888 10.1041 8.192 9.2721C8.496 8.4401 8.448 7.6241 8.064 6.8241C7.88902 6.4437 7.63851 6.10287 7.3277 5.82231C7.01689 5.54176 6.65227 5.32734 6.256 5.1921L7.888 0.600098L32 9.2081ZM24.048 18.3121L26.24 12.2961C26.432 11.8001 26.4 11.2561 26.176 10.7761C25.952 10.2961 25.552 9.9281 25.056 9.7361L13.024 5.3681C12 5.0001 10.832 5.5601 10.464 6.5521L8.272 12.5681C7.888 13.6081 8.432 14.7601 9.456 15.1281L21.488 19.5121C21.712 19.5921 21.936 19.6401 22.176 19.6401C23.008 19.6401 23.776 19.1121 24.048 18.3121ZM12.752 6.1201L24.768 10.4881C25.072 10.6001 25.312 10.8241 25.456 11.1121C25.584 11.4001 25.6 11.7201 25.488 12.0241L23.296 18.0401C23.088 18.6481 22.368 18.9841 21.76 18.7601L9.744 14.3761C9.44492 14.2678 9.20107 14.0452 9.06606 13.7571C8.93105 13.4691 8.91592 13.1393 9.024 12.8401L11.216 6.8241C11.376 6.3601 11.84 6.0401 12.336 6.0401C12.48 6.0401 12.608 6.0721 12.752 6.1201ZM23.664 25.5441C24.224 25.9761 24.864 26.2001 25.584 26.2001H25.6V31.0001H0V26.2641C0.88 26.2641 1.648 25.9441 2.256 25.3201C2.88 24.7121 3.2 23.9441 3.2 23.0641C3.2 22.1841 2.88 21.4321 2.256 20.8081C1.632 20.1841 0.88 19.8641 0 19.8641V15.0001H1.68L1.232 16.2801L5.824 17.9121C5.008 18.1681 4.4 18.9041 4.4 19.8001V26.2001C4.4 27.3041 5.296 28.2001 6.4 28.2001H19.2C20.304 28.2001 21.2 27.3041 21.2 26.2001V23.4001L22.528 23.8801C22.72 24.5681 23.104 25.1281 23.664 25.5441ZM5.2 26.2001V19.8001C5.2 19.1441 5.744 18.6001 6.4 18.6001H7.728L20.4 23.1281V26.2001C20.4 26.8561 19.856 27.4001 19.2 27.4001H6.4C5.744 27.4001 5.2 26.8561 5.2 26.2001Z"
                                fill="#131722"
                            />
                        </svg>
                        <span>Билеты</span>
                    </button>
                    <button
                        className={isOpen ? "burger--open burger" : "burger"}
                        onClick={() => onBurgerClick()}
                    >
                        <div className="burger__line"></div>
                        <div className="burger__line"></div>
                        <div className="burger__line"></div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
