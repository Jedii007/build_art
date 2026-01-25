import type { Metadata } from "next";
import AboutAnimations from "components/animations/AboutAnimations";
import AboutDefines from "components/sections/AboutDefines";
import AboutHero from "components/sections/AboutHero";
import AboutPhilosophy from "components/sections/AboutPhilosophy";
import AboutStory from "components/sections/AboutStory";
import AboutTechnical from "components/sections/AboutTechnical";
import AboutTrust from "components/sections/AboutTrust";
import FinalCta from "components/sections/FinalCta";
import Process from "components/sections/Process";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutDefines />
      <AboutTechnical />
      <Process />
      <AboutTrust />
      <AboutPhilosophy />
      <FinalCta />
      <AboutAnimations />
    </main>
  );
}
