import Navbar from "../src/components/Navbar/Navbar"
import { useRouter } from 'next/router'
import { AnimatePresence , motion } from 'framer-motion'

export default function Home() {
  var route=useRouter()

  return (
    <>
        <Navbar/>
        <div className="firstdiv homediv">Home</div>
    </>
  )
}
