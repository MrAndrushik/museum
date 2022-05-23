import Layout from "../components/Layout";
import "normalize.css";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;