export interface ResumeEntry {
  period: string;
  role: string;
  org?: string;
  description: string;
}

export const resume: ResumeEntry[] = [
  {
    period: "2023 — heute",
    role: "Projektmanagement & Digitalisierung",
    description: "Strategie, Prozessoptimierung und digitale Konzeption.",
  },
  {
    period: "2020 — 2023",
    role: "Koordination & Organisation",
    description: "Verantwortung für komplexe Vorhaben und ihre Umsetzung.",
  },
  {
    period: "bis 2020",
    role: "Grundlagen & Ausbildung",
    description: "Das Fundament für strukturiertes, lösungsorientiertes Arbeiten.",
  },
];

export const cvDownloadHref = "/downloads/lebenslauf.pdf";
