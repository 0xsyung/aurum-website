// Client entrypoint: mount the React tree into the DOM root.
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize React 18+ root and render the app.
createRoot(document.getElementById("root")!).render(<App />);
