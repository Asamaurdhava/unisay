export type ChangelogEntry = {
  /** ISO timestamp, Phoenix time (UTC-7) */
  at: string;
  what: string;
  href?: string;
};

// Newest first.
export const changelog: ChangelogEntry[] = [
  {
    at: "2026-10-16T22:30:00-07:00",
    what: "Site live: six routes, sticky header with mobile menu, skip link, footer and custom 404.",
    href: "/",
  },
];
