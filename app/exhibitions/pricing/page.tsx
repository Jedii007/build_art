import type { Metadata } from "next";
import ExhibitionPricingCalculator from "components/sections/ExhibitionPricingCalculator";

export const metadata: Metadata = {
  title: "Exhibition Pricing Estimator",
};

export default function ExhibitionsPricingPage() {
  return (
    <main className="pricing-page">
      <ExhibitionPricingCalculator />
    </main>
  );
}
