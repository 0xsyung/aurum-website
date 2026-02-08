Required GitHub Secrets for Cloudflare Pages
==========================================

Place these secrets in your repository settings → Secrets → Actions.

- `CLOUDFLARE_API_TOKEN` (required)
  - A Cloudflare API token with permissions to deploy Pages sites. Minimum scopes:
    - `Account.Pages:Edit` and `Account.Pages:Read`
    - `Account.Account Settings:Read` (optional depending on your setup)
  - Create a token in the Cloudflare dashboard (My Profile → API Tokens → Create Token).

- `CLOUDFLARE_ACCOUNT_ID` (required)
  - Your Cloudflare account ID (found in the Cloudflare dashboard Overview page).

- `CLOUDFLARE_PAGES_PROJECT` (required)
  - The Pages project name (the short project identifier shown in Cloudflare Pages settings).

Notes
-----
- The workflow deploys the Vite output from `dist/public`.
- For PRs the workflow creates a preview deployment using the PR branch (`github.head_ref`).
- If you prefer to separate production and preview projects, create a second Pages project and add an additional secret (e.g. `CLOUDFLARE_PAGES_PROJECT_PREVIEW`) and update the workflow accordingly.

Optional: GitHub environment variables
------------------------------------
- You can set `vars` or repository secrets for `VITE_*` variables used during build (the workflow passes several `VITE_` env vars to `pnpm run build:client`).
