import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import FinalCta from "components/sections/FinalCta";
import Process from "components/sections/Process";

type ImageAsset = {
  src: string;
  alt: string;
};

type CtaLink = {
  href: string;
  label: string;
};

type HeroSection = {
  headline: string;
  description: string;
  image: ImageAsset;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  trustLine?: string;
};

type ServiceIntro = {
  headline: string;
  description: string;
  image: ImageAsset;
  imageDescription: string;
  descriptionHeadline: string;
  descriptionItems: Array<{
    number: string;
    label: string;
  }>;
};

type WhoSection = {
  headline: string;
  image: ImageAsset;
  intro: string;
  items: string[];
};

type ScopeSection = {
  headline: string;
  image: ImageAsset;
  imageText: string;
  contentImage: ImageAsset;
  listHeadline: string;
  items: Array<{
    letter: string;
    text: string;
  }>;
  closingText: string;
};

type TypesSection = {
  headline: string;
  cards: Array<{
    number: string;
    title: string;
    description: string;
    image: ImageAsset;
  }>;
};

type TechnicalSection = {
  headline: string;
  description: string;
  intro: string;
  items: string[];
  image: ImageAsset;
  closingText: string;
};

type ProcessSection = {
  headline: string;
  steps: Array<{
    number: string;
    title: string;
    description: string;
    image: ImageAsset;
  }>;
};

type WhySection = {
  headline: string;
  image: ImageAsset;
  caption: string;
  subheadline: string;
  intro: string;
  items: Array<{
    number: string;
    text: string;
  }>;
  closingText: string;
};

type ExperienceSection = {
  headline: string;
  intro: string;
  subheadline: string;
  items: Array<{
    number: string;
    text: string;
  }>;
  closingText: string;
  image: ImageAsset;
  caption: string;
};

type PortfolioSection = {
  headline: string;
  rows: Array<
    Array<{
      image: ImageAsset;
      meta: string;
    }>
  >;
  cta: CtaLink;
};

type FaqSection = {
  headline: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
  image: ImageAsset;
};

type FinalCtaSection = {
  headline?: ReactNode;
  subheadline?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  image?: ImageAsset;
};

export type ServicePageContentProps = {
  hero: HeroSection;
  serviceIntro?: ServiceIntro;
  who?: WhoSection;
  scope?: ScopeSection;
  types?: TypesSection;
  technical?: TechnicalSection;
  process?: ProcessSection;
  why?: WhySection;
  experience?: ExperienceSection;
  portfolio?: PortfolioSection;
  faq?: FaqSection;
  finalCta?: FinalCtaSection;
};

export default function ServicePageContent({
  hero,
  serviceIntro,
  who,
  scope,
  types,
  technical,
  process,
  why,
  experience,
  portfolio,
  faq,
  finalCta,
}: ServicePageContentProps) {
  return (
    <>
      <section className="exhibitions-hero">
        <div className="exhibitions-hero__split">
          <div className="exhibitions-hero__image">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              sizes="100vw"
              priority
            />
          </div>

          <div className="exhibitions-hero__content">
            <div className="exhibitions-hero__inner">
              <h1 className="exhibitions-hero__headline">{hero.headline}</h1>

              <div className="exhibitions-hero__text-block exhibitions-hero__text">
                <p>{hero.description}</p>
              </div>

              <div className="exhibitions-hero__ctas">
                <Link
                  href={hero.primaryCta.href}
                  className="exhibitions-hero__cta exhibitions-hero__cta--primary"
                >
                  {hero.primaryCta.label}
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="exhibitions-hero__cta exhibitions-hero__cta--secondary"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>

              {hero.trustLine ? (
                <div className="exhibitions-hero__trust">{hero.trustLine}</div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {serviceIntro ? (
        <section className="exhibition__service">
          <div className="container">
            <div className="exhibition__service-header">
              <h1 className="exhibition__service-headline">
                {serviceIntro.headline}
              </h1>

              <p className="exhibition__service-description">
                {serviceIntro.description}
              </p>
            </div>

            <div className="exhibition__service-wrapper">
              <div className="exhibition__image-container">
                <div className="exhibition__image">
                  <Image
                    src={serviceIntro.image.src}
                    alt={serviceIntro.image.alt}
                    fill
                    sizes="100vw"
                  />
                </div>
              </div>

              <div className="exhibition__wrapper-description">
                <h2 className="exhibition__description-headline">
                  {serviceIntro.descriptionHeadline}
                </h2>

                <div className="exhibition__description-items">
                  {serviceIntro.descriptionItems.map((item) => (
                    <div
                      key={item.number}
                      className="exhibition__description-item"
                    >
                      <span className="exhibition__description-number">
                        {item.number}
                      </span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {who ? (
        <section className="exhibition__who">
          <div className="container">
            <h1 className="exhibition__who-headline">{who.headline}</h1>

            <div className="exhibition__who-container">
              <div className="exhibition__container-image">
                <Image
                  src={who.image.src}
                  alt={who.image.alt}
                  fill
                  sizes="100vw"
                />
              </div>

              <div className="exhibition__container-content">
                <h2 className="exhibition__container-headline">{who.intro}</h2>

                <ul className="exhibition__container-items">
                  {who.items.map((item) => (
                    <li key={item} className="exhibition__container-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {scope ? (
        <section className="exhibition__scope">
          <div className="container">
            <div className="exhibition__scope-wrapper">
              <h1 className="exhibition__image-headline">{scope.headline}</h1>

              <div className="exhibition__scope-container">
                <div className="exhibition__scope-image">
                  <div className="exhibition__scope-image-media">
                    <Image
                      src={scope.image.src}
                      alt={scope.image.alt}
                      fill
                      sizes="100vw"
                    />
                  </div>

                  <p className="exhibition__image-text">{scope.imageText}</p>
                </div>

                <div className="exhibition__scope-content">
                  <div className="exhibition__content-image">
                    <Image
                      src={scope.contentImage.src}
                      alt={scope.contentImage.alt}
                      fill
                      sizes="100vw"
                    />
                  </div>

                  <h2 className="exhibition__content-headline">
                    {scope.listHeadline}
                  </h2>

                  <ul className="exhibition__content-items">
                    {scope.items.map((item) => (
                      <li
                        key={item.letter}
                        className="exhibition__content-item"
                      >
                        <span className="exhibition__description-number">
                          {item.letter}
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exhibition__container-text">
                  {scope.closingText}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {types ? (
        <section className="exhibition__types">
          <div className="container">
            <h1 className="exhibition__types-headline">{types.headline}</h1>
          </div>

          <div className="exhibition__types-stage">
            <div className="exhibition__types-wrapper">
              {types.cards.map((card, index) => (
                <div
                  key={card.number}
                  className={`exhibition__type-card exhibition__type-card--${
                    index + 1
                  }`}
                >
                  <div className="exhibition__type-bg">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      sizes="100vw"
                    />
                  </div>
                  <div className="exhibition__type-content">
                    <span className="exhibition__type-number">
                      {card.number}
                    </span>
                    <h2 className="exhibition__type-title">{card.title}</h2>
                    <p className="exhibition__type-description">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {technical ? (
        <section className="exhibition__technical">
          <div className="container">
            <div className="exhibition__technical-header">
              <h1 className="exhibition__technical-headline">
                {technical.headline}
              </h1>
            </div>

            <div className="exhibition__technical-container">
              <div className="exhibition__technical-content">
                <p className="exhibition__header-description">
                  {technical.description}
                </p>

                <h2 className="exhibition__content-text">{technical.intro}</h2>

                <ul className="exhibition__technical-items">
                  {technical.items.map((item) => (
                    <li key={item} className="exhibition__technical-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exhibition__technical-image">
                <div className="exhibition__technical-media">
                  <Image
                    src={technical.image.src}
                    alt={technical.image.alt}
                    fill
                    sizes="100vw"
                  />
                </div>

                <h2 className="exhibition__technical-text">
                  {technical.closingText}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {process ? (
        <Process
          headline={process.headline}
          steps={process.steps}
          baseClassName="exhibition__process"
          elementSeparator="-"
          cta={null}
        />
      ) : null}

      {why ? (
        <section className="exhibition__why">
          <div className="container">
            <div className="exhibition__why-wrapper">
              <h2 className="exhibition__why-headline">{why.headline}</h2>

              <div className="exhibition__why-container">
                <div className="exhibition__why-image">
                  <div className="exhibition__why-media">
                    <Image
                      src={why.image.src}
                      alt={why.image.alt}
                      fill
                      sizes="100vw"
                    />
                  </div>

                  <p className="exhibition__why-caption">{why.caption}</p>
                </div>

                <div className="exhibition__why-content">
                  <div className="exhibition__why-block">
                    <h3 className="exhibition__why-subheadline">
                      {why.subheadline}
                    </h3>

                    <p className="exhibition__why-text">{why.intro}</p>
                  </div>

                  <ul className="exhibition__why-list">
                    {why.items.map((item) => (
                      <li key={item.number} className="exhibition__why-item">
                        <span className="exhibition__why-number">
                          {item.number}
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>

                  <p className="exhibition__why-closing">{why.closingText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {experience ? (
        <section className="exhibition__experience">
          <div className="container">
            <div className="exhibition__experience-wrapper">
              <h2 className="exhibition__experience-headline">
                {experience.headline}
              </h2>

              <div className="exhibition__experience-container">
                <div className="exhibition__experience-content">
                  <div className="exhibition__experience-main">
                    <p className="exhibition__experience-intro">
                      {experience.intro}
                    </p>

                    <div className="exhibition__experience-block">
                      <h3 className="exhibition__experience-subheadline">
                        {experience.subheadline}
                      </h3>

                      <ul className="exhibition__experience-list">
                        {experience.items.map((item) => (
                          <li
                            key={item.number}
                            className="exhibition__experience-item"
                          >
                            <span className="exhibition__experience-number">
                              {item.number}
                            </span>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="exhibition__experience-closing">
                      {experience.closingText}
                    </p>
                  </div>
                </div>

                <div className="exhibition__experience-image">
                  <div className="exhibition__experience-media">
                    <Image
                      src={experience.image.src}
                      alt={experience.image.alt}
                      fill
                      sizes="100vw"
                    />
                  </div>

                  <p className="exhibition__experience-caption">
                    {experience.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {portfolio ? (
        <section className="exhibition__portfolio">
          <div className="container">
            <h2 className="exhibition__portfolio-headline">
              {portfolio.headline}
            </h2>
          </div>

          <div className="exhibition__portfolio-grid">
            {portfolio.rows.map((row, index) => (
              <div
                key={`portfolio-row-${index + 1}`}
                className={`exhibition__portfolio-row exhibition__portfolio-row--${
                  index + 1
                }`}
              >
                {row.map((item) => (
                  <div key={item.meta} className="exhibition__portfolio-item">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="100vw"
                    />
                    <span className="exhibition__portfolio-meta">
                      {item.meta}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="container">
            <div className="exhibition__portfolio-cta">
              <Link
                href={portfolio.cta.href}
                className="exhibition__portfolio-button"
              >
                {portfolio.cta.label}
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {faq ? (
        <section className="exhibition__faq">
          <div className="exhibition__faq-split">
            <div className="exhibition__faq-content">
              <div className="exhibition__faq-inner">
                <h2 className="exhibition__faq-headline">{faq.headline}</h2>

                <div className="exhibition__faq-list">
                  {faq.items.map((item) => (
                    <details
                      key={item.question}
                      className="exhibition__faq-item"
                    >
                      <summary className="exhibition__faq-question">
                        <span>{item.question}</span>
                        <svg
                          className="exhibition__faq-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </summary>
                      <div className="exhibition__faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <div className="exhibition__faq-image">
              <Image
                src={faq.image.src}
                alt={faq.image.alt}
                fill
                sizes="100vw"
              />
            </div>
          </div>
        </section>
      ) : null}

      {finalCta ? (
        <FinalCta
          headline={finalCta.headline}
          subheadline={finalCta.subheadline}
          primaryCta={finalCta.primaryCta}
          secondaryCta={finalCta.secondaryCta}
          image={finalCta.image}
        />
      ) : null}
    </>
  );
}
