import type { Metadata } from "next";
import OfficeBudgetPlanner from "components/sections/OfficeBudgetPlanner";

export const metadata: Metadata = {
  title: "Office Renovation Budget Planner",
};

export default function OfficeBudgetPlannerPage() {
  return (
    <main className="planner-page">
      <OfficeBudgetPlanner />
    </main>
  );
}
