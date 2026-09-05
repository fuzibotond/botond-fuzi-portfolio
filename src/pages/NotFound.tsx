import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Seo } from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <Seo
        title="Page not found | Botond Füzi"
        description="This page could not be found."
        path={location.pathname}
        noindex
      />
      <div className="text-center">
        <h1 className="mb-4 font-display text-6xl">404</h1>
        <p className="mb-8 text-lg text-muted-foreground">This page could not be found.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
