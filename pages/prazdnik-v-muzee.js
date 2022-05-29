import Head from "next/head";
import Hero from "../components/holiday-at-museum/Hero";
import History from "../components/modules/History";
import Space from "../components/modules/Space";

// DATA
import RoomsData from "../public/data/holiday-at-museum/rooms.json";
import AtriumData from "../public/data/holiday-at-museum/atrium.json";
import VeniceData from "../public/data/holiday-at-museum/venice.json";
import OutsideData from "../public/data/holiday-at-museum/outside.json";

export default function corporateUSSR() {
    return (
        <>
            <Head>
                <title>Праздник в музее</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <History obj={RoomsData} />
            <Space obj={AtriumData} />
            <Space obj={VeniceData} />
            <Space obj={OutsideData} />
        </>
    );
}