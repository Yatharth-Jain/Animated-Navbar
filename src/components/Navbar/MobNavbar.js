import Link from "next/link";
import { useRef, useState } from "react";
// import hamburger from '../../../public/image/hamburger-logo.png'

export default function MobNavbar() {
  var navbardiv = useRef(null);
  const [shownav,setShownav]=useState(0);
  return (
    <nav id="mobNavbar">
      <Link href="/" className="logo">
        LOGO
      </Link>
      <ul className={`links ${shownav==1 && 'shownavdiv'}`} ref={navbardiv}>
        <li>
          <Link href="/" className="navlinks" onClick={() => setShownav(shownav^1)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="navlinks" onClick={() => setShownav(shownav^1)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="navlinks" onClick={() => setShownav(shownav^1)}>
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/contact" className="navlinks" onClick={() => setShownav(shownav^1)}>
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
