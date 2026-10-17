import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="page-x grid gap-8 py-12 md:grid-cols-2">
        <div>
          <p className="font-display text-2xl font-semibold">{site.name}</p>
          <p className="mt-2 max-w-prose text-base text-muted">{site.tagline}</p>
          <p className="mt-4 inline-block rounded-card bg-warning-soft px-3 py-1 text-sm font-bold text-warning">
            {site.disclaimer}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-1 sm:grid-cols-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-tap items-center rounded-card text-base text-ink underline decoration-line underline-offset-4 hover:decoration-accent hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
