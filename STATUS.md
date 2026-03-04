# Cascone Family App — STATUS

## Live
- **URL:** https://cascone-app.vercel.app
- **GitHub:** https://github.com/cascone26/cascone-app
- **Vercel:** cascone26s-projects/cascone-app (auto-deploys from GitHub)

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- PWA with manifest.json + service worker (offline support)
- No database — all content in code files

## Structure
- `/` — Home page with family grid + daily rotating quote
- `/jacob` `/abby` `/mom` `/dad` `/atlas` — Individual member pages
- `/family` — Shared family space (quotes, events, memories placeholder)
- Dynamic route `[member]` handles all member pages from `src/data/family.ts`

## Key Files
- `src/data/family.ts` — All family member data + template for adding new members
- `src/data/shared.ts` — Shared quotes, events
- `src/app/[member]/page.tsx` — Dynamic member page
- `src/components/NoteBoard.tsx` — localStorage-based notes per member
- `public/sw.js` — Service worker for offline caching
- `public/manifest.json` — PWA manifest

## Features Working
- [x] PWA installable (manifest + service worker)
- [x] Offline support (network-first with cache fallback)
- [x] Member pages with greeting, favorites, photo placeholder, quotes, note board
- [x] Family shared space with quotes and events
- [x] Mobile-first responsive design
- [x] Warm color palette (cream/linen/hearth/sage)
- [x] Glass card design language
- [x] Fade-in animations
- [x] Install prompt banner

## To Customize
- Add real photos to `public/photos/{member}/` and update `family.ts`
- Fill in TBD favorites for each family member
- Add real family quotes to `shared.ts`
- Add real events/dates
- Custom domain if desired
- Replace placeholder icon (public/icon-192.png, icon-512.png) with family crest/photo
