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
import ICP3PLProviders from "./pages/ICP3PLProviders";
import ICPRetailFmcg from "./pages/ICPRetailFmcg";
import ICPPharma from "./pages/ICPPharma";
import ICPChemical from "./pages/ICPChemical";
import AlternativeTransporeon from "./pages/AlternativeTransporeon";
import AlternativeShippeo from "./pages/AlternativeShippeo";
import AlternativeProject44 from "./pages/AlternativeProject44";
import AlternativeSennder from "./pages/AlternativeSennder";
import AlternativeAlpega from "./pages/AlternativeAlpega";
import AlternativeTimoCom from "./pages/AlternativeTimoCom";
import AlternativeFourKites from "./pages/AlternativeFourKites";
import AlternativeOntruck from "./pages/AlternativeOntruck";
import CarbonVisibility from "./pages/CarbonVisibility";
import ECmr from "./pages/ECmr";
import TimeSlotManagement from "./pages/TimeSlotManagement";
import FreightExchange from "./pages/FreightExchange";

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
          <Route path="/freight-visibility-for-industrial-and-automotive" element={<ICPIndustrialAutomotive />} />
          <Route path="/freight-visibility-for-3pl-providers" element={<ICP3PLProviders />} />
          <Route path="/freight-visibility-for-retail-and-fmcg" element={<ICPRetailFmcg />} />
          <Route path="/freight-visibility-for-pharma" element={<ICPPharma />} />
          <Route path="/freight-visibility-for-chemical-industry" element={<ICPChemical />} />
          <Route path="/alternative-to-transporeon" element={<AlternativeTransporeon />} />
          <Route path="/alternative-to-shippeo" element={<AlternativeShippeo />} />
          <Route path="/alternative-to-project44" element={<AlternativeProject44 />} />
          <Route path="/alternative-to-sennder" element={<AlternativeSennder />} />
          <Route path="/alternative-to-alpega" element={<AlternativeAlpega />} />
          <Route path="/alternative-to-timocom" element={<AlternativeTimoCom />} />
          <Route path="/alternative-to-fourkites" element={<AlternativeFourKites />} />
          <Route path="/alternative-to-ontruck" element={<AlternativeOntruck />} />
          <Route path="/carbon-visibility-software" element={<CarbonVisibility />} />
          <Route path="/ecmr-electronic-consignment-note" element={<ECmr />} />
          <Route path="/time-slot-management-software" element={<TimeSlotManagement />} />
          <Route path="/freight-exchange-spot-market" element={<FreightExchange />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
