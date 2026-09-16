import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* keyed fade/slide on route change (200â€“400ms, purposeful) */}
        <div key={location.pathname} className="animate-page-in">
          <Outlet />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}


