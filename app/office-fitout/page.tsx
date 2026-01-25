import type { Metadata } from "next";
import ExhibitionsAnimations from "components/animations/ExhibitionsAnimations";
import OfficeFitoutPageContent from "components/sections/OfficeFitoutPageContent";

export const metadata: Metadata = {
  title: "Office Fit-Out",
};

export default function OfficeFitoutPage() {
  return (
    <main>
      <OfficeFitoutPageContent />
      <ExhibitionsAnimations />
    </main>
  );
}
