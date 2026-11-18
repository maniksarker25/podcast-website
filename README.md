# Preach Radio — website

Marketing and information site for Preach Radio: home, about, creators, support, terms and privacy.
Static (no APIs, no database). Next.js 16 (App Router, Server Components), TypeScript, Tailwind CSS 4,
shadcn/ui (Radix, "Maia" preset) and Hugeicons. Dark and light themes via `next-themes`.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerender as static HTML)
npm run lint
```

## Where things live

| Path | What |
|---|---|
| `src/app/` | Routes, metadata, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `not-found.tsx` |
| `src/config/site.ts` | Site name, URL, **contact emails**, **app-store links**, navigation |
| `src/content/` | All copy and mock data: `showcase.ts`, `creator-insights.ts`, `faq.ts`, `legal/terms.ts`, `legal/privacy.ts` |
| `src/components/layout/` | Header, mobile menu, theme toggle, footer, logo |
| `src/components/sections/home/` | Home page sections |
| `src/components/creators/` | Creators page sections and the SVG charts |
| `src/components/about/`, `support/`, `legal/` | Page-specific components |
| `src/components/shared/` | Section headings, buttons, cover art, waveform, phone frame, store buttons |
| `src/components/ui/` | shadcn/ui components |
| `src/app/globals.css` | Design tokens (light + dark), fonts, motion |

## Common edits

- **App store links:** set `appLinks.appStore` / `appLinks.googlePlay` in `src/config/site.ts`.
  While a link is `null`, its badge shows "Coming soon" and is not clickable.
- **Contact emails / domain:** `src/config/site.ts` (or set `NEXT_PUBLIC_SITE_URL`).
- **Terms / Privacy text:** edit `src/content/legal/*.ts` (sections of paragraph, list, subheading
  and callout blocks) and update `lastUpdated`. To load them from a CMS or the backend instead,
  change `getLegalDocument()` in `src/lib/legal.ts` — pages and components stay the same.
- **FAQ:** `src/content/faq.ts`.

All names and numbers in the product previews (`src/content/showcase.ts`,
`src/content/creator-insights.ts`) are fictional; dashboard previews are labelled "Example data".
