/**
 * prerender.mjs
 * Generates static HTML snapshots of each route for SEO.
 * Run after `vite build`: the script starts `vite preview`, visits each route
 * with Puppeteer, and writes the rendered HTML to dist/{route}/index.html.
 *
 * Usage: node prerender.mjs
 * Full pipeline: npm run prerender  (runs vite build first)
 */

import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PREVIEW_PORT = 4173;
const BASE_URL = `http://localhost:${PREVIEW_PORT}`;

const ROUTES = [
  '/',
  '/gallery',
  '/faq',
  '/calculator',
  '/quote',
  '/contact',
  '/service-areas',
  '/services/residential',
  '/services/commercial',
  '/services/municipal',
  '/services/raised-roots',
];

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    const server = spawn(
      `npx vite preview --port ${PREVIEW_PORT}`,
      { stdio: ['ignore', 'pipe', 'pipe'], shell: true }
    );

    const timeout = setTimeout(() => {
      server.kill();
      reject(new Error('Preview server failed to start within 30s'));
    }, 30_000);

    server.stdout.on('data', (data) => {
      const text = data.toString();
      if (text.includes(String(PREVIEW_PORT))) {
        clearTimeout(timeout);
        resolve(server);
      }
    });

    server.stderr.on('data', (data) => {
      const text = data.toString();
      if (text.includes(String(PREVIEW_PORT))) {
        clearTimeout(timeout);
        resolve(server);
      }
    });

    server.on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}

function routeToFilePath(route) {
  if (route === '/') {
    return join(__dirname, 'dist', 'index.html');
  }
  // e.g. /gallery → dist/gallery/index.html
  // e.g. /services/residential → dist/services/residential/index.html
  return join(__dirname, 'dist', ...route.split('/').filter(Boolean), 'index.html');
}

async function prerenderRoute(page, route) {
  const url = `${BASE_URL}${route}`;
  console.log(`  Rendering ${route}`);

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30_000 });

  // Wait for React to fully render the page (footer is present on all pages)
  await page.waitForSelector('footer', { timeout: 15_000 });

  const html = await page.evaluate(() => '<!DOCTYPE html>\n' + document.documentElement.outerHTML);

  const filePath = routeToFilePath(route);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html, 'utf-8');

  console.log(`  Saved → ${filePath.replace(__dirname + '/', '')}`);
}

async function main() {
  console.log('Starting preview server...');
  const server = await startPreviewServer();
  console.log(`Preview server running on port ${PREVIEW_PORT}\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // Suppress console noise from the page (BeaverBot API calls, analytics, etc.)
    page.on('console', () => {});
    page.on('pageerror', () => {});

    console.log(`Prerendering ${ROUTES.length} routes...`);
    for (const route of ROUTES) {
      await prerenderRoute(page, route);
    }

    console.log('\nDone. All routes prerendered.');
  } finally {
    await browser.close();
    server.kill();
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
