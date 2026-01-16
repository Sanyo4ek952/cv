import { siteContent } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-slate-600">
        <p>{siteContent.footer.note}</p>
        <p>
          © {new Date().getFullYear()} {siteContent.author.name}
        </p>
      </div>
    </footer>
  );
}
