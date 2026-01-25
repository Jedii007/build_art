import Image from "next/image";
import Link from "next/link";
import FooterAnimations from "../animations/FooterAnimations";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__logo">
            <Image
              src="/assets/images/Build-art-global-logo-02-1.png"
              alt="BuildArt Global"
              width={898}
              height={214}
            />
          </div>

          <nav className="footer__nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/exhibitions">Exhibitions</Link>
            <Link href="/office-fitout">Office Fit-Out</Link>
            <Link href="/home-interiors">Home Interiors</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="footer__contact">
            <a href="mailto:info@buildartglobal.ae" className="footer__email">
              info@buildartglobal.ae
            </a>
            <span className="footer__location">Dubai · Abu Dhabi</span>
          </div>

          <div className="footer__legal">
            <span className="footer__copyright">© 2025 BuildArt Global</span>
            <div className="footer__links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </div>
      <FooterAnimations />
    </footer>
  );
}
