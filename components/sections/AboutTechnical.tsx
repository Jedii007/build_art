import Image from "next/image";

export default function AboutTechnical() {
  return (
    <section className="about-technical">
      <div className="about-technical__sidebar"></div>

      <div className="container">
        <div className="about-technical__grid">
          <div className="about-technical__label">
            A Core Strength, Not an Add-On
          </div>

          <h2 className="about-technical__headline">
            Technical &amp; Electrical Capability
          </h2>

          <div className="about-technical__intro">
            <p>
              Modern spaces rely on technology to function properly. BuildArt
              Global provides in-house coordination of electrical and technical
              works across exhibitions, commercial spaces, and residential
              projects.
            </p>
          </div>

          <ul className="about-technical__capabilities">
            <li>Electrical planning and installation</li>
            <li>Lighting design and implementation</li>
            <li>Power distribution and load coordination</li>
            <li>Audio-visual and digital display integration</li>
            <li>Technical coordination with venues and authorities</li>
          </ul>

          <div className="about-technical__closing">
            <p>Operationally reliable and fully compliant.</p>
          </div>
        </div>
      </div>

      <div className="about-technical__image">
        <Image
          src="/assets/images/image19.webp
"
          alt="Technical Capability"
          fill
          sizes="100vw"
        />
      </div>
    </section>
  );
}