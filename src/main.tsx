import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./index.css";

// vite-react-ssg drives both the static build and client hydration.
export const createRoot = ViteReactSSG({ routes });
