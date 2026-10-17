import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <section aria-labelledby="page-title" className="section-y page-x">
      <h1 id="page-title" className="max-w-4xl text-4xl font-semibold md:text-6xl">
        {site.tagline}
      </h1>
      <p className="mt-6 max-w-prose text-lg text-muted">{site.description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/try">Try the demo</ButtonLink>
        <ButtonLink href="/how-it-works" variant="secondary">
          How it works
        </ButtonLink>
      </div>
    </section>
  );
}
