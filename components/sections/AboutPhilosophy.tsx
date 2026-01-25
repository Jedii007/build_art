import Image from "next/image";

export default function AboutPhilosophy() {
  return (
    <section className="about-philosophy">
      <div className="container">
        <div className="about-philosophy__grid">
          <div className="about-philosophy__label">Our Philosophy</div>

          <h2 className="about-philosophy__headline">
            Focused.
            <br />
            Collaborative.
            <br />
            Accountable.
          </h2>

          <div className="about-philosophy__content">
            <p>
              We believe successful projects are built through collaboration,
              honesty, and execution discipline. Every decision we make — from
              design choices to technical planning — is guided by one question:
              Will this perform as expected in the real world? That mindset
              defines how we work and why our clients continue to trust us.
            </p>
          </div>

          <div className="about-philosophy__image">
            <Image
              src="/assets/images/image35.png"
              alt="BuildArt Global Philosophy"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
