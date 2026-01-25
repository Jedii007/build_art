import Image from "next/image";

export default function AboutDefines() {
  return (
    <section className="about-defines">
      <div className="container">
        <div className="about-defines__grid">
          <h2 className="about-defines__headline">
            Integrated thinking.
            <br />
            Full responsibility.
          </h2>

          <div className="about-defines__image">
            <Image
              src="/assets/images/aalo-lens-Ypv0MH4izf8-unsplash.jpg"
              alt="BuildArt Global Integration"
              fill
              sizes="100vw"
            />
          </div>

          <div className="about-defines__content">
            <p>
              What sets BuildArt Global apart is our ability to manage design,
              build, and technical execution under one roof.
            </p>
            <p>
              We don't separate creativity from engineering. We don't design
              without considering buildability. And we don't treat electrical or
              technology as an afterthought.
            </p>
            <p>
              By integrating architecture, structure, electrical planning,
              lighting, AV, and on-site coordination, we reduce complexity for
              our clients and maintain full control over quality, timelines, and
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
