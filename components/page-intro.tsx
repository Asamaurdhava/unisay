import { ButtonLink } from "@/components/button-link";

type Props = {
  eyebrow?: string;
  title: string;
  lede: string;
  cta: { href: string; label: string };
};

export function PageIntro({ eyebrow, title, lede, cta }: Props) {
  return (
    <section aria-labelledby="page-title" className="section-y page-x">
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h1 id="page-title" className="mt-3 max-w-prose text-4xl font-semibold md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-prose text-lg text-muted">{lede}</p>
      <div className="mt-8">
        <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
      </div>
    </section>
  );
}
