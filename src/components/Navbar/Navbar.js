import Link from "next/link";
import { useRef, useState } from "react";
// import hamburger from '../../../public/image/hamburger-logo.png'

export default function Navbar() {
  var navbardiv = useRef(null);
  const [shownav,setShownav]=useState(0);
  return (
    <nav id="navbar">
      <Link href="/" className="logo">
        LOGO
      </Link>
      <ul className={`links ${shownav==1 && 'shownavdiv'}`} ref={navbardiv}>
        <li>
          <Link href="/" className="navlinks" >
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="navlinks" >
            About
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="navlinks" >
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/contact" className="navlinks" >
            Contact
          </Link>
        </li>
      </ul>
      <img
        src="/image/hamburger-logo.png"
        className="hamburgerbtn"
        alt=""
        onClick={() => setShownav(shownav^1)}
      />
    </nav>
  );
}
