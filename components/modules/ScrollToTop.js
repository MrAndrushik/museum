import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ScrollToTop() {
    const router = useRouter();

    useEffect(() => {
        console.log("scrolled to top");
        window.scrollTo(0, 0);
    }, [router]);

    return null;
}
