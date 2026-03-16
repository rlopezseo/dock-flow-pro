import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";
import Blog from "./pages/Blog";
import ICPShippers from "./pages/ICPShippers";
import ICPBrokers from "./pages/ICPBrokers";
import ICPCarriers from "./pages/ICPCarriers";
import ICPDistributionCenters from "./pages/ICPDistributionCenters";
import ICPIndustrialAutomotive from "./pages/ICPIndustrialAutomotive";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/freight-management-software-for-shippers" replace />} />
          <Route path="/freight-management-software-for-shippers" element={<ICPShippers />} />
          <Route path="/freight-visibility-software-for-brokers" element={<ICPBrokers />} />
          <Route path="/fleet-visibility-software-for-carriers" element={<ICPCarriers />} />
          <Route path="/dock-scheduling-software-for-distribution-centers" element={<ICPDistributionCenters />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
