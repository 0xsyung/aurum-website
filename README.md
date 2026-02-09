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

This project is configured for continuous deployment to [Cloudflare Pages](https://pages.cloudflare.com/) using GitHub Actions.

### How it Works

The deployment workflow is defined in `.github/workflows/deploy-cloudflare.yml` and has the following characteristics:

*   **Trigger**: The workflow is automatically triggered on every push to the `main` and `develop` branches.
*   **Process**: A single job checks out the code, sets up Node.js and pnpm, installs dependencies, and builds the client-side application.
*   **Deployment**: The built application (from the `dist` directory) is then deployed to Cloudflare Pages.

### Branch Deployments

*   Pushes to the `main` branch will deploy to the production environment.
*   Pushes to the `develop` branch will create a preview deployment.

### Required Configuration

For the deployment to work, you need to configure the following secrets in your GitHub repository settings under `Settings > Secrets and variables > Actions`:

*   `CLOUDFLARE_API_TOKEN`
*   `CLOUDFLARE_ACCOUNT_ID`
*   `CLOUDFLARE_PAGES_PROJECT`: The name of your Cloudflare Pages project.

You may also need to configure the following repository variables for the build process:

*   `VITE_DAPP_URL`
*   `VITE_OAUTH_PORTAL_URL`
*   `VITE_APP_ID`
*   `VITE_FRONTEND_FORGE_API_URL`
*   `VITE_FRONTEND_FORGE_API_KEY`