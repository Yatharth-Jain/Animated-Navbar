import Navbar from "../src/components/Navbar/Navbar";
import { AnimatePresence , motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from "react";

export default function pricing(props) {
  var route=useRouter()
  var [show,setShow]=useState(1);
  setTimeout(()=>{
    setShow(0);
  },4000)
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

export async function getServerSideProps(){
  return{
    props:{
      data:"Hi"
    }
  }
}