import Image from "next/image";
import Link from "next/link";

type ProcessStep = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  number?: string;
};

type ProcessCta = {
  href: string;
  label: string;
};

type ProcessProps = {
  headline?: string;
  steps?: ProcessStep[];
  cta?: ProcessCta | null;
  baseClassName?: string;
  dark?: boolean;
  elementSeparator?: string;
};

const defaultSteps: ProcessStep[] = [
  {
    title: "Discovery & Vision",
    description: "We start by understanding your goals and context.",
    image: {
      src: "/assets/images/home/image15.jpg",
      alt: "Discovery & Vision",
    },
  },
  {
    title: "Design & Strategy",
    description: "Tailored concepts backed by 3D visualization (where relevant).",
    image: {
      src: "/assets/images/home/office-3.png",
      alt: "Design & Strategy",
    },
  },
  {
    title: "Execution & Delivery",
    description: "On-time build with precision and quality assurance.",
    image: {
      src: "/assets/images/home/image (8).jpg",
      alt: "Execution & Delivery",
    },
  },
  {
    title: "Support & Follow-Through",
    description: "We ensure your space performs exactly as intended.",
    image: {
      src: "/assets/images/home/image20.webp",
      alt: "Support & Follow-Through",
    },
  },
];

const defaultCta: ProcessCta = {
  href: "/contact",
  label: "Start Your Project →",
};

export default function Process({
  headline = "A Clear, Collaborative Process",
  steps = defaultSteps,
  cta = defaultCta,
  baseClassName = "process",
  dark = false,
  elementSeparator = "__",
}: ProcessProps) {
  const sectionClassName = dark
    ? `${baseClassName} ${baseClassName}--dark`
    : baseClassName;
  const elementPrefix = `${baseClassName}${elementSeparator}`;

  return (
    <section className={sectionClassName}>
      <h2 className={`${elementPrefix}headline`}>{headline}</h2>

      <div className={`${elementPrefix}cards`}>
        {steps.map((step, index) => {
          const stepNumber =
            step.number ?? String(index + 1).padStart(2, "0");
          const image = (
            <div className={`${elementPrefix}image`}>
              <Image
                src={step.image.src}
                alt={step.image.alt}
                fill
                sizes="100vw"
              />
            </div>
          );
          const stepContent = (
            <div className={`${elementPrefix}step`}>
              <div className={`${elementPrefix}step-number`}>
                {stepNumber}
              </div>
              <h3 className={`${elementPrefix}step-title`}>{step.title}</h3>
              <p className={`${elementPrefix}step-description`}>
                {step.description}
              </p>
            </div>
          );

          return (
            <div
              key={`${baseClassName}-${index}`}
              className={`${elementPrefix}item ${elementPrefix}item--${
                index + 1
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  {image}
                  {stepContent}
                </>
              ) : (
                <>
                  {stepContent}
                  {image}
                </>
              )}
            </div>
          );
        })}
      </div>

      {cta ? (
        <Link href={cta.href} className={`${elementPrefix}cta`}>
          {cta.label}
        </Link>
      ) : null}
    </section>
  );
}
