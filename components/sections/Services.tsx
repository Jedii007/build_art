import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">What We Do</h2>
        </div>
      </div>
      <div className="services__cards-container">
        <div className="services__wrapper">
          <div className="service-card" data-service="1">
            <div className="service-card__bg">
              <Image
                src="/assets/images/exhibition-5.jpg"
                alt="Exhibition Stands"
                fill
                sizes="100vw"
              />
            </div>
            <div className="container">
              <div className="service-card__content">
                <h2 className="service-card__title">
                  Exhibition Stands &amp; Event Environments
                </h2>
                <p className="service-card__description">
                  Custom design and build for trade shows, global expos, and
                  brand activations in the UAE. High-impact stands that attract
                  attention and drive results.
                </p>
                <Link href="/exhibitions" className="service-card__cta">
                  Explore Exhibition Services →
                </Link>
              </div>
            </div>
          </div>

          <div className="service-card" data-service="2">
            <div className="service-card__bg">
              <Image
                src="/assets/images/mikhail-derecha-q-XTB-YTsho-unsplash.jpg"
                alt="Office Fit-Out"
                fill
                sizes="100vw"
              />
            </div>
            <div className="container">
              <div className="service-card__content">
                <h2 className="service-card__title">
                  Office &amp; Commercial Fit-Outs
                </h2>
                <p className="service-card__description">
                  Functional, brand-aligned, and future-ready workspaces that
                  boost engagement and efficiency. From planning to delivery,
                  tailored for your business needs.
                </p>
                <Link href="/office-fitout" className="service-card__cta">
                  Explore Office Services →
                </Link>
              </div>
            </div>
          </div>

          <div className="service-card" data-service="3">
            <div className="service-card__bg">
              <Image
                src="/assets/images/marina-nazina-bhV15497Nr8-unsplash.jpg"
                alt="Home Interiors"
                fill
                sizes="100vw"
              />
            </div>
            <div className="container">
              <div className="service-card__content">
                <h2 className="service-card__title">
                  Home Fit-Out &amp; Residential Design
                </h2>
                <p className="service-card__description">
                  Beautiful, comfortable, and personal spaces tailored to
                  lifestyle and taste. We integrate creativity with
                  craftsmanship for lasting everyday living.
                </p>
                <Link href="/home-interiors" className="service-card__cta">
                  Explore Home Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
