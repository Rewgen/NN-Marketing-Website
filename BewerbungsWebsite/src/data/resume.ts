export interface ResumeEntry {
  period: string;
  role: string;
  org?: string;
  description: string;
  category: "work" | "training" | "education";
}

export const resume: ResumeEntry[] = [
  // Berufserfahrung
  {
    category: "work",
    period: "05/2024 — heute",
    role: "Projektmanager Digitale Bildungsservices",
    org: "LSB NRW – Landessportbund Nordrhein-Westfalen",
    description:
      "Steuerung digitaler Bildungsprojekte: Anforderungsmanagement, Priorisierung, Stakeholder-Kommunikation und kontinuierliche Prozessoptimierung.",
  },
  {
    category: "work",
    period: "05/2024 — heute",
    role: "Spendergewinnung / Donor Engagement",
    org: "Westdeutsche Spenderzentrale (WSZE) – Ratingen",
    description:
      "Gewinnung und Betreuung von Spendern mit Fokus auf nachhaltige Beziehungspflege und strukturierte Kommunikation.",
  },
  {
    category: "work",
    period: "Früher",
    role: "Inside Sales Consultant | B2B Vertrieb",
    org: "Postbank Immobilien GmbH – Gladbeck",
    description:
      "Datenbasierte Markt- und Wertanalysen mit konkreten Handlungsempfehlungen für Kunden im Immobiliensegment.",
  },
  {
    category: "work",
    period: "Früher",
    role: "Stellv. Abteilungsleiter / Substitut",
    org: "Einzelhandel",
    description:
      "Führungsverantwortung für Teams und Abläufe, Koordination des Tagesgeschäfts und Qualitätssicherung.",
  },
  // Weiterbildung
  {
    category: "training",
    period: "2024 — heute",
    role: "Selbststudium – Entwicklung & KI-Tools",
    description:
      "Eigenverantwortliche Weiterbildung in Software-Entwicklung, KI-Anwendungen (fortgeschritten) und digitaler Automatisierung von Workflows.",
  },
  // Ausbildung
  {
    category: "education",
    period: "Ausbildung",
    role: "Ausbildung zum Einzelhandelskaufmann",
    description:
      "Abgeschlossene Berufsausbildung; schulischer Abschluss: Mittlere Fachoberschulreife.",
  },
];

export const cvDownloadHref = "/downloads/lebenslauf.pdf";
