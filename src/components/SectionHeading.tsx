import type { ReactNode } from 'react';

type SectionHeadingProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionHeading({ title, description, children }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
        {children}
      </div>
      {description ? <p className="text-slate-600">{description}</p> : null}
    </div>
  );
}
