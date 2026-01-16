import { siteContent } from '@/content/site';

export default function sitemap() {
  return [
    {
      url: siteContent.site.url,
      lastModified: new Date()
    },
    {
      url: `${siteContent.site.url}/projects`,
      lastModified: new Date()
    }
  ];
}
