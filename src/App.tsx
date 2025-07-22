import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Food from "./pages/Food";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import ForFarmers from "./pages/ForFarmers";
import B2BSolutions from "./pages/B2BSolutions";
import D2CServices from "./pages/D2CServices";
import InstitutionalServices from "./pages/InstitutionalServices";
import OrderTracking from "./pages/OrderTracking";
import Vegetables from "./pages/Vegetables";
import Fruits from "./pages/Fruits";
import MealSubscription from "./pages/MealSubscription";
import Meals from "./pages/Meals";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import DeliveryAgent from "./pages/DeliveryAgent";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/food" element={<Food />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/meal-subscription" element={<MealSubscription />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/for-farmers" element={<ForFarmers />} />
          <Route path="/b2b-solutions" element={<B2BSolutions />} />
          <Route path="/d2c-services" element={<D2CServices />} />
          <Route path="/institutional-services" element={<InstitutionalServices />} />
          <Route path="/track-order" element={<OrderTracking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/delivery" element={<DeliveryAgent />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
