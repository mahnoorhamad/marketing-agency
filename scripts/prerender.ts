import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { BLOG_ARTICLES } from '../src/data/blogData';
import { getPageMetadata } from '../src/server/seoMetadata';

const ROOT_DIR = process.cwd();
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');

const ROOT_TEMPLATE = path.resolve(ROOT_DIR, 'index.html');
const DIST_TEMPLATE = path.join(DIST_DIR, 'index.html');

export async function generatePrerender(targetEnv: 'dist' | 'public' | 'both' = 'both') {
  const routes = [
    '/',
    '/faq',
    '/blog',
    ...BLOG_ARTICLES.map((article) => `/blog/${article.slug}`),
  ];

  const targets: { name: string; dir: string; template: string }[] = [];

  if (targetEnv === 'public' || targetEnv === 'both') {
    if (fs.existsSync(ROOT_TEMPLATE)) {
      targets.push({ name: 'public', dir: PUBLIC_DIR, template: ROOT_TEMPLATE });
    }
  }

  if (targetEnv === 'dist' || targetEnv === 'both') {
    if (fs.existsSync(DIST_TEMPLATE)) {
      targets.push({ name: 'dist', dir: DIST_DIR, template: DIST_TEMPLATE });
    }
  }

  if (targets.length === 0) {
    console.warn('[PRERENDER] No valid templates found.');
    return;
  }

  for (const target of targets) {
    const templateHtml = fs.readFileSync(target.template, 'utf-8');
    console.log(`[PRERENDER] Generating ${routes.length} static routes for ${target.name}...`);

    for (const route of routes) {
      const meta = getPageMetadata(route);
      const appHtml = renderToString(React.createElement(App, { initialPath: route }));

      let html = templateHtml;

      // 1. Replace <title>
      html = html.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);

      // 2. Replace or inject meta description
      if (html.includes('<meta name="description"')) {
        html = html.replace(
          /<meta name="description" content=".*?" \/>/s,
          `<meta name="description" content="${meta.description}" />`
        );
      } else {
        html = html.replace('</head>', `  <meta name="description" content="${meta.description}" />\n</head>`);
      }

      // 3. Inject canonical URL
      const canonicalTag = `  <link rel="canonical" href="${meta.canonicalUrl}" />`;
      if (html.includes('<link rel="canonical"')) {
        html = html.replace(/<link rel="canonical" href=".*?" \/>/s, canonicalTag);
      } else {
        html = html.replace('</head>', `${canonicalTag}\n</head>`);
      }

      // 4. Inject Open Graph and Twitter tags
      const ogTags = `
  <meta property="og:type" content="${meta.ogType}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:url" content="${meta.canonicalUrl}" />
  <meta property="og:image" content="${meta.ogImage}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${meta.ogImage}" />`;

      html = html.replace(/<meta property="og:.*?" content=".*?" \/>\s*/g, '');
      html = html.replace(/<meta name="twitter:.*?" content=".*?" \/>\s*/g, '');
      html = html.replace('</head>', `${ogTags}\n</head>`);

      // 5. Inject JSON-LD Schema
      const jsonLdTag = `\n  <script type="application/ld+json">${JSON.stringify(meta.jsonLd, null, 2)}</script>\n`;
      html = html.replace('</head>', `${jsonLdTag}</head>`);

      // 6. Inject Pre-rendered App HTML into <div id="root">
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // 7. Write target static file
      let targetFile = path.join(target.dir, 'index.html');
      if (route !== '/') {
        const subDir = path.join(target.dir, route.replace(/^\//, ''));
        if (!fs.existsSync(subDir)) {
          fs.mkdirSync(subDir, { recursive: true });
        }
        targetFile = path.join(subDir, 'index.html');
      }

      fs.writeFileSync(targetFile, html, 'utf-8');
    }
  }

  console.log('[PRERENDER] All static pages generated successfully!');
}

// Auto-run if executed directly
if (process.argv[1]?.endsWith('prerender.ts')) {
  generatePrerender().catch((err) => {
    console.error('Prerender failed:', err);
    process.exit(1);
  });
}
