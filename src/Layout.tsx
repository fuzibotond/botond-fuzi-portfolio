import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Nav } from "@/components/portfolio/Nav";

const queryClient = new QueryClient();

/** Root layout: app-wide providers + shared navigation, rendered on every route. */
const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Nav />
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);

export default Layout;
