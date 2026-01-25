import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <Image
          src="/assets/images/home/hero-slider-4.png"
          alt="BuildArt Global Projects"
          className="hero__bg-slide active"
          fill
          sizes="100vw"
          priority
        />
        <Image
          src="/assets/images/home/hero-slider-2.png"
          alt="BuildArt Global Projects"
          className="hero__bg-slide"
          fill
          sizes="100vw"
        />
        <Image
          src="/assets/images/home/hero-slider-3.png"
          alt="BuildArt Global Projects"
          className="hero__bg-slide"
          fill
          sizes="100vw"
        />
        <Image
          src="/assets/images/home/hero-slider-1.png"
          alt="BuildArt Global Projects"
          className="hero__bg-slide"
          fill
          sizes="100vw"
        />
      </div>

      <div className="container">
        <div className="hero__grid">
          <div className="hero__service-left">
            <span>Exhibition Stands</span>
          </div>

          <div className="hero__service-center">
            <span>Office Fit-Out</span>
          </div>

          <div className="hero__service-right">
            <span>Home Interiors</span>
          </div>

          <h1 className="hero__title">
            Designing &amp; Building Exceptional <br />
            Spaces Across the UAE
          </h1>

          <div className="hero__ctas">
            <Link href="/contact" className="btn btn--primary">
              Get Started
            </Link>
            <Link href="/portfolio" className="btn btn--secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
