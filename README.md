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

## Deployment

### Cloudflare Pages (Recommended)

This repo is set up for branch-based deployments via GitHub Actions.

**Branch URLs**
- `main` → `https://<project>.pages.dev`
- `develop` → `https://develop.<project>.pages.dev`

**Required GitHub Secrets**
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PAGES_PROJECT` (the Pages project name)

**Required GitHub Variables**
- `VITE_DAPP_URL`
- `VITE_OAUTH_PORTAL_URL` (if used)
- `VITE_APP_ID` (if used)
- `VITE_FRONTEND_FORGE_API_URL` (if used)
- `VITE_FRONTEND_FORGE_API_KEY` (if used)

**Build settings (in Cloudflare Pages UI)**
- **Build command**: `pnpm install --frozen-lockfile && pnpm build`
- **Build output directory**: `dist`
- **Framework preset**: Vite

Once secrets/vars are set, pushes to `main` and `develop` will deploy automatically.

**Notes for Cloudflare Pages**

- The workflow publishes the Vite output at `dist/public`. The CI builds the client with `pnpm run build:client`.
- We set `base` to `/` in `vite.config.ts` so assets are referenced from the site root. Keep `base` as-is only if you intend to serve from a subpath.

Commands (local build / test):

```bash
# Build client only
pnpm run build:client

# Serve locally for a production preview
pnpm run preview
```

Where to add GitHub Secrets
---------------------------

1. Open your repository on GitHub.
2. Go to Settings → Secrets and variables → Actions.
3. Add the following secrets (see `.github/SECRETS.md` for details):
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_PAGES_PROJECT`

Production vs Develop deploys
----------------------------

- Pushes to `main` deploy to your production Pages project.
- Pushes to `develop` deploy to the same Pages project but are intended for preview/testing. If you want fully isolated previews, consider configuring a separate Pages project and providing an additional secret `CLOUDFLARE_PAGES_PROJECT_PREVIEW`.

### Render

1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Configure:
   - **Build command**: `pnpm install && pnpm run build`
   - **Publish directory**: `dist`
4. Deploy

### Vercel

```bash
pnpm run build
```

## Deployment

- Static hosting: Cloudflare Pages (`dist/public`)
- Full server: Render (`pnpm run start`)
