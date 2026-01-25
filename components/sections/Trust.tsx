import Image from "next/image";

export default function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <div className="trust__grid">
          <div className="trust__content">
            <div className="trust__label">35 Years of Expertise</div>
            <h2 className="trust__headline">
              Design &amp; Technical Excellence in Fit-Out and Exhibitions
            </h2>
            <p className="trust__locations">
              Dubai · Abu Dhabi · UAE International Exhibitions
            </p>
          </div>

          <div className="trust__image">
            <Image
              src="/assets/images/home/office-1.png"
              alt="BuildArt Global Project"
              fill
              sizes="100vw"
            />
          </div>

          <div className="trust__image">
            <Image
              src="/assets/images/exhibition-8.jpeg"
              alt="BuildArt Global Project"
              fill
              sizes="100vw"
            />
          </div>

          <div className="trust__image">
            <Image
              src="/assets/images/home/image34.png"
              alt="BuildArt Global Project"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
