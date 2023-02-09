import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link
            href="/"
            style={{
              fontSize: 30,
              fontWeight: 900,
              marginLeft: 20,
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Link>
        </li>
        <li>
          <Link href="/" className="navlinks">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="navlinks">
            About
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="navlinks">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/contact" className="navlinks">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
