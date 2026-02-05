# Aurum Labs Website

Landing page for Aurum Labs.

## Status

- Static marketing site
- Served by a small Express server (see `server/index.ts`)
- `VITE_DAPP_URL` controls the “Launch App” button

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

- Static hosting: Cloudflare Pages (output `dist/public`)
- Full server: Render (build `pnpm run build`, start `pnpm run start`)

## Related Repositories

- `aurum-app` (UI prototype)
- `aurum-contracts` (ConditionalTokens prototype)
- `aurum-backend` (placeholder)
- `aurum-docs` (documentation)
