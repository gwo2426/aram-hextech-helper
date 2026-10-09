import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Augments from "./pages/Augments";
import Champions from "./pages/Champions";
import Builds from "./pages/Builds";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/augments" component={Augments} />
      <Route path="/champions" component={Champions} />
      <Route path="/builds" component={Builds} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <WouterRouter hook={useHashLocation}>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
            <Routes />
          </TooltipProvider>
        </ThemeProvider>
      </WouterRouter>
    </ErrorBoundary>
  );
}

export default App;
