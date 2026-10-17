import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "For banks",
  description:
    "An approval layer banks and credit unions plug into AI-agent payments. Start with a free 90-day pilot.",
};

export default function BanksPage() {
  return (
    <>
      <PageIntro
        eyebrow="For banks and credit unions"
        title="An accessible approval layer for agent payments."
        lede="Ayeline plugs into the payments your customers' AI agents prepare, so every customer can approve with one reliable signal. Pilot outline: a free 90-day pilot, then a monthly per-account fee."
        cta={{ href: "#demo", label: "Request a demo" }}
      />
      <section id="demo" aria-labelledby="demo-title" className="page-x pb-24">
        <h2 id="demo-title" className="text-2xl font-semibold md:text-4xl">
          Request a demo
        </h2>
        <p className="mt-4 max-w-prose text-muted">The demo request form opens on Saturday.</p>
      </section>
    </>
  );
}
