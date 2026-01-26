"use client";

import { useMemo, useState, type ChangeEvent } from "react";
import Link from "next/link";

const BASE_SQM = 18;
const MIN_SQM = 18;
const MAX_SQM = 500;

const packages = [
  {
    id: "basic",
    name: "Basic",
    basePrice: 21900,
    tagline: "Single stand with open discussion area and core branding.",
    inclusions: [
      "Single stand configuration with 1-3 open sides",
      "Open discussion meeting area",
      "Pantry + storage room included",
      "Reception counter (1) and work station (1)",
      "TV up to 54 in and standard AV",
      "No hanging structure, no internet",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    basePrice: 25800,
    tagline: "Flexible layout with lounge, private meeting, and LED options.",
    inclusions: [
      "Open, semi-closed, and private meeting zones",
      "Waiting / seating lounge included",
      "2-4 reception counters and work stations",
      "LED screen up to 3 sqm + TV up to 85 in",
      "Hanging structure included",
      "Wi-Fi connection included",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    basePrice: 31500,
    tagline: "High-impact build with premium finishes and full connectivity.",
    inclusions: [
      "Single or double deck configurations",
      "Reception counters and work stations per brief",
      "LED screen up to 6 sqm + max-size TV",
      "Premium top branding (wood/acrylic/steel)",
      "Hanging structure included",
      "LAN + Wi-Fi connection included",
    ],
  },
] as const;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function ExhibitionPricingCalculator() {
  const [selectedPackageId, setSelectedPackageId] = useState("standard");
  const [sqm, setSqm] = useState(36);

  const selectedPackage = useMemo(
    () => packages.find((pkg) => pkg.id === selectedPackageId) ?? packages[1],
    [selectedPackageId],
  );

  const pricePerSqm = selectedPackage.basePrice / BASE_SQM;
  const estimate = Math.round(pricePerSqm * sqm);

  const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSqm(clamp(Number(event.target.value), MIN_SQM, MAX_SQM));
  };

  return (
    <section className="pricing-calculator">
      <div className="container">
        <div className="pricing-calculator__hero">
          <span className="pricing-calculator__eyebrow">Exhibitions</span>
          <h1 className="pricing-calculator__headline">
            Exhibition Stand Cost Estimator
          </h1>
          <p className="pricing-calculator__subcopy">
            Select a package and stand size to get an instant, ballpark estimate.
            Final pricing varies with venue regulations, finishes, and custom scope.
          </p>
          <Link
            href="/exhibitions"
            className="pricing-calculator__link pricing-calculator__link--ghost pricing-calculator__link--top"
          >
            Back to Exhibitions
          </Link>
        </div>

        <div className="pricing-calculator__panel">
          <div className="pricing-calculator__left">
            <div className="pricing-calculator__shell">
              <div className="pricing-calculator__controls">
                <div
                  className="pricing-calculator__packages"
                  role="radiogroup"
                  aria-label="Choose a package"
                >
                  {packages.map((pkg) => {
                    const isActive = pkg.id === selectedPackageId;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        role="radio"
                        aria-checked={isActive}
                        className={`pricing-calculator__package${
                          isActive ? " pricing-calculator__package--active" : ""
                        }`}
                        onClick={() => setSelectedPackageId(pkg.id)}
                      >
                        <span className="pricing-calculator__package-title">
                          {pkg.name}
                        </span>
                        <span className="pricing-calculator__package-price">
                          {formatCurrency(pkg.basePrice)}
                          <span className="pricing-calculator__package-meta">
                            / {BASE_SQM} sqm
                          </span>
                        </span>
                        <span className="pricing-calculator__package-tagline">
                          {pkg.tagline}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="pricing-calculator__slider">
                  <div className="pricing-calculator__slider-header">
                    <label
                      className="pricing-calculator__label"
                      htmlFor="stand-size"
                    >
                      Stand size (sqm)
                    </label>
                    <span className="pricing-calculator__value">{sqm} sqm</span>
                  </div>
                  <input
                    id="stand-size"
                    type="range"
                    min={MIN_SQM}
                    max={MAX_SQM}
                    value={sqm}
                    onChange={handleRangeChange}
                    className="pricing-calculator__range"
                  />
                  <p className="pricing-calculator__slider-help">
                    Drag the slider to adjust your stand size.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="pricing-calculator__estimate">
            <div className="pricing-calculator__estimate-card">
              <span className="pricing-calculator__estimate-label">
                Estimated investment
              </span>
              <span className="pricing-calculator__estimate-value">
                {formatCurrency(estimate)}
              </span>
              <div className="pricing-calculator__estimate-details">
                <span>
                  {selectedPackage.name} package - {sqm} sqm
                </span>
                <span>
                  Base rate: {formatCurrency(Math.round(pricePerSqm))} per sqm
                </span>
                <span>
                  Base price: {formatCurrency(selectedPackage.basePrice)} at {BASE_SQM} sqm
                </span>
              </div>
              <div className="pricing-calculator__estimate-includes">
                <span className="pricing-calculator__estimate-includes-title">
                  Package includes
                </span>
                <ul className="pricing-calculator__estimate-includes-list">
                  {selectedPackage.inclusions.map((item) => (
                    <li
                      key={item}
                      className="pricing-calculator__estimate-includes-item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://homeservice-neon.vercel.app/kairo-form"
                className="pricing-calculator__estimate-button"
                target="_blank"
                rel="noreferrer"
              >
                Get a Full Audit & BOQ
              </a>
            </div>

            <div className="pricing-calculator__note">
              Final pricing varies based on exhibition regulations, venue
              requirements, custom finishes, and material availability.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
