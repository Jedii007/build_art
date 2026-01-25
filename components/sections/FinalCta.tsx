import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type CtaLink = {
  href: string;
  label: string;
};

type CtaImage = {
  src: string;
  alt: string;
};

type FinalCtaProps = {
  headline?: ReactNode;
  subheadline?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  image?: CtaImage;
};

const defaultHeadline = (
  <>
    Ready to Transform
    <br />
    Your Space?
  </>
);

const defaultPrimaryCta: CtaLink = {
  href: "/contact",
  label: "Start a Project",
};

const defaultSecondaryCta: CtaLink = {
  href: "/contact?quote=true",
  label: "Request a Quote",
};

const defaultImage: CtaImage = {
  src: "/assets/images/home/image33.png",
  alt: "BuildArt Global Project",
};

export default function FinalCta({
  headline = defaultHeadline,
  subheadline = "Tell us your project goals and we'll guide you with clarity and confidence.",
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
  image = defaultImage,
}: FinalCtaProps) {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta__grid">
          <div className="final-cta__image">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
            />
          </div>

          <div className="final-cta__content">
            <h2 className="final-cta__headline">{headline}</h2>

            <p className="final-cta__subheadline">
              {subheadline}
            </p>

            <div className="final-cta__buttons">
              <Link href={primaryCta.href} className="btn btn--primary">
                {primaryCta.label}
              </Link>
              <Link href={secondaryCta.href} className="btn btn--secondary">
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
