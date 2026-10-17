import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Try it",
  description: "Approve an AI-agent payment with one key. An interactive prototype simulation.",
};

export default function TryPage() {
  return (
    <PageIntro
      eyebrow="Try it"
      title="Imagine you can only press one key."
      lede="Use the spacebar, or tap the big button. The interactive demo is being built this weekend. Prototype simulation. No real payments."
      cta={{ href: "/banks#demo", label: "Request a bank demo" }}
    />
  );
}
