import type { Metadata } from "next";
import HomeAnimations from "components/animations/HomeAnimations";
import FinalCta from "components/sections/FinalCta";
import Hero from "components/sections/Hero";
import Intro from "components/sections/Intro";
import Persuasion from "components/sections/Persuasion";
import Process from "components/sections/Process";
import Services from "components/sections/Services";
import SocialProof from "components/sections/SocialProof";
import Trust from "components/sections/Trust";

export const metadata: Metadata = {
  title: "Design & Build Excellence Across the UAE",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Trust />
      <Services />
      <Persuasion />
      <Process />
      <SocialProof />
      <FinalCta />
      <HomeAnimations />
    </main>
  );
}
