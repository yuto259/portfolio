type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {label ? <p className="mb-3 text-sm font-semibold text-accent-300">{label}</p> : null}
      <h2 className="text-2xl font-bold tracking-normal text-white sm:text-3xl">{title}</h2>
      {description ? <p className="mt-4 leading-7 text-zinc-300">{description}</p> : null}
    </div>
  );
}
