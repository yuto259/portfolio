import Link from "next/link";

type CallToActionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CallToAction({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CallToActionProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-surface-850 px-6 py-8 shadow-glow sm:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-zinc-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className="inline-flex items-center justify-center rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-surface-950 transition hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300" href={primaryHref}>
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-300 hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
