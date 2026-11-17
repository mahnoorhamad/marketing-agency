import fs from 'fs';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, Plugin } from 'vite';

function staticPrerenderDevPlugin(): Plugin {
  return {
    name: 'static-prerender-dev',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const rawUrl = req.url?.split('?')[0].split('#')[0] || '/';
        const cleanPath = rawUrl.replace(/\/$/, '') || '/';

        if (cleanPath === '/robots.txt') {
          const file = path.resolve(process.cwd(), 'public/robots.txt');
          if (fs.existsSync(file)) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            return res.end(fs.readFileSync(file, 'utf-8'));
          }
        }

        if (cleanPath === '/sitemap.xml') {
          const file = path.resolve(process.cwd(), 'public/sitemap.xml');
          if (fs.existsSync(file)) {
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            return res.end(fs.readFileSync(file, 'utf-8'));
          }
        }

        if (cleanPath === '/' || cleanPath === '/faq' || cleanPath === '/blog' || cleanPath.startsWith('/blog/')) {
          const filePath = cleanPath === '/'
            ? path.resolve(process.cwd(), 'public/index.html')
            : path.resolve(process.cwd(), `public${cleanPath}/index.html`);
          if (fs.existsSync(filePath)) {
            const html = fs.readFileSync(filePath, 'utf-8');
            return server.transformIndexHtml(cleanPath, html).then((transformedHtml) => {
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.end(transformedHtml);
            }).catch(next);
          }
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), staticPrerenderDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
