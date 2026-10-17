import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <PageIntro
      eyebrow="404"
      title="No signal means no. This page doesn't exist."
      lede="The link may be broken, or the page may have moved. The demo is still one press away."
      cta={{ href: "/try", label: "Try the demo" }}
    />
  );
}
