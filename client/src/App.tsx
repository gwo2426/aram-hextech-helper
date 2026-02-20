import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Augments from "./pages/Augments";
import Champions from "./pages/Champions";
import Builds from "./pages/Builds";
import StockReport from "./pages/StockReport";

// Detect GitHub Pages base path
const BASE_PATH = import.meta.env.BASE_URL || "/";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/augments"} component={Augments} />
      <Route path={"/champions"} component={Champions} />
      <Route path={"/builds"} component={Builds} />
      <Route path={"/stock-report"} component={StockReport} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Strip trailing slash from base path for wouter
  const base = BASE_PATH.endsWith("/") ? BASE_PATH.slice(0, -1) : BASE_PATH;

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {/* Scanning line effect */}
          <div className="scan-line" />
          <WouterRouter base={base}>
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
