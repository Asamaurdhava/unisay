"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { ButtonLink } from "@/components/button-link";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const cta =
    pathname === "/try"
      ? { href: "/banks#demo", label: "Request a bank demo" }
      : { href: "/try", label: "Try the demo" };

  const linkClass = (href: string) =>
    `inline-flex min-h-tap items-center rounded-card px-3 text-base transition-colors duration-fast ease-out hover:bg-accent-soft hover:text-accent-strong ${
      pathname === href
        ? "font-bold text-accent underline decoration-2 underline-offset-8"
        : "text-ink"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="page-x flex min-h-16 items-center justify-between gap-4 py-2">
        <Link
          href="/"
          className="inline-flex min-h-tap items-center gap-2 rounded-card font-display text-2xl font-semibold text-ink"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <span aria-hidden="true" className="inline-block size-3 rounded-full bg-accent" />
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={cta.href} className="hidden sm:inline-flex">
            {cta.label}
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-tap items-center justify-center rounded-card text-ink hover:bg-accent-soft active:bg-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <ul className="page-x flex flex-col gap-1 py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${linkClass(item.href)} w-full`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <ButtonLink href={cta.href} className="w-full">
              {cta.label}
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
