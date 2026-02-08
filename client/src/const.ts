// Re-export shared constants for client usage.
export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  // Values are injected by Vite at build time.
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  // Redirect back to this origin for local/dev/prod correctness.
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  // State encodes the redirect URI for server-side verification.
  const state = btoa(redirectUri);

  // Compose the OAuth URL with query params.
  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  // Return the final URL as a string for link usage.
  return url.toString();
};
