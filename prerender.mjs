/**
 * prerender.mjs
 * Generates static HTML snapshots of each route for SEO.
 * Run after `vite build`: the script starts `vite preview`, visits each route
 * with Puppeteer, and writes the rendered HTML to dist/{route}/index.html.
 *
 * Usage: node prerender.mjs
 * Full pipeline: npm run prerender  (runs vite build first)
 */

import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { spawn } from 'child_process';
import { existsSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PREVIEW_PORT = 4173;
const BASE_URL = `http://localhost:${PREVIEW_PORT}`;
const SITE = 'https://hungrybeaverstumpgrinding.com';

// Canonical meta copy for each route — injected directly into the HTML snapshot.
const PAGE_META = {
  '/': {
    title: 'Stump Grinding Phoenix AZ | Hungry Beaver Stump Grinding',
    description: "Phoenix's stump grinding specialists. Fast, affordable, and mess-free. Residential, commercial & municipal service across the Valley. Get a free quote today.",
  },
  '/gallery': {
    title: 'Stump Grinding Before & After | Hungry Beaver Phoenix AZ',
    description: 'See real stump grinding results from jobs across the Phoenix Valley. Residential, commercial stump removals — all done by Hungry Beaver.',
  },
  '/faq': {
    title: 'Stump Grinding FAQs | Hungry Beaver Phoenix AZ',
    description: "Got questions about stump grinding in Phoenix? We answer the most common ones — cost, timeline, what's left behind, and more. No fluff, just answers.",
  },
  '/calculator': {
    title: 'Stump Grinding Cost Calculator | Hungry Beaver Phoenix',
    description: 'Estimate your stump grinding cost instantly. No email required. Based on real Phoenix Valley pricing — get a ballpark in under a minute.',
  },
  '/quote': {
    title: 'Get a Free Stump Grinding Quote | Hungry Beaver Phoenix',
    description: 'Request a free, no-obligation stump grinding quote anywhere in the Phoenix Valley. Fast response, upfront pricing, no surprises.',
  },
  '/contact': {
    title: 'Get a Free Stump Grinding Quote | Hungry Beaver Phoenix',
    description: 'Ready to get rid of that stump? Contact Hungry Beaver Stump Grinding for a free, no-obligation quote anywhere in the Phoenix Valley.',
  },
  '/service-areas': {
    title: 'Stump Grinding Service Areas | Phoenix Valley | Hungry Beaver',
    description: 'Hungry Beaver serves the entire Phoenix Valley — Phoenix, Scottsdale, Chandler, Gilbert, Mesa, Glendale & more. Find out if we serve your area.',
  },
  '/services/residential': {
    title: 'Residential Stump Grinding Phoenix AZ | Hungry Beaver',
    description: 'Get rid of that backyard stump for good. Hungry Beaver specializes in residential stump grinding across Phoenix & the Valley. Fast quotes, clean results.',
  },
  '/services/commercial': {
    title: 'Commercial Stump Grinding Phoenix AZ | Hungry Beaver',
    description: 'Stump grinding for commercial properties in Phoenix. Minimize downtime, maximize curb appeal. Bonded, insured, and built for bigger jobs.',
  },
  '/services/municipal': {
    title: 'Municipal Stump Grinding Phoenix AZ | Hungry Beaver',
    description: 'Reliable stump grinding for cities, parks, and public spaces across the Phoenix Valley. Licensed, insured, and equipped for high-volume municipal projects.',
  },
  '/services/raised-roots': {
    title: 'Raised Root Grinding Phoenix AZ | Hungry Beaver',
    description: 'Raised roots cracking your sidewalk or driveway? We grind surface roots fast and clean. Serving Phoenix, Scottsdale, Chandler & the East Valley.',
  },
};

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

  // Hardcode the correct meta tags for this route so Google sees them without JS
  const { title, description } = PAGE_META[route];
  const canonicalUrl = route === '/' ? `${SITE}/` : `${SITE}${route}`;
  await page.evaluate(({ title, description, canonicalUrl }) => {
    document.title = title;
    const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
    set('meta[name="description"]', 'content', description);
    set('meta[property="og:title"]', 'content', title);
    set('meta[property="og:description"]', 'content', description);
    set('meta[property="og:url"]', 'content', canonicalUrl);
    set('link[rel="canonical"]', 'href', canonicalUrl);
  }, { title, description, canonicalUrl });

  const html = await page.evaluate(() => '<!DOCTYPE html>\n' + document.documentElement.outerHTML);

  const filePath = routeToFilePath(route);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html, 'utf-8');

  console.log(`  Saved → ${filePath.replace(__dirname + '/', '')}`);
}

// On Linux (Vercel/CI) use @sparticuz/chromium; on macOS use system Chrome.
async function getBrowserOptions() {
  if (process.platform === 'linux') {
    return {
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    };
  }
  const macPaths = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
  ];
  const executablePath = macPaths.find(existsSync);
  if (!executablePath) throw new Error('No Chrome found locally. Install Google Chrome or Chromium.');
  return { executablePath, headless: true, args: ['--no-sandbox'] };
}

async function main() {
  console.log('Starting preview server...');
  const server = await startPreviewServer();
  console.log(`Preview server running on port ${PREVIEW_PORT}\n`);

  const browser = await puppeteer.launch(await getBrowserOptions());

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
