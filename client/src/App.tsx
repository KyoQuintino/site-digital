import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TriadeDoTempo from "./pages/TriadeDoTempo";
import ComoFazerAmigos from "./pages/ComoFazerAmigos";
import Presocraticos from "./pages/Presocraticos";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/triade-do-tempo" component={TriadeDoTempo} />
      <Route path="/como-fazer-amigos-e-influenciar-pessoas" component={ComoFazerAmigos} />
      <Route path="/os-presocraticos" component={Presocraticos} />
      <Route path="/admin" component={Admin} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
