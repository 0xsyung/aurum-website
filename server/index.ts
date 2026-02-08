// Minimal static server for the built client bundle.
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname in ESM context.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  // Express app and Node HTTP server wrapper.
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Serve the compiled assets.
  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  // Bind to the provided port or default to 3000.
  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

// Boot the server and surface startup errors.
startServer().catch(console.error);
