import styles from "../../styles/modules/Tickets.module.scss";
import Tickets from "./Tickets";
import { useSelector } from "react-redux";

const TicketModal = () => {
    const ticketIsOpen = useSelector((state) => state.toolkit.ticketIsOpen);

    return (
        <div
            className={
                ticketIsOpen
                    ? `${styles.modal} ${styles.modalOpen}`
                    : `${styles.modal}`
            }
        >
            <Tickets type="modal" />
        </div>
    );
};

export default TicketModal;
