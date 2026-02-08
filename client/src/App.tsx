// App-level wiring: route tree, providers, and global UI utilities.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


function Router() {
  // Support subpath deployments (e.g., /docs/) while keeping local dev clean.
  const basePath = import.meta.env.BASE_URL || "/";
  return (
    <Switch>
      {/* Main landing route */}
      <Route path={basePath} component={Home} />
      {/* Explicit 404 route (useful for static hosting fallback rules). */}
      <Route path={`${basePath}404`} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    // Catch rendering errors so the UI fails gracefully instead of blanking.
    <ErrorBoundary>
      {/* ThemeProvider controls global theme class + CSS variables. */}
      <ThemeProvider
        defaultTheme="light"
      >
        {/* Tooltip provider enables global tooltip portals. */}
        <TooltipProvider>
          {/* Global toast portal for notifications. */}
          <Toaster />
          {/* App routes */}
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
