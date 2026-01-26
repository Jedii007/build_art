import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="container" style={{ padding: "6rem 0" }}>
        <h1>Privacy Policy</h1>
        <p>
          Our privacy policy is being finalized. In the meantime, if you have
          any questions about how we handle data, please reach out.
        </p>
        <Link href="/contact">Contact us</Link>
      </div>
    </main>
  );
}
