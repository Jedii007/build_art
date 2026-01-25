import Link from "next/link";
import Image from "next/image";
import HeaderBehavior from "../animations/HeaderBehavior";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            <Image
              src="/assets/images/Build-art-global-logo-02-1.png"
              alt="BuildArt Global"
              width={898}
              height={214}
            />
          </Link>

          <button className="header__menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="header__nav">
            <Link href="/about">About</Link>
            <Link href="/exhibitions">Exhibitions</Link>
            <Link href="/office-fitout">Office Fit-Out</Link>
            <Link href="/home-interiors">Home Interiors</Link>
          </nav>
        </div>
      </div>
      <HeaderBehavior />
    </header>
  );
}
