import "@/styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      // duration: 1000,
      once: true,
    });
  }, []);


  return <Component {...pageProps} />;
}
