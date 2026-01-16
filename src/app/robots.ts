import { siteContent } from '@/content/site';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${siteContent.site.url}/sitemap.xml`
  };
}
