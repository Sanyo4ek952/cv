import Link from 'next/link';

import { siteContent } from '@/content/site';

export function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            {siteContent.author.role}
          </p>
          <Link
            href="/"
            className="text-xl font-semibold text-slate-950"
          >
            {siteContent.author.name}
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
          {siteContent.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
