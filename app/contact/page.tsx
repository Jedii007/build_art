import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <section className="contact-page">
        <div className="container">
          <div className="contact-page__header">
            <h1 className="contact-page__headline">Start Your Project</h1>
            <p className="contact-page__subheadline">
              Tell us about your space and goals. We’ll review your request and
              get back with next steps.
            </p>
          </div>

          {/* Form */}
          <div className="contact-page__panel">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/FvWtlqcI1ouAsq1LjNka"
              className="contact-page__frame"
              id="inline-FvWtlqcI1ouAsq1LjNka"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Kairo Audit Form"
              data-height="3429"
              data-layout-iframe-id="inline-FvWtlqcI1ouAsq1LjNka"
              data-form-id="FvWtlqcI1ouAsq1LjNka"
              title="Kairo Audit Form"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
