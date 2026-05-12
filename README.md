# Dual Harvest Agrivoltaics — Website

Website for [Dual Harvest Agrivoltaics Limited](https://dualharvestagrivoltaics.co.uk) — UK independent agrivoltaic consultancy.

*Harvesting land. Harvesting light.*

## Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Sans Flex](https://fonts.google.com/) — primary font
- Deployed via [Vercel](https://vercel.com/)

## Pages

| Route | Description |
|---|---|
| `/` | Home |
| `/services` | Agrivoltaic configurations (16 configs, 5 families) |
| `/about` | About DHA and Director Paul Bird |
| `/insights` | Evidence, analysis, and policy commentary |
| `/contact` | Enquiry form and direct contact |

## Brand Colours

| Name | Hex |
|---|---|
| Navy | `#1B2A4A` |
| Gold | `#D4A017` |
| Forest Green | `#2D5016` |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo

Logo placeholder is in the Header component. Replace with the final DHA logo asset:
- Save as `/public/dha-logo.png` (transparent background, min 400px wide)
- Or `/public/dha-logo.svg` (preferred)
- Update `components/Header.tsx` to use `<Image src="/dha-logo.png" ... />`

## Deployment

Connected to Vercel. Every push to `main` triggers a production deployment.

Custom domain: `dualharvestagrivoltaics.co.uk`

## Associated Campaign

[Harvesting the Sun Twice](https://harvestingthesuntwice.org) — UK-wide evidence-based advocacy programme for agrivoltaic solar on agricultural land.

---

© Dual Harvest Agrivoltaics Limited. Incorporated 29/03/2026. Registered in England & Wales.
