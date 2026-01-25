import Image from "next/image";

export default function AboutTrust() {
  return (
    <section className="about-trust">
      <div className="container">
        <div className="about-trust__grid">
          <h2 className="about-trust__headline">Trust is built through delivery.</h2>

          <div className="about-trust__content">
            <div className="about-trust__intro">
              <p>Clients choose BuildArt Global because we:</p>
            </div>

            <ul className="about-trust__points">
              <li>1. Take full responsibility from concept to completion</li>
              <li>2. Understand UAE regulations, venues, and authority processes</li>
              <li>3. Integrate design, build, and technical execution</li>
              <li>4. Communicate clearly and realistically</li>
              <li>5. Deliver what we commit to — on time</li>
            </ul>

            <div className="about-trust__closing">
              <p>We don't overpromise.</p>
              <p>We plan thoroughly.</p>
              <p>And we execute with discipline.</p>
            </div>
          </div>

          <div className="about-trust__image">
            <Image
              src="/assets/images/exhibition-6.jpg"
              alt="BuildArt Global Delivery"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
