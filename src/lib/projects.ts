// Real production websites Botond built and currently maintains.
// Every field below is verifiable from the live sites (inspected 2026-09-05)
// or is a lifecycle fact the owner has confirmed (built + currently manages).
// Do NOT add traffic, revenue, ranking, conversion or customer-count claims.

export interface BusinessProject {
  slug: string;
  name: string;
  /** business type + location, one line */
  tagline: string;
  category: string;
  market: string;
  url: string; // canonical HTTPS live site
  /** one-sentence summary for cards */
  card: string;
  /** preview image, added manually to /public/work (graceful fallback until then) */
  image: string;
  /** short alt text describing the screenshot */
  imageAlt: string;
  /** functional/technical capability tags — all observed on the live site */
  tags: string[];
  overview: string;
  context: string;
  need: string;
  solution: string;
  responsibilities: string[];
  functionality: string[];
  deploymentMaintenance: string;
}

export const businessProjects: BusinessProject[] = [
  {
    slug: "fyns-havehjaelp",
    name: "Fyns Havehjælp",
    tagline: "Local garden-service business — Fyn, Denmark",
    category: "Local service website",
    market: "Odense & Fyn, Denmark",
    url: "https://fynshavehjaelp.dk",
    image: "/work/fyns-havehjaelp-preview.webp",
    imageAlt: "Homepage of the Fyns Havehjælp garden-service website",
    card: "A lead-focused website for a local garden-care service on Fyn, built around “send a few photos and get a quote”.",
    tags: ["Danish", "Responsive", "Quote / lead flow", "Before & after gallery", "FAQ", "Local-SEO structure"],
    overview:
      "Fyns Havehjælp is a local garden-help service for private homeowners across Fyn. The website presents its practical, low-spray garden care and turns visitors into enquiries.",
    context:
      "A small, personal local service that needed a credible online presence to reach homeowners around Odense and the rest of Fyn — and to make requesting a quote effortless for people who aren't technical.",
    need:
      "Clearly present the services, build trust for an independent operator, and make it very easy to start an enquiry without a rigid booking form.",
    solution:
      "A fast, mobile-first Danish-language website with a clear services overview, a simple “send photos → agree the task → tidier garden” flow, a before/after gallery, an FAQ, and several low-friction contact options (Messenger, SMS and a contact form).",
    responsibilities: [
      "Design & development",
      "Responsive, mobile-first implementation",
      "Content structure & Danish page layout",
      "Deployment, domain & hosting setup",
      "Ongoing management & maintenance",
    ],
    functionality: [
      "Services presentation with per-service enquiry prompts",
      "Photo-based quote request via Messenger, SMS or contact form",
      "Before / after gallery",
      "“How it works” steps and FAQ",
      "Local-area content for Odense and towns across Fyn (local-SEO foundations)",
    ],
    deploymentMaintenance:
      "I deployed the site and set up its domain and hosting, and I continue to maintain and update it.",
  },
  {
    slug: "legume-cernat",
    name: "Legume Cernat",
    tagline: "Local produce & potato wholesaler (B2B) — Covasna, Romania",
    category: "Agricultural / B2B business website",
    market: "Cernat, Covasna, Romania",
    url: "https://legumecernat.ro",
    image: "/work/legume-cernat-preview.webp",
    imageAlt: "Homepage of the Legume Cernat produce wholesaler website",
    card: "A bilingual B2B website for a local vegetable & potato producer, built to present seasonal stock and capture wholesale enquiries.",
    tags: ["Romanian + Hungarian", "Responsive", "Product catalogue", "B2B lead forms", "Maps integration", "Cookie consent"],
    overview:
      "Legume Cernat is a cooperation of local farmers selling potatoes and vegetables — mostly wholesale to resellers, shops, restaurants and distributors in the region.",
    context:
      "A produce business that sells primarily B2B, where availability changes by season and buyers need calibres, packaging and quantities confirmed before travelling to collect.",
    need:
      "Present a seasonal range without over-promising stock, speak to several buyer types, and make it easy to request current prices and availability.",
    solution:
      "A bilingual (Romanian / Hungarian) website presenting the seasonal product range and an “available now” view, with B2B buyer segmentation (resellers, shops & HoReCa, distributors), a weekly-offer WhatsApp sign-up form, and pickup and contact details with map navigation.",
    responsibilities: [
      "Design & development",
      "Bilingual content structure (Romanian / Hungarian)",
      "Responsive implementation",
      "Deployment, domain & hosting setup",
      "Ongoing management & maintenance",
    ],
    functionality: [
      "Seasonal product catalogue with an “available now” view",
      "Price-on-request flow (no fixed stock promised)",
      "B2B buyer segmentation (resellers, shops/HoReCa, distributors)",
      "Weekly-offer WhatsApp lead form (client type, quantity, product)",
      "Pickup location with Google Maps / Waze, plus functional-cookie consent",
    ],
    deploymentMaintenance:
      "I deployed the site and set up its domain and hosting, and I continue to maintain and update it.",
  },
  {
    slug: "zol-oil",
    name: "ZOL-OIL",
    tagline: "Used-car dealership (parc auto) — Covasna, Romania",
    category: "Automotive inventory website",
    market: "Cernat, Covasna, Romania",
    url: "https://zoloil.ro",
    image: "/work/zol-oil-preview.webp",
    imageAlt: "Vehicle inventory page of the ZOL-OIL used-car dealership website",
    card: "A searchable used-car inventory website with individual vehicle pages and SEO-friendly URLs for a Romanian car dealership.",
    tags: ["Romanian", "Responsive", "Inventory catalogue", "Search & filtering", "Vehicle detail pages", "SEO-friendly URLs"],
    overview:
      "ZOL-OIL is a used-car dealership in Cernat, Covasna. The website presents its vehicle stock and helps buyers find and enquire about a specific car before visiting the lot.",
    context:
      "A physical car lot (operating since 1994, per the site) that needed an online catalogue so buyers could browse the current inventory, see key details, and get in touch quickly.",
    need:
      "Show a changing inventory clearly, let visitors search and sort vehicles, give each car its own page, and keep contact one tap away.",
    solution:
      "A responsive inventory website with a searchable, sortable vehicle listing (newest, price, mileage), per-vehicle detail pages on clean SEO-friendly URLs, availability and discount badges, fast WhatsApp/phone contact, plus about and contact pages with map directions.",
    responsibilities: [
      "Design & development",
      "Responsive implementation",
      "Inventory listing & vehicle-page structure",
      "Deployment, domain & hosting setup",
      "Ongoing management & maintenance",
    ],
    functionality: [
      "Live vehicle inventory catalogue",
      "Search by make/model and sort by newest, price or mileage",
      "Individual vehicle pages (price, year, mileage, fuel, transmission)",
      "SEO-friendly vehicle URLs (e.g. /masini/make-model-year)",
      "Availability & discount badges; WhatsApp/phone contact and map directions",
    ],
    deploymentMaintenance:
      "I deployed the site and set up its domain and hosting, and I continue to maintain and update it.",
  },
];

export const getProject = (slug: string): BusinessProject | undefined =>
  businessProjects.find((p) => p.slug === slug);
