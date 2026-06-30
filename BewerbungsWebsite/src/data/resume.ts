export interface ResumeEntry {
  period: string;
  role: string;
  org?: string;
  description: string;
}

export const resume: ResumeEntry[] = [
  {
    period: "05/2024 — heute",
    role: "Projektmanager Digitale Bildungsservices",
    org: "LSB NRW",
    description:
      "Steuerung digitaler Bildungsprojekte im Landessportbund NRW: Anforderungsmanagement, Stakeholder-Kommunikation und Prozessoptimierung.",
  },
  {
    period: "05/2024 — heute",
    role: "Spendergewinnung / Donor Engagement",
    org: "Westdeutsche Spenderzentrale (WSZE) – Ratingen",
    description:
      "Gewinnung und Betreuung von Spendern mit Fokus auf Kommunikation und nachhaltige Beziehungspflege.",
  },
  {
    period: "Früher",
    role: "Inside Sales Consultant | B2B Vertrieb",
    org: "Postbank Immobilien GmbH – Gladbeck",
    description:
      "Datenbasierte Markt- und Wertanalysen mit konkreten Handlungsempfehlungen für Kunden.",
  },
  {
    period: "Früher",
    role: "Stellv. Abteilungsleiter / Substitut",
    description:
      "Führungsverantwortung im Einzelhandel, Koordination von Teams und Abläufen.",
  },
  {
    period: "2024 — heute",
    role: "Selbststudium – Entwicklung & KI-Tools",
    description:
      "Eigenverantwortliche Weiterbildung in Software-Entwicklung, KI-Anwendungen und digitaler Automatisierung.",
  },
  {
    period: "Ausbildung",
    role: "Einzelhandelskaufmann",
    description: "Berufsausbildung mit Abschluss Mittlere Fachoberschulreife.",
  },
];

export const cvDownloadHref = "/downloads/lebenslauf.pdf";
