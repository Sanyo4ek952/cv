import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { siteContent } from '@/content/site';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.site.url),
  title: siteContent.site.title,
  description: siteContent.site.description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: siteContent.site.title,
    description: siteContent.site.description,
    url: siteContent.site.url,
    siteName: siteContent.site.title,
    locale: siteContent.site.locale,
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.className}>
      <body className="min-h-screen bg-white text-slate-950">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-6 py-12">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
