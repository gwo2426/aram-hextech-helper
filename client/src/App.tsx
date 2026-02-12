import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Augments from "./pages/Augments";
import Champions from "./pages/Champions";
import Builds from "./pages/Builds";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/augments"} component={Augments} />
      <Route path={"/champions"} component={Champions} />
      <Route path={"/builds"} component={Builds} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {/* Scanning line effect */}
          <div className="scan-line" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
