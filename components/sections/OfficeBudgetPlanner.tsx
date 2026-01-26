"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";

const quickSizes = [60, 100, 180, 250, 400];

const conditionOptions = [
  {
    id: "shell-core",
    title: "Shell & Core (Empty Space)",
    description:
      "A bare unit requiring full fit-out including ceilings, partitions, MEP, and finishes.",
  },
  {
    id: "renovation",
    title: "Existing Office - Renovation",
    description:
      "An already fitted office that will be upgraded, reconfigured, or refurbished.",
  },
] as const;

const positioningOptions = [
  {
    id: "functional",
    title: "Functional & Cost-Controlled",
    description: "Practical finishes, efficient layout, focus on usability.",
  },
  {
    id: "professional",
    title: "Professional & Client-Ready (Most Common)",
    description: "Modern design, balanced comfort, suitable for staff and visitors.",
  },
  {
    id: "premium",
    title: "Premium & Brand-Led",
    description:
      "Design-driven space with strong visual identity and executive presence.",
  },
] as const;

const usageOptions = [
  {
    id: "open",
    title: "Mostly open workspace",
    description: "Lower partitioning and streamlined coordination.",
  },
  {
    id: "balanced",
    title: "Balanced mix of open areas & meeting rooms",
    description: "Typical mix for flexible teams and client-facing spaces.",
  },
  {
    id: "partitioned",
    title: "Highly partitioned with many enclosed offices",
    description: "More rooms, walls, doors, and technical coordination.",
  },
] as const;

const systemsOptions = [
  {
    id: "minimal",
    title: "Minimal Changes",
    description: "Existing systems mostly reused with basic upgrades.",
  },
  {
    id: "moderate",
    title: "Moderate Upgrades",
    description: "Improved comfort, efficiency, and modern standards.",
  },
  {
    id: "full",
    title: "Full System Redesign",
    description:
      "Major upgrades or new systems for performance, design, and future growth.",
  },
] as const;

const constraintOptions = [
  {
    id: "flexible",
    title: "Flexible timeline",
    description: "Adjustable schedule with breathing room for planning.",
  },
  {
    id: "fixed",
    title: "Fixed move-in deadline",
    description: "Committed date that drives sequencing and resources.",
  },
  {
    id: "occupied",
    title: "Work required while office is occupied",
    description: "Phased delivery and operational coordination required.",
  },
] as const;

type ConstraintId = (typeof constraintOptions)[number]["id"];

type StepMeta = {
  title: string;
  description?: string;
  microcopy?: string;
  cta?: string;
};

const stepMeta: StepMeta[] = [
  {
    title: "Approximate Office Size",
    description:
      "Use your best estimate. This is used for early budget planning and refined later.",
    microcopy:
      "Layout, systems, and condition often affect cost more than size alone.",
    cta: "Continue",
  },
  {
    title: "Current Condition of the Space",
    description:
      "The starting condition of your space has a major impact on scope, coordination, and budget.",
    microcopy:
      "Renovations may involve removal works and unknown conditions that affect final scope.",
    cta: "Continue",
  },
  {
    title: "How Should Your Office Represent Your Business?",
    description:
      "Choose the level that best reflects how you want your space to function and be perceived.",
    cta: "Continue",
  },
  {
    title: "How Is the Space Mainly Used?",
    description:
      "Workspace layout affects construction complexity and coordination.",
    microcopy:
      "More enclosed spaces usually require additional walls, doors, and coordination.",
    cta: "Continue",
  },
  {
    title: "Comfort & Building Systems Level",
    description:
      "This includes air-conditioning, lighting, power, data, ceilings, and overall performance.",
    cta: "Continue",
  },
  {
    title: "Timeline & Constraints",
    description:
      "Project constraints affect planning, sequencing, and cost.",
    microcopy:
      "Tighter timelines and occupied sites usually increase coordination and resources.",
    cta: "See Budget Range ->",
  },
  {
    title: "Estimated Renovation Budget Range",
    description: "This planner provides a budget range, not a final quote.",
    cta: "Refine Budget Plan ->",
  },
  {
    title: "Refine Your Budget Plan",
    description: "Share your details and we will validate your estimate.",
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);

const roundToHundred = (value: number) => Math.round(value / 100) * 100;

export default function OfficeBudgetPlanner() {
  const [stepIndex, setStepIndex] = useState(0);
  const [sizeInput, setSizeInput] = useState("180");
  const [conditionId, setConditionId] = useState<
    (typeof conditionOptions)[number]["id"]
  >(conditionOptions[0].id);
  const [positioningId, setPositioningId] = useState<
    (typeof positioningOptions)[number]["id"]
  >(positioningOptions[1].id);
  const [usageId, setUsageId] = useState<(typeof usageOptions)[number]["id"]>(
    usageOptions[1].id,
  );
  const [systemsId, setSystemsId] = useState<
    (typeof systemsOptions)[number]["id"]
  >(systemsOptions[1].id);
  const [constraints, setConstraints] = useState<ConstraintId[]>(["fixed"]);
  const [lead, setLead] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const sizeValue = Number(sizeInput);
  const effectiveSize = Number.isFinite(sizeValue) && sizeValue > 0 ? sizeValue : 180;

  const selectedCondition = conditionOptions.find(
    (option) => option.id === conditionId,
  );
  const selectedPositioning = positioningOptions.find(
    (option) => option.id === positioningId,
  );
  const selectedUsage = usageOptions.find((option) => option.id === usageId);
  const selectedSystems = systemsOptions.find((option) => option.id === systemsId);

  const constraintLabels = constraints.length
    ? constraints
        .map(
          (id) => constraintOptions.find((option) => option.id === id)?.title,
        )
        .filter(Boolean)
    : ["Flexible timeline"];

  const estimate = useMemo(() => {
    const baseRates = {
      functional: 1500,
      professional: 2200,
      premium: 3200,
    } as const;

    const conditionFactor = conditionId === "shell-core" ? 1.1 : 1.0;
    const usageFactor = usageId === "open" ? 0.95 : usageId === "balanced" ? 1 : 1.15;
    const systemsFactor =
      systemsId === "minimal" ? 0.9 : systemsId === "moderate" ? 1 : 1.25;

    const timelineFactor = constraints.reduce((acc, id) => {
      if (id === "fixed") {
        return acc * 1.08;
      }
      if (id === "occupied") {
        return acc * 1.12;
      }
      return acc;
    }, 1);

    const baseRate = baseRates[positioningId as keyof typeof baseRates];
    const total =
      baseRate * effectiveSize * conditionFactor * usageFactor * systemsFactor * timelineFactor;

    const min = roundToHundred(total * 0.9);
    const max = roundToHundred(total * 1.1);

    return {
      min,
      max,
    };
  }, [conditionId, constraints, effectiveSize, positioningId, systemsId, usageId]);

  const progress = ((stepIndex + 1) / stepMeta.length) * 100;
  const step = stepMeta[stepIndex];

  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSizeInput(event.target.value);
  };

  const handleToggleConstraint = (id: ConstraintId) => {
    setConstraints((prev) => {
      const isActive = prev.includes(id);
      let next: ConstraintId[] = isActive
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      if (id === "flexible" && !isActive) {
        next = ["flexible"];
      } else if (id !== "flexible" && !isActive) {
        next = next.filter((item) => item !== "flexible");
      }
      return next;
    });
  };

  const handleNext = () => {
    setStepIndex((prev) => Math.min(prev + 1, stepMeta.length - 1));
  };

  const handleBack = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="office-planner">
      <div className="container">
        <div className="office-planner__hero">
          <span className="office-planner__eyebrow">Office Fit-Out</span>
          <h1 className="office-planner__headline">Office Renovation Budget Planner</h1>
          <p className="office-planner__subcopy">
            Plan a realistic renovation budget based on your space condition, business
            needs, and expectations.
          </p>
          <p className="office-planner__note">
            This planner provides a budget range, not a final quote. It helps teams align
            expectations early and avoid under-budgeting or surprises later.
          </p>
          <div className="office-planner__actions">
            <a href="#planner" className="office-planner__button office-planner__button--solid">
              Start Budget Planning
            </a>
            <Link
              href="/office-fitout"
              className="office-planner__button office-planner__button--ghost"
            >
              Back to Office Fit-Out
            </Link>
          </div>
        </div>

        <div className="office-planner__panel" id="planner">
          <div className="office-planner__flow">
            <div className="office-planner__step-card">
              <div className="office-planner__step-header">
                <span className="office-planner__step-count">
                  Step {stepIndex + 1} of {stepMeta.length}
                </span>
                <div className="office-planner__progress">
                  <span
                    className="office-planner__progress-bar"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <h2 className="office-planner__step-title">{step.title}</h2>
              {step.description ? (
                <p className="office-planner__step-subcopy">{step.description}</p>
              ) : null}

              <div className="office-planner__step-body">
                {stepIndex === 0 ? (
                  <div className="office-planner__input-group">
                    <label className="office-planner__label" htmlFor="office-size">
                      Approx. size in sqm
                    </label>
                    <div className="office-planner__input-row">
                      <input
                        id="office-size"
                        type="number"
                        min={20}
                        max={10000}
                        value={sizeInput}
                        onChange={handleSizeChange}
                        className="office-planner__input"
                        placeholder="e.g. 180"
                      />
                      <span className="office-planner__input-suffix">sqm</span>
                    </div>
                    <div className="office-planner__quick-options">
                      {quickSizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          className={`office-planner__chip${
                            sizeInput === String(size)
                              ? " office-planner__chip--active"
                              : ""
                          }`}
                          onClick={() => setSizeInput(String(size))}
                        >
                          {size} sqm
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {stepIndex === 1 ? (
                  <div
                    className="office-planner__option-grid"
                    role="radiogroup"
                    aria-label="Current condition"
                  >
                    {conditionOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        role="radio"
                        aria-checked={conditionId === option.id}
                        className={`office-planner__option${
                          conditionId === option.id ? " office-planner__option--active" : ""
                        }`}
                        onClick={() => setConditionId(option.id)}
                      >
                        <span className="office-planner__option-title">
                          {option.title}
                        </span>
                        <span className="office-planner__option-desc">
                          {option.description}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : null}

                {stepIndex === 2 ? (
                  <div
                    className="office-planner__option-grid"
                    role="radiogroup"
                    aria-label="Business positioning"
                  >
                    {positioningOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        role="radio"
                        aria-checked={positioningId === option.id}
                        className={`office-planner__option${
                          positioningId === option.id ? " office-planner__option--active" : ""
                        }`}
                        onClick={() => setPositioningId(option.id)}
                      >
                        <span className="office-planner__option-title">
                          {option.title}
                        </span>
                        <span className="office-planner__option-desc">
                          {option.description}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : null}

                {stepIndex === 3 ? (
                  <div
                    className="office-planner__option-grid"
                    role="radiogroup"
                    aria-label="Space usage profile"
                  >
                    {usageOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        role="radio"
                        aria-checked={usageId === option.id}
                        className={`office-planner__option${
                          usageId === option.id ? " office-planner__option--active" : ""
                        }`}
                        onClick={() => setUsageId(option.id)}
                      >
                        <span className="office-planner__option-title">
                          {option.title}
                        </span>
                        <span className="office-planner__option-desc">
                          {option.description}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : null}

                {stepIndex === 4 ? (
                  <div
                    className="office-planner__option-grid"
                    role="radiogroup"
                    aria-label="Systems level"
                  >
                    {systemsOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        role="radio"
                        aria-checked={systemsId === option.id}
                        className={`office-planner__option${
                          systemsId === option.id ? " office-planner__option--active" : ""
                        }`}
                        onClick={() => setSystemsId(option.id)}
                      >
                        <span className="office-planner__option-title">
                          {option.title}
                        </span>
                        <span className="office-planner__option-desc">
                          {option.description}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : null}

                {stepIndex === 5 ? (
                  <div className="office-planner__option-grid" role="group">
                    {constraintOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        aria-pressed={constraints.includes(option.id)}
                        className={`office-planner__option${
                          constraints.includes(option.id) ? " office-planner__option--active" : ""
                        }`}
                        onClick={() => handleToggleConstraint(option.id)}
                      >
                        <span className="office-planner__option-title">
                          {option.title}
                        </span>
                        <span className="office-planner__option-desc">
                          {option.description}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : null}

                {stepIndex === 6 ? (
                  <div className="office-planner__estimate">
                    <div className="office-planner__estimate-card">
                      <span className="office-planner__estimate-label">
                        Estimated renovation budget range
                      </span>
                      <span className="office-planner__estimate-value">
                        {formatCurrency(estimate.min)} - {formatCurrency(estimate.max)}
                      </span>
                      <div className="office-planner__estimate-details">
                        <span>
                          Approx. {effectiveSize} sqm office
                        </span>
                        <span>{selectedCondition?.title}</span>
                        <span>{selectedPositioning?.title}</span>
                        <span>{selectedUsage?.title}</span>
                        <span>{selectedSystems?.title}</span>
                        <span>{constraintLabels.join(" / ")}</span>
                      </div>
                      <div className="office-planner__estimate-includes">
                        <span className="office-planner__estimate-includes-title">
                          What this typically includes
                        </span>
                        <ul className="office-planner__estimate-includes-list">
                          <li className="office-planner__estimate-includes-item">
                            Design & fit-out works
                          </li>
                          <li className="office-planner__estimate-includes-item">
                            MEP coordination allowance
                          </li>
                          <li className="office-planner__estimate-includes-item">
                            Project management
                          </li>
                          <li className="office-planner__estimate-includes-item">
                            Typical authority requirements
                          </li>
                        </ul>
                      </div>
                      <Link href="/contact" className="office-planner__estimate-button">
                        Get Exact Cost + Free Space Review
                      </Link>
                    </div>
                    <p className="office-planner__expectation">
                      Final budgets are refined after layout planning, authority review,
                      and site assessment - typically improving accuracy to +/- 5-10%.
                    </p>
                  </div>
                ) : null}

                {stepIndex === 7 ? (
                  <form className="office-planner__form" onSubmit={handleLeadSubmit}>
                    <div className="office-planner__form-grid">
                      <label className="office-planner__field">
                        <span>Name</span>
                        <input
                          type="text"
                          value={lead.name}
                          onChange={(event) =>
                            setLead((prev) => ({ ...prev, name: event.target.value }))
                          }
                        />
                      </label>
                      <label className="office-planner__field">
                        <span>Company</span>
                        <input
                          type="text"
                          value={lead.company}
                          onChange={(event) =>
                            setLead((prev) => ({ ...prev, company: event.target.value }))
                          }
                        />
                      </label>
                      <label className="office-planner__field">
                        <span>Email</span>
                        <input
                          type="email"
                          value={lead.email}
                          onChange={(event) =>
                            setLead((prev) => ({ ...prev, email: event.target.value }))
                          }
                        />
                      </label>
                      <label className="office-planner__field">
                        <span>Phone</span>
                        <input
                          type="tel"
                          value={lead.phone}
                          onChange={(event) =>
                            setLead((prev) => ({ ...prev, phone: event.target.value }))
                          }
                        />
                      </label>
                    </div>
                    <button type="submit" className="office-planner__submit">
                      Book Planning Call
                    </button>
                  </form>
                ) : null}
              </div>

              {step.microcopy ? (
                <p className="office-planner__microcopy">{step.microcopy}</p>
              ) : null}
            </div>

            <div className="office-planner__nav">
              <button
                type="button"
                className="office-planner__nav-button office-planner__nav-button--ghost"
                onClick={handleBack}
                disabled={stepIndex === 0}
              >
                Back
              </button>
              {stepIndex < stepMeta.length - 1 ? (
                <button
                  type="button"
                  className="office-planner__nav-button office-planner__nav-button--solid"
                  onClick={handleNext}
                >
                  {step.cta ?? "Continue"}
                </button>
              ) : null}
            </div>
          </div>

          <aside className="office-planner__summary">
            <div className="office-planner__summary-card">
              <span className="office-planner__summary-title">
                Summary of your input
              </span>
              <div className="office-planner__summary-list">
                <div>
                  <span>Approx. size</span>
                  <strong>{effectiveSize} sqm</strong>
                </div>
                <div>
                  <span>Condition</span>
                  <strong>{selectedCondition?.title}</strong>
                </div>
                <div>
                  <span>Positioning</span>
                  <strong>{selectedPositioning?.title}</strong>
                </div>
                <div>
                  <span>Usage</span>
                  <strong>{selectedUsage?.title}</strong>
                </div>
                <div>
                  <span>Systems</span>
                  <strong>{selectedSystems?.title}</strong>
                </div>
                <div>
                  <span>Constraints</span>
                  <strong>{constraintLabels.join(", ")}</strong>
                </div>
              </div>
            </div>

            <div className="office-planner__summary-estimate">
              <span>Estimated range</span>
              <strong>
                {formatCurrency(estimate.min)} - {formatCurrency(estimate.max)}
              </strong>
            </div>

            <p className="office-planner__summary-note">
              Budget ranges update as you refine inputs. Final scopes are confirmed after
              site assessment and technical review.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
