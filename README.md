# Aurum Labs Website

Marketing site for Aurum Labs. Serves a static landing page through a small Express server.

## Status

- ✅ Landing page implemented
- ✅ Express server for static hosting
- ✅ Launch App URL configurable via `VITE_DAPP_URL`

## Structure

```
client/
  src/
    components/       # UI components
    pages/            # Page sections
  public/
server/
  index.ts            # Express static server
shared/
```

## Features (Current)

- Hero + product messaging
- Launch App CTA
- Responsive layout

## Features (Planned)

- Waitlist form integration
- Analytics hooks

## Tech Stack

- React 19
- TypeScript 5.6
- Vite 7
- Tailwind CSS 4
- Express (static server)

## Local Development

```bash
pnpm install
pnpm run dev
```

## Environment Variables

```env
VITE_DAPP_URL=http://localhost:5173
```

## Build

```bash
pnpm run build
```

## Deployment

- Static hosting: Cloudflare Pages (`dist/public`)
- Full server: Render (`pnpm run start`)
