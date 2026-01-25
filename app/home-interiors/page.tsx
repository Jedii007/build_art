import type { Metadata } from "next";
import ExhibitionsAnimations from "components/animations/ExhibitionsAnimations";
import HomeInteriorsPageContent from "components/sections/HomeInteriorsPageContent";

export const metadata: Metadata = {
  title: "Home Interiors",
};

export default function HomeInteriorsPage() {
  return (
    <main>
      <HomeInteriorsPageContent />
      <ExhibitionsAnimations />
    </main>
  );
}
