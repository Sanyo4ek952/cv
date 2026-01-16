import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="space-y-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">404</p>
      <h1 className="text-3xl font-semibold text-slate-950">Страница не найдена</h1>
      <p className="text-slate-600">Проверьте адрес или вернитесь на главную.</p>
      <Link
        href="/"
        className="inline-flex rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
      >
        На главную
      </Link>
    </div>
  );
}
