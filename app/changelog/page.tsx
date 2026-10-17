import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { changelog } from "@/data/changelog";

export const metadata: Metadata = {
  title: "Built this weekend",
  description: "Every page and feature we shipped at the Ship AI AZ GTM Hackathon, with timestamps.",
};

const fmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Phoenix",
  weekday: "short",
  hour: "numeric",
  minute: "2-digit",
});

export default function ChangelogPage() {
  return (
    <section aria-labelledby="page-title" className="section-y page-x">
      <p className="text-sm font-bold uppercase tracking-widest text-accent">Receipts</p>
      <h1 id="page-title" className="mt-3 text-4xl font-semibold md:text-6xl">
        Built this weekend
      </h1>
      <p className="mt-6 max-w-prose text-muted">
        Ship AI AZ GTM Hackathon, Phoenix, October 17 to 18, 2026. Everything we shipped, newest
        first.
      </p>

      <ol className="mt-12 grid max-w-3xl gap-4">
        {changelog.map((entry) => (
          <li key={entry.at} className="rounded-card bg-surface p-6 shadow-card">
            <time dateTime={entry.at} className="text-sm font-bold text-accent">
              {fmt.format(new Date(entry.at))}
            </time>
            <p className="mt-2">{entry.what}</p>
            {entry.href && (
              <Link
                href={entry.href}
                className="mt-2 inline-flex min-h-tap items-center rounded-card text-base font-bold text-accent underline underline-offset-4 hover:text-accent-strong"
              >
                See it: {entry.href}
              </Link>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <ButtonLink href="/try">Try the demo</ButtonLink>
      </div>
    </section>
  );
}
