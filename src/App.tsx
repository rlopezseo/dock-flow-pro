import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadMatching from "./pages/LoadMatching";
import FreightProcurement from "./pages/FreightProcurement";
import FreightVisibility from "./pages/FreightVisibility";
import PredictiveETA from "./pages/PredictiveETA";
import YardManagement from "./pages/YardManagement";
import BackhaulOptimization from "./pages/BackhaulOptimization";
import About from "./pages/About";
import ICPShippers from "./pages/ICPShippers";
import ICPBrokers from "./pages/ICPBrokers";
import ICPCarriers from "./pages/ICPCarriers";
import ICPDistributionCenters from "./pages/ICPDistributionCenters";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/load-matching" element={<LoadMatching />} />
          <Route path="/freight-procurement" element={<FreightProcurement />} />
          <Route path="/freight-visibility" element={<FreightVisibility />} />
          <Route path="/predictive-eta" element={<PredictiveETA />} />
          <Route path="/yard-management" element={<YardManagement />} />
          <Route path="/backhaul-optimization" element={<BackhaulOptimization />} />
          <Route path="/about" element={<About />} />
          <Route path="/freight-management-software-for-shippers" element={<ICPShippers />} />
          <Route path="/freight-visibility-software-for-brokers" element={<ICPBrokers />} />
          <Route path="/fleet-visibility-software-for-carriers" element={<ICPCarriers />} />
          <Route path="/dock-scheduling-software-for-distribution-centers" element={<ICPDistributionCenters />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
