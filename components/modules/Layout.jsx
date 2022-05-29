import Header from "./Header";
import Footer from "./Footer";
import TicketModal from "./TicketModal";
import Feedback from "./Feedback";
import Contacts from "./Contacts";

const Layout = ({ children }) => {
    return (
        <>
            <TicketModal />
            <Feedback />
            <Header />
            {children}
            <Contacts />
            <Footer />
        </>
    );
};

export default Layout;
