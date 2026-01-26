import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { exhibitionsContent } from "components/sections/ExhibitionsPageContent";
import { officeFitoutContent } from "components/sections/OfficeFitoutPageContent";
import { homeInteriorsContent } from "components/sections/HomeInteriorsPageContent";
import FinalCta from "components/sections/FinalCta";

type PortfolioItem = {
  image: {
    src: string;
    alt: string;
  };
  meta: string;
};

type PortfolioSectionData = {
  id: string;
  headline: string;
  rows: PortfolioItem[][];
  cta?: {
    href: string;
    label: string;
  };
};

export const metadata: Metadata = {
  title: "Portfolio",
};

const portfolioSections: PortfolioSectionData[] = [
  {
    id: "exhibitions",
    headline:
      exhibitionsContent.portfolio?.headline ?? "Selected Exhibition Projects",
    rows: exhibitionsContent.portfolio?.rows ?? [],
    cta: {
      href: "/exhibitions",
      label: "Explore Exhibition Services",
    },
  },
  {
    id: "commercial",
    headline:
      officeFitoutContent.portfolio?.headline ??
      "Selected Office & Commercial Projects",
    rows: officeFitoutContent.portfolio?.rows ?? [],
    cta: {
      href: "/office-fitout",
      label: "Explore Office Services",
    },
  },
  {
    id: "residential",
    headline:
      homeInteriorsContent.portfolio?.headline ?? "Selected Residential Projects",
    rows: homeInteriorsContent.portfolio?.rows ?? [],
    cta: {
      href: "/home-interiors",
      label: "Explore Home Services",
    },
  },
];

function PortfolioSection({ id, headline, rows, cta }: PortfolioSectionData) {
  if (!rows.length) {
    return null;
  }

  return (
    <section className="exhibition__portfolio" id={id}>
      <div className="container">
        <h2 className="exhibition__portfolio-headline">{headline}</h2>
      </div>

      <div className="exhibition__portfolio-grid">
        {rows.map((row, rowIndex) => (
          <div
            key={`${id}-row-${rowIndex + 1}`}
            className={`exhibition__portfolio-row exhibition__portfolio-row--${
              rowIndex + 1
            }`}
          >
            {row.map((item, itemIndex) => (
              <div
                key={`${id}-${rowIndex}-${itemIndex}`}
                className="exhibition__portfolio-item"
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="100vw"
                />
                <span className="exhibition__portfolio-meta">{item.meta}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {cta ? (
        <div className="container">
          <div className="exhibition__portfolio-cta">
            <Link href={cta.href} className="exhibition__portfolio-button">
              {cta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <main>
      {portfolioSections.map((section) => (
        <PortfolioSection key={section.id} {...section} />
      ))}
      <FinalCta />
    </main>
  );
}
