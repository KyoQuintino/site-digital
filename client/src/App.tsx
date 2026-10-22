import { lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const TriadeDoTempo = lazy(() => import("./pages/TriadeDoTempo"));
const ComoFazerAmigos = lazy(() => import("./pages/ComoFazerAmigos"));
const Presocraticos = lazy(() => import("./pages/Presocraticos"));
const PiorAnoDaSuaVida = lazy(() => import("./pages/PiorAnoDaSuaVida"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return <main className="route-loading" aria-busy="true" aria-live="polite">Carregando página…</main>;
}

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/triade-do-tempo" component={TriadeDoTempo} />
        <Route path="/como-fazer-amigos-e-influenciar-pessoas" component={ComoFazerAmigos} />
        <Route path="/os-presocraticos" component={Presocraticos} />
        <Route path="/o-pior-ano-da-sua-vida" component={PiorAnoDaSuaVida} />
        <Route path="/admin" component={Admin} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
