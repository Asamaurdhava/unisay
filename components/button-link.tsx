import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const base =
  "inline-flex min-h-tap items-center justify-center gap-2 rounded-full px-6 text-base font-bold transition-colors duration-fast ease-out";

const variants = {
  primary:
    "bg-accent text-paper hover:bg-accent-strong active:bg-ink",
  secondary:
    "border-2 border-accent text-accent hover:bg-accent-soft active:bg-accent-soft active:text-accent-strong",
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {variant === "primary" && <ArrowRight aria-hidden="true" className="size-4" />}
    </Link>
  );
}
