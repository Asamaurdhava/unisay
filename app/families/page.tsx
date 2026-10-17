import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "For families",
  description:
    "Caregiver controls for AI-agent payments: spending limits, co-sign amount and alerts, with no shared passwords.",
};

export default function FamiliesPage() {
  return (
    <>
      <PageIntro
        eyebrow="For families and caregivers"
        title="Their yes, your backup. No shared passwords."
        lede="The person approves with one signal. The caregiver sets the limits, the co-sign amount and the alerts."
        cta={{ href: "#early-access", label: "Join early access" }}
      />
      <section id="early-access" aria-labelledby="early-access-title" className="page-x pb-24">
        <h2 id="early-access-title" className="text-2xl font-semibold md:text-4xl">
          Join early access
        </h2>
        <p className="mt-4 max-w-prose text-muted">The early access form opens on Saturday.</p>
      </section>
    </>
  );
}
