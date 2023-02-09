import Navbar from "../src/components/Navbar/Navbar";
import { AnimatePresence , motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function pricing() {
  return (
    <>
      {/* <motion.div initial={{y:'100vh'}} animate={{y:0}} exit={{y:'-200px' ,position:'absolute'}} > */}
        <Navbar/>
        <div className="firstdiv princingdiv">
          pricing
        </div>
      {/* </motion.div> */}
    </>
  )
}