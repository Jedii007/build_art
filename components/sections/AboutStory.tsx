import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="about-story">
      <div className="container">
        <div className="about-story__grid">
          <h2 className="about-story__headline">
            Built on experience. <br />Driven by execution.
          </h2>

          <div className="about-story__text">
            <p>
              BuildArt Global was formed on a simple principle: great spaces
              are not defined by design alone, but by how well they are planned,
              built, powered, and delivered.
            </p>
            <p>
              With industry experience rooted in decades of hands-on work since
              1987, our team brings together expertise across design, fit-out,
              joinery, exhibitions, electrical systems, and technical
              integration.
            </p>
            <p>
              Over the years, we have evolved into a multidisciplinary company
              trusted by brands, businesses, and homeowners who value clarity,
              accountability, and results — especially in environments where
              deadlines are fixed and failure is not an option.
            </p>
          </div>

          <div className="about-story__image">
            <Image
              src="/assets/images/create-studio.jpeg"
              alt="BuildArt Global Work"
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
