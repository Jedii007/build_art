import Image from "next/image";
import Link from "next/link";

export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="social-proof__grid">
          <div className="social-proof__header">
            <h2 className="social-proof__headline">
              Stories of Transformed Spaces
            </h2>
          </div>

          <div className="social-proof__image social-proof__image--large">
            <Image
              src="/assets/images/home/img00001.jpeg"
              alt="Exhibition Stand Project"
              fill
              sizes="100vw"
            />
          </div>

          <div className="social-proof__image social-proof__image--small">
            <Image
              src="/assets/images/home/studio-05.jpeg"
              alt="Office Fit-Out Project"
              fill
              sizes="100vw"
            />
            <div className="social-proof__testimonial">
              <p className="social-proof__quote">
                "BuildArt Global's team turned our space into a modern
                masterpiece — on time and beyond expectations."
              </p>
              <span className="social-proof__client">Mujadid, UAE</span>
            </div>
          </div>

          <div className="social-proof__image social-proof__image--small">
            <Image
              src="/assets/images/home/studio-06.jpeg"
              alt="Residential Interior"
              fill
              sizes="100vw"
            />
          </div>

          <div className="social-proof__image social-proof__image--small">
            <Image
              src="/assets/images/home/img00004.jpeg"
              alt="Commercial Space"
              fill
              sizes="100vw"
            />
          </div>

          <div className="social-proof__image social-proof__image--small">
            <Image
              src="/assets/images/home/img00002.jpeg"
              alt="Event Space"
              fill
              sizes="100vw"
            />
            <div className="social-proof__testimonial">
              <p className="social-proof__quote">
                "They delivered a functional, elegant office that reflects our
                brand."
              </p>
              <span className="social-proof__client">Rachael, UAE</span>
            </div>
          </div>

          <div className="social-proof__image social-proof__image--large">
            <Image
              src="/assets/images/home/exhibition-3.jpg"
              alt="Exhibition Environment"
              fill
              sizes="100vw"
            />
          </div>

          <div className="social-proof__cta-wrapper">
            <Link href="/portfolio" className="social-proof__cta">
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
