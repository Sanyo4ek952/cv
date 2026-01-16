'use client';

import Link from 'next/link';

export default function ErrorPage({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="space-y-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Ошибка</p>
      <h1 className="text-3xl font-semibold text-slate-950">Что-то пошло не так</h1>
      <p className="text-slate-600">{error.message}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
        >
          Попробовать снова
        </button>
        <Link
          href="/"
          className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
