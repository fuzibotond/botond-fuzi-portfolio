import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";
import SoftwareEngineer from "./pages/SoftwareEngineer";
import WebDevelopment from "./pages/WebDevelopment";
import NotFound from "./pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "software-engineer", element: <SoftwareEngineer /> },
      { path: "web-development", element: <WebDevelopment /> },
      // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
      { path: "*", element: <NotFound /> },
    ],
  },
];
