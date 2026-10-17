import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Where Unisay plugs in: after the agent prepares a payment, before the bank approves it.",
};

export default function HowItWorksPage() {
  return (
    <PageIntro
      eyebrow="How it works"
      title="One signal between the agent and the payment."
      lede="Unisay sits after the agent prepares a payment and before the bank approves it. The person says yes with one tap, key or switch, within spending limits, with a caregiver co-sign above a set amount and a record of every yes."
      cta={{ href: "/try", label: "Try the demo" }}
    />
  );
}
