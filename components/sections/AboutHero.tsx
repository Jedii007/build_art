import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero__grid">
          <h1 className="about-hero__title">Design. Build. Deliver.</h1>
          <div className="about-hero__intro">
            <p>
              BuildArt Global is a UAE-based design and build partner delivering
              exhibition stands, commercial fit-outs, and residential interiors
              through a fully integrated approach — from concept and technical
              planning to execution and handover.
            </p>
            <p>
              We combine design excellence, engineering discipline, and on-site
              execution to create spaces that perform under real-world
              conditions.
            </p>
          </div>
          <div className="about-hero__image">
            <Image
              src="/assets/images/ty.jpg"
              alt="BuildArt Global Work"
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
