import '../styles/globals.css'
import { AnimatePresence , motion } from 'framer-motion'
import { useState } from "react";
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  var route=useRouter()
  return (
    <>
      <AnimatePresence>
        <motion.div  key={route.pathname} initial={{y:'100vh'}} animate={{y:['1200px','900px','600px','300px','0px']}} exit={{y:['0px','0px','0px','0px','-300px'],position:'absolute',width:'100%'}} transition={{duration:0.75,ease:'linear'}} > 
          <Component {...pageProps}/>
        </motion.div> 
      </AnimatePresence>
    </>
  )
}

export default MyApp
