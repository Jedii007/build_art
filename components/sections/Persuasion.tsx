import Image from "next/image";
import Link from "next/link";

export default function Persuasion() {
  return (
    <section className="persuasion">
      <div className="container">
        <div className="persuasion__header">
          <h2 className="persuasion__headline">Real Experience. Real Results.</h2>
          <p className="persuasion__text">
            For more than three decades, BuildArt Global has delivered design
            and build solutions rooted in craftsmanship, innovation, and client
            satisfaction across settings from corporate environments to bespoke
            exhibitions and refined interiors.
          </p>
        </div>

        <div className="persuasion__grid">
          <div className="persuasion__image persuasion__image--hero">
            <Image
              src="/assets/images/nastuh-abootalebi-ZtC4_rPCRXA-unsplash.jpg"
              alt="BuildArt Global Project"
              fill
              sizes="100vw"
            />
          </div>

          <div className="persuasion__image">
            <Image
              src="/assets/images/home/instagram-08.jpeg"
              alt="BuildArt Global Project"
              fill
              sizes="100vw"
            />
          </div>

          <div className="persuasion__image">
            <Image
              src="/assets/images/nrd-c3tNiAb098I-unsplash.jpg"
              alt="BuildArt Global Project"
              fill 
              sizes="100vw"
            />
          </div>

          <div className="persuasion__image">
            <Image
              src="/assets/images/home/image22.png"
              alt="BuildArt Global Project"
              fill
              sizes="100vw"
            />
          </div>

          <div className="persuasion__image">
            <Image
              src="/assets/images/studio-08.jpeg"
              alt="BuildArt Global Project"
              fill
              sizes="100vw"
            />
          </div>
        </div>

        <div className="persuasion__bullets">
          <ul>
            <li>End-to-end project management</li>
            <li>Dedicated design and production team</li>
            <li>Deep local UAE expertise</li>
            <li>Reliable delivery &amp; communication</li>
          </ul>
        </div>

        <div className="persuasion__cta-wrapper">
          <Link href="/about" className="persuasion__cta">
            Learn More About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
