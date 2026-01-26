import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main>
      <div className="container" style={{ padding: "6rem 0" }}>
        <h1>Terms of Service</h1>
        <p>
          Our terms of service are being finalized. If you need a copy or have
          any questions, please contact us.
        </p>
        <Link href="/contact">Contact us</Link>
      </div>
    </main>
  );
}
