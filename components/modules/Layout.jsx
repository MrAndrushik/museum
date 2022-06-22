import Header from "./Header";
import Footer from "./Footer";
import TicketModal from "./TicketModal";
import Feedback from "./Feedback";
import Contacts from "./Contacts";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
    return (
        <>
            <ScrollToTop />
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
