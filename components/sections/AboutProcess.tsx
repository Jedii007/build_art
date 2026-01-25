import Process from "components/sections/Process";

const steps = [
  {
    title: "Discovery & Alignment",
    description:
      "We understand your objectives, constraints, timelines, and technical requirements.",
    image: {
      src: "/assets/images/home/image22.png",
      alt: "Discovery & Alignment",
    },
  },
  {
    title: "Design & Planning",
    description:
      "Concepts, layouts, and visualizations developed with technical feasibility in mind.",
    image: {
      src: "/assets/images/image26.png",
      alt: "Design & Planning",
    },
  },
  {
    title: "Technical Coordination & Approvals",
    description: "Electrical layouts, drawings, submissions, and compliance handled early.",
    image: {
      src: "/assets/images/image27.png",
      alt: "Technical Coordination",
    },
  },
  {
    title: "Build & Execution",
    description:
      "Production, installation, and quality control managed by experienced teams.",
    image: {
      src: "/assets/images/image29.png",
      alt: "Build & Execution",
    },
  },
  {
    title: "Delivery & Handover",
    description: "Projects delivered complete, tested, and ready for use.",
    image: {
      src: "/assets/images/image30.png",
      alt: "Delivery & Handover",
    },
  },
];

export default function AboutProcess() {
  return (
    <Process
      headline="A Structured Process. No Surprises."
      steps={steps}
      baseClassName="about-process"
      cta={{ href: "/contact", label: "Start Your Project →" }}
    />
  );
}
