import ServicePageContent, {
  type ServicePageContentProps,
} from "components/sections/ServicePageContent";

const homeProcessImages = [
  "/assets/images/image1.png",
  "/assets/images/home/image2.png",
  "/assets/images/image3.png",
  "/assets/images/image4.png",
  "/assets/images/image5.png",
];

const homePortfolioImages = [
  ["/assets/images/image8.png", "/assets/images/image9.png"],
  ["/assets/images/image10.png", "/assets/images/image11.png"],
];

const homeInteriorsContent: ServicePageContentProps = {
  hero: {
    headline: "Home Fit-Out & Residential Interior Services in the UAE",
    description:
      "We design and deliver bespoke residential interiors that balance aesthetics, comfort, and functionality - thoughtfully planned, technically sound, and executed with care from start to finish. From layout and finishes to lighting and electrical integration, we manage the entire process so your home feels considered, calm, and complete.",
    image: {
      src: "/assets/images/image35.png",
      alt: "Home Fit-Out & Residential Interiors",
    },
    primaryCta: {
      href: "/contact",
      label: "Plan a Home Fit-Out",
    },
    secondaryCta: {
      href: "/portfolio",
      label: "View Residential Projects",
    },
    trustLine:
      "Trusted residential design and build partner across Dubai and Abu Dhabi. Villas - Apartments - Townhouses - Private Residences",
  },
  serviceIntro: {
    headline: "Homes Designed for Real Living",
    description:
      "BuildArt Global provides home fit-out and residential interior services for clients who want more than decoration - they want spaces that feel right to live in.",
    image: {
      src: "/assets/images/image36.avif",
      alt: "BuildArt Global Residential Interiors",
    },
    imageDescription:
      "Our role is to translate your vision into a home that feels functional, refined, and enduring - without unnecessary complexity or stress.",
    descriptionHeadline:
      "We approach residential projects with the understanding that a home is:",
    descriptionItems: [
      { number: "01", label: "Personal" },
      { number: "02", label: "Emotional" },
      { number: "03", label: "Long-term" },
      { number: "04", label: "Detail-driven" },
    ],
  },
  who: {
    headline: "Who This Service Is For",
    image: {
      src: "/assets/images/image30.png",
      alt: "Residential Interior Services",
    },
    intro: "This service is ideal for:",
    items: [
      "Homeowners renovating or upgrading their residence",
      "Clients fitting out new villas or apartments",
      "Families seeking better flow, comfort, and lighting",
      "Property owners who value quality, craftsmanship, and clarity",
      "If you want a home that feels thoughtfully designed and professionally executed, this service is built for you",
    ],
  },
  scope: {
    headline: "Our Residential Fit-Out Scope",
    image: {
      src: "/assets/images/image31.png",
      alt: "Residential Fit-Out Scope",
    },
    imageText:
      "Design - Build - Electrical - Lighting. We provide a fully integrated home fit-out solution, including:",
    contentImage: {
      src: "/assets/images/home/image32.png",
      alt: "Residential Fit-Out Scope",
    },
    listHeadline: "Our residential services include:",
    items: [
      {
        letter: "A",
        text: "Space planning and layout refinement",
      },
      {
        letter: "B",
        text: "Interior design and material selection",
      },
      {
        letter: "C",
        text: "Joinery, cabinetry, and custom elements",
      },
      {
        letter: "D",
        text: "Flooring, ceilings, wall finishes, and detailing",
      },
      {
        letter: "E",
        text: "Electrical planning and installation",
      },
      {
        letter: "F",
        text: "Lighting design (ambient, task, accent)",
      },
      {
        letter: "G",
        text: "Power, switches, and smart-ready coordination",
      },
      {
        letter: "H",
        text: "Bathroom and kitchen fit-out coordination",
      },
      {
        letter: "I",
        text: "Project management and quality control",
      },
    ],
    closingText:
      "By managing both design and technical execution, we ensure your home is not only beautiful, but comfortable and reliable in everyday use.",
  },
  types: undefined,
  technical: {
    headline: "Lighting & Electrical Integration",
    description:
      "Designed to feel right - day and night. Lighting and electrical planning play a major role in how a home feels.",
    intro: "We integrate these elements early to ensure:",
    items: [
      "Lighting supports mood, comfort, and daily routines",
      "Power points are placed logically and discreetly",
      "Electrical systems are safe, compliant, and future-ready",
      "Spaces feel warm, balanced, and easy to live in",
    ],
    image: {
      src: "/assets/images/home/image34.png",
      alt: "Residential Lighting & Electrical",
    },
    closingText:
      "This attention to technical detail allows the design to perform quietly in the background - exactly as it should in a home.",
  },
  process: {
    headline: "A Calm, Structured Process",
    steps: [
      {
        number: "01",
        title: "Understanding Your Home & Lifestyle",
        description:
          "We start by understanding how you live, use your space, and what you want to improve.",
        image: {
          src: homeProcessImages[0],
          alt: "Understanding Your Home & Lifestyle",
        },
      },
      {
        number: "02",
        title: "Design & Selection",
        description:
          "Layouts, finishes, and lighting concepts developed around your taste, budget, and comfort.",
        image: {
          src: homeProcessImages[1],
          alt: "Design & Selection",
        },
      },
      {
        number: "03",
        title: "Technical Planning",
        description:
          "Electrical layouts, lighting plans, and coordination handled early to avoid changes later.",
        image: {
          src: homeProcessImages[2],
          alt: "Technical Planning",
        },
      },
      {
        number: "04",
        title: "Build & Fit-Out",
        description:
          "Carefully managed execution with attention to detail and respect for your space.",
        image: {
          src: homeProcessImages[3],
          alt: "Build & Fit-Out",
        },
      },
      {
        number: "05",
        title: "Completion & Handover",
        description:
          "Your home is delivered finished, clean, tested, and ready to enjoy.",
        image: {
          src: homeProcessImages[4],
          alt: "Completion & Handover",
        },
      },
    ],
  },
  why: {
    headline: "Why Homeowners Choose BuildArt Global",
    image: {
      src: "/assets/images/image6.png",
      alt: "Residential Interiors",
    },
    caption: "Attention to detail. Respect for your space.",
    subheadline: "Attention to Detail. Respect for Your Space.",
    intro: "Homeowners choose BuildArt Global because we:",
    items: [
      {
        number: "01",
        text: "Take the time to understand personal needs",
      },
      {
        number: "02",
        text: "Balance aesthetics with everyday practicality",
      },
      {
        number: "03",
        text: "Plan lighting and electrical systems thoughtfully",
      },
      {
        number: "04",
        text: "Communicate clearly throughout the project",
      },
      {
        number: "05",
        text: "Deliver with care, discipline, and accountability",
      },
    ],
    closingText:
      "We don't rush decisions. We don't compromise on quality. We focus on long-term comfort.",
  },
  experience: {
    headline: "Experience & Approach",
    intro:
      "Our experience across complex build environments informs how we approach residential work.",
    subheadline: "That means:",
    items: [
      {
        number: "01",
        text: "Better planning",
      },
      {
        number: "02",
        text: "Cleaner execution",
      },
      {
        number: "03",
        text: "Fewer surprises",
      },
      {
        number: "04",
        text: "Higher finishing standards",
      },
    ],
    closingText:
      "Even though a home project is personal, it deserves the same level of structure and professionalism as any major build.",
    image: {
      src: "/assets/images/image7.png",
      alt: "Residential Experience",
    },
    caption: "The same discipline as major builds, applied to homes.",
  },
  portfolio: {
    headline: "Selected Residential Projects",
    rows: homePortfolioImages.map((row) =>
      row.map((src) => ({
        image: {
          src,
          alt: "Residential Project",
        },
        meta: "Property type - Size - Location",
      }))
    ),
    cta: {
      href: "/portfolio",
      label: "View Residential Portfolio",
    },
  },
  faq: {
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "Can you work with occupied homes?",
        answer:
          "Yes. We plan works carefully to minimize disruption where required.",
      },
      {
        question: "Do you handle electrical and lighting work?",
        answer:
          "Yes. Electrical planning, lighting, and installation are part of our service.",
      },
      {
        question: "Can you help with design choices?",
        answer:
          "Yes. We guide material, finish, and layout decisions throughout the process.",
      },
      {
        question: "Do you manage the full project?",
        answer: "Yes. We handle the project from planning to completion.",
      },
    ],
    image: {
      src: "/assets/images/image12.png",
      alt: "Residential Interior Design",
    },
  },
  finalCta: {
    headline: "Planning a Home Fit-Out in the UAE?",
    subheadline:
      "Tell us about your home, your goals, and your timeline. We'll guide you through the next steps with clarity and care.",
    primaryCta: {
      href: "/contact",
      label: "Plan a Home Fit-Out",
    },
    secondaryCta: {
      href: "/contact",
      label: "Contact Our Residential Team",
    },
    image: {
      src: "/assets/images/image13.png",
      alt: "BuildArt Global Project",
    },
  },
};

export default function HomeInteriorsPageContent() {
  return <ServicePageContent {...homeInteriorsContent} />;
}
