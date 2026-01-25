import ServicePageContent, {
  type ServicePageContentProps,
} from "components/sections/ServicePageContent";

const officeProcessImages = [
  "/assets/images/image21.png",
  "/assets/images/home/image22.png",
  "/assets/images/image23.avif",
  "/assets/images/image24.avif",
  "/assets/images/image26.png",
];

const officePortfolioImages = [
  ["/assets/images/image29.png", "/assets/images/image30.png"],
  ["/assets/images/image31.png", "/assets/images/home/image32.png"],
];

const officeFitoutContent: ServicePageContentProps = {
  hero: {
    headline: "Office Renovation & Commercial Fit-Out Services in the UAE",
    description:
      "We design and deliver functional, brand-aligned office environments that support productivity, collaboration, and long-term business growth - built with technical precision and full turnkey execution. From planning and approvals to electrical systems, lighting, and delivery, we manage the entire process so your business keeps moving forward with minimal disruption.",
    image: {
      src: "/assets/images/home/office-1.png",
      alt: "Office Renovation & Commercial Fit-Out",
    },
    primaryCta: {
      href: "/contact",
      label: "Plan an Office Renovation",
    },
    secondaryCta: {
      href: "/portfolio",
      label: "View Commercial Projects",
    },
    trustLine:
      "Trusted partner for commercial renovation projects across Dubai and Abu Dhabi. Offices - Corporate Spaces - Commercial Interiors",
  },
  serviceIntro: {
    headline: "Office Spaces Designed to Work - Not Just Look Good",
    description:
      "BuildArt Global provides office renovation and commercial fit-out services for businesses seeking clarity, structure, and reliability.",
    image: {
      src: "/assets/images/office-2.png",
      alt: "BuildArt Global Office Fit-Out",
    },
    imageDescription:
      "We understand that office projects are not just design exercises - they are operational decisions. Whether you're renovating an existing office or fitting out a new space, our role is to deliver a workplace that works from day one.",
    descriptionHeadline: "Our work balances:",
    descriptionItems: [
      { number: "01", label: "Functionality" },
      { number: "02", label: "Brand identity" },
      { number: "03", label: "Technical performance" },
      { number: "04", label: "Compliance" },
      { number: "05", label: "Timeline discipline" },
    ],
  },
  who: {
    headline: "Who This Service Is For",
    image: {
      src: "/assets/images/home/office-3.png",
      alt: "Commercial Office Fit-Out",
    },
    intro: "This service is ideal for:",
    items: [
      "Companies renovating or relocating offices",
      "Businesses scaling or restructuring teams",
      "Founders and operations leaders upgrading work environments",
      "Organizations that require technical reliability and clear timelines",
      "If your office needs to support people, technology, and daily operations, this service is built for you",
    ],
  },
  scope: {
    headline: "Our Commercial Fit-Out Scope",
    image: {
      src: "/assets/images/image13.png",
      alt: "Commercial Fit-Out Scope",
    },
    imageText:
      "Design - Build - Electrical - Technology. We provide a fully integrated office renovation solution, including:",
    contentImage: {
      src: "/assets/images/home/image15.jpg",
      alt: "Commercial Fit-Out Scope",
    },
    listHeadline: "Our fit-out services include:",
    items: [
      {
        letter: "A",
        text: "Space planning and layout optimization",
      },
      {
        letter: "B",
        text: "Interior design and material selection",
      },
      {
        letter: "C",
        text: "Authority approvals and compliance coordination",
      },
      {
        letter: "D",
        text: "Partitioning, ceilings, flooring, and finishes",
      },
      {
        letter: "E",
        text: "Electrical planning and installation",
      },
      {
        letter: "F",
        text: "Lighting design (task, ambient, architectural)",
      },
      {
        letter: "G",
        text: "Data, power, and workstation coordination",
      },
      {
        letter: "H",
        text: "Audio-visual and meeting room solutions",
      },
      {
        letter: "I",
        text: "Joinery, storage, and custom elements",
      },
      {
        letter: "J",
        text: "Project management and quality control",
      },
    ],
    closingText:
      "By managing design, build, and technical works together, we reduce delays, cost overruns, and coordination issues.",
  },
  types: undefined,
  technical: {
    headline: "Technical & Electrical Integration",
    description:
      "Built for how teams actually work. Modern offices depend on reliable infrastructure.",
    intro: "We integrate technical planning early to ensure:",
    items: [
      "Power and data are correctly distributed",
      "Lighting supports productivity and comfort",
      "Meeting rooms and collaboration spaces function properly",
      "Technology is integrated cleanly and safely",
      "Electrical systems meet UAE regulations",
    ],
    image: {
      src: "/assets/images/home/image20.webp",
      alt: "Office Technical Integration",
    },
    closingText:
      "This approach ensures your office is not only visually refined, but operationally dependable.",
  },
  process: {
    headline: "A Structured Process Designed for Businesses",
    steps: [
      {
        number: "01",
        title: "Discovery & Assessment",
        description:
          "We understand your team size, workflow, operational needs, and timelines.",
        image: {
          src: officeProcessImages[0],
          alt: "Discovery & Assessment",
        },
      },
      {
        number: "02",
        title: "Design & Planning",
        description:
          "Layouts and concepts developed to balance efficiency, comfort, and brand alignment.",
        image: {
          src: officeProcessImages[1],
          alt: "Design & Planning",
        },
      },
      {
        number: "03",
        title: "Technical Coordination & Approvals",
        description:
          "Electrical layouts, lighting plans, and authority submissions handled early.",
        image: {
          src: officeProcessImages[2],
          alt: "Technical Coordination & Approvals",
        },
      },
      {
        number: "04",
        title: "Build & Renovation",
        description:
          "On-site execution managed with safety, quality, and timeline control.",
        image: {
          src: officeProcessImages[3],
          alt: "Build & Renovation",
        },
      },
      {
        number: "05",
        title: "Delivery & Handover",
        description:
          "Your office is delivered complete, tested, and ready for use.",
        image: {
          src: officeProcessImages[4],
          alt: "Delivery & Handover",
        },
      },
    ],
  },
  why: {
    headline: "Why Businesses Choose BuildArt Global",
    image: {
      src: "/assets/images/image27.png",
      alt: "Commercial Fit-Out",
    },
    caption: "Office renovations impact people, productivity, and operations.",
    subheadline: "Reliable Execution for Business-Critical Projects",
    intro: "Clients choose BuildArt Global because we:",
    items: [
      {
        number: "01",
        text: "Understand the realities of working environments",
      },
      {
        number: "02",
        text: "Plan with operations and technology in mind",
      },
      {
        number: "03",
        text: "Communicate clearly and realistically",
      },
      {
        number: "04",
        text: "Take full responsibility from start to finish",
      },
      {
        number: "05",
        text: "Deliver spaces that function as intended",
      },
    ],
    closingText:
      "We don't overdesign. We don't overpromise. We execute with discipline.",
  },
  experience: {
    headline: "Experience & Approach",
    intro:
      "Our experience across high-pressure exhibition environments and complex build projects informs how we approach commercial spaces.",
    subheadline: "That means:",
    items: [
      {
        number: "01",
        text: "Better planning",
      },
      {
        number: "02",
        text: "Stronger coordination",
      },
      {
        number: "03",
        text: "Fewer surprises",
      },
      {
        number: "04",
        text: "Higher execution standards",
      },
    ],
    closingText:
      "The same discipline that delivers exhibitions on fixed deadlines ensures office projects are delivered with control and confidence.",
    image: {
      src: "/assets/images/image28.png",
      alt: "Office Fit-Out Experience",
    },
    caption: "Experience that keeps commercial projects controlled and reliable.",
  },
  portfolio: {
    headline: "Selected Office & Commercial Projects",
    rows: officePortfolioImages.map((row) =>
      row.map((src) => ({
        image: {
          src,
          alt: "Commercial Project",
        },
        meta: "Project type - Size - Industry",
      }))
    ),
    cta: {
      href: "/portfolio",
      label: "View Commercial Portfolio",
    },
  },
  faq: {
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "Can you renovate offices while teams are operational?",
        answer:
          "Yes. We plan phasing and scheduling to minimize disruption where required.",
      },
      {
        question: "Do you handle electrical and technical works?",
        answer:
          "Yes. Electrical planning, lighting, power, and AV coordination are part of our service.",
      },
      {
        question: "Do you manage approvals?",
        answer:
          "Yes. We handle required submissions and compliance coordination.",
      },
      {
        question: "Can you work with tight timelines?",
        answer: "Yes. We structure projects to meet business deadlines.",
      },
    ],
    image: {
      src: "/assets/images/home/image33.png",
      alt: "Commercial Fit-Out",
    },
  },
  finalCta: {
    headline: "Planning an Office Renovation in the UAE?",
    subheadline:
      "Tell us about your space, timeline, and objectives. We'll guide you through the next steps with clarity and accountability.",
    primaryCta: {
      href: "/contact",
      label: "Plan an Office Renovation",
    },
    secondaryCta: {
      href: "/contact",
      label: "Contact Our Commercial Team",
    },
    image: {
      src: "/assets/images/home/image34.png",
      alt: "BuildArt Global Project",
    },
  },
};

export default function OfficeFitoutPageContent() {
  return <ServicePageContent {...officeFitoutContent} />;
}
