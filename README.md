# Hungry Beaver Stump Grinding

Website for Hungry Beaver Stump Grinding — professional stump removal in Phoenix, AZ.

## Features

- **Home** — Hero, services, pricing, contact CTA
- **Gallery** — Before/after photos
- **FAQ** — Common questions about stump grinding
- **Pricing Calculator** — Estimate costs by stump diameter
- **Quote & Contact** — Lead capture forms
- **BeaverBot (Chomp)** — AI assistant powered by Gemini for pricing and process questions

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS
- React Router
- Google Gemini AI (BeaverBot)

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` with your Gemini API key (required for BeaverBot):
   ```
   GEMINI_API_KEY=your_key_here
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm run preview
```

## Replace Placeholder Assets

- Add real before/after photos in `components/Gallery.tsx` or create an `/public` folder with images
- Add a custom favicon at `public/favicon.ico` if desired (current favicon is SVG inline)

---

*Serving Phoenix, Scottsdale, Mesa, Tempe, Gilbert & the Valley*
