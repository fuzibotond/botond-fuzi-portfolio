import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";
import SoftwareEngineer from "./pages/SoftwareEngineer";
import WebDevelopment from "./pages/WebDevelopment";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import { businessProjects } from "./lib/projects";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "software-engineer", element: <SoftwareEngineer /> },
      { path: "web-development", element: <WebDevelopment /> },
      { path: "work", element: <Work /> },
      // Explicit per-project routes so every case study is prerendered.
      ...businessProjects.map((p) => ({
        path: `work/${p.slug}`,
        element: <CaseStudy slug={p.slug} />,
      })),
      // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
      { path: "*", element: <NotFound /> },
    ],
  },
];
