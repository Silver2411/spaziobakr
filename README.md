# Spazio BAKR

Concrete loft for shooting & content — a refined editorial brand site.

> **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind v4 · Motion · Lenis

## Identity

- **Display:** Fraunces (variable, `opsz` + `SOFT` axes, italic)
- **Body:** Inter Tight
- **Mono:** Space Mono
- **Palette:** bone · concrete · steel · shadow · ink · clay (accent)
- **Mood:** Berlin techno × editorial — concrete, steel, glass

## Develop

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Routes

| Path        | Notes                                                    |
| ----------- | -------------------------------------------------------- |
| `/`         | Single-page editorial — hero, manifesto, gallery, specs  |
| `/booking`  | Structured request form (date, type, crew, equipment)    |
| `/info`     | Practical info — rates, equipment, house rules           |
| `/api/booking` | POST — receives booking submissions (logs for now)    |

## Replace placeholder content

- **Photos:** `src/lib/photos.ts` — Unsplash IDs to swap with the BAKR photoset
- **Copy:** `src/i18n/dictionaries.ts` — IT + EN dictionaries
- **Brand mark:** `src/components/Stamp.tsx` — circular wordmark
- **Address / contacts:** `dictionaries.ts → footer`
