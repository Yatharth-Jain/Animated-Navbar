import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import MobNavbar from "../src/components/Navbar/MobNavbar";

function MyApp({ Component, pageProps }) {
  var route = useRouter();
  return (
    <>
      <MobNavbar/>
      <AnimatePresence>
        <motion.div
          key={route.pathname}
          initial={{ y: "100vh" }}
          animate={{ y: ["200%","0%"] }}
          exit={{
            y: ["0%", "0%", "0%", "-60%"],
            position: "absolute",
            width: "100%",
            cursor: "default",
          }}
          transition={{ duration: 1, ease: [0.32, 0, 0.46, 1] }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
