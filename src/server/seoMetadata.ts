import { BLOG_ARTICLES } from '../data/blogData';
import { FAQ_QUESTIONS } from '../data/faqData';

export const SITE_URL = 'https://hawarstudio.com';

export interface PageMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: 'website' | 'article';
  ogImage: string;
  jsonLd: Record<string, any>;
}

export function getPageMetadata(pathname: string): PageMetadata {
  const cleanPath = pathname.replace(/\/$/, '') || '/';

  // 1. FAQ Page
  if (cleanPath === '/faq') {
    return {
      title: 'Hawar Studio FAQ | AI-Powered Digital Marketing Studio in Pakistan',
      description:
        'Answers to common questions about Hawar Studio: what we do, who we work with, plans, ads, AI and how to get started.',
      canonicalUrl: `${SITE_URL}/faq`,
      ogType: 'website',
      ogImage: `${SITE_URL}/assets/aistudio/file_00000000889c8211b5bc0ad5658ce4eb_dd2d4f6c.png`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ_QUESTIONS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    };
  }

  // 2. Blog Index Page
  if (cleanPath === '/blog') {
    return {
      title: 'Studio Insights & Articles — Hawar Studio',
      description:
        'Strategic insights, case studies, and practical guides on combining human creative direction with artificial intelligence to build smarter content.',
      canonicalUrl: `${SITE_URL}/blog`,
      ogType: 'website',
      ogImage: `${SITE_URL}/assets/aistudio/file_00000000889c8211b5bc0ad5658ce4eb_dd2d4f6c.png`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Hawar Studio Insights',
        description:
          'Practical strategies and honest analyses from the intersection of human creative direction and generative AI.',
        url: `${SITE_URL}/blog`,
        publisher: {
          '@type': 'Organization',
          name: 'Hawar Studio',
          url: SITE_URL,
        },
      },
    };
  }

  // 3. Blog Post Pages (/blog/[slug])
  if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.replace('/blog/', '');
    const article = BLOG_ARTICLES.find((a) => a.slug === slug);
    if (article) {
      return {
        title: article.titleTag || (article.title.includes('Hawar Studio') ? article.title : `${article.title} | Hawar Studio`),
        description: article.metaDescription,
        canonicalUrl: `${SITE_URL}/blog/${article.slug}`,
        ogType: 'article',
        ogImage: `${SITE_URL}/assets/aistudio/file_00000000889c8211b5bc0ad5658ce4eb_dd2d4f6c.png`,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.h1 || article.title,
          description: article.metaDescription,
          url: `${SITE_URL}/blog/${article.slug}`,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
          author: {
            '@type': 'Person',
            name: 'Warda Khawaja',
            url: article.authorUrl || 'https://www.linkedin.com/in/warda-khawaja98/',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Hawar Studio',
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/assets/aistudio/file_00000000889c8211b5bc0ad5658ce4eb_dd2d4f6c.png`,
            },
          },
        },
      };
    }
  }

  // 4. Default / Homepage
  return {
    title: 'Hawar Studio — Marketing Built for the Next Era',
    description:
      'Your brand deserves more than AI. It needs intelligence. We combine AI, creative strategy, and human direction to build smarter content and marketing systems for modern brands.',
    canonicalUrl: `${SITE_URL}/`,
    ogType: 'website',
    ogImage: `${SITE_URL}/assets/aistudio/file_00000000889c8211b5bc0ad5658ce4eb_dd2d4f6c.png`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Hawar Studio',
      url: SITE_URL,
      description: 'Hawar Studio is a full-scope creative, social media marketing, and AI content studio based in Cantt, Sialkot District, Punjab, Pakistan, serving D2C, e-commerce, and international brands.',
      founder: {
        '@type': 'Person',
        name: 'Warda Khawaja',
        jobTitle: 'Founder, Social Media Growth Strategist & Creative Director',
        sameAs: ['https://www.linkedin.com/in/warda-khawaja98/'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cantt',
        addressLocality: 'Sialkot District',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+92-303-8662249',
          contactType: 'customer service',
          email: 'info.hawarstudio@gmail.com',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+92-303-8662259',
          contactType: 'customer service',
        },
      ],
      sameAs: [
        'https://www.instagram.com/hawarstudio.marketing',
        'https://www.linkedin.com/company/hawarstudio/',
        'https://www.facebook.com/hawarstudio',
        'https://www.tiktok.com/@hawarstudio',
        'https://www.linkedin.com/in/warda-khawaja98/',
        'https://calendly.com/wardakhawaja-works/30min',
      ],
    },
  };
}
