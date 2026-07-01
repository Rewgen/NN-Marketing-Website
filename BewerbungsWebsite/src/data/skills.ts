export interface Skill {
  icon: string;
  title: string;
  points: string[];
}

/* Kompakte Kompetenz-Spalten im Stil des Mockups: Titel + kurze Stichworte. */
export const skills: Skill[] = [
  {
    icon: "layout-grid",
    title: "Projektmanagement",
    points: ["Anforderungsmanagement & Priorisierung", "Planung & Steuerung", "Ressourcenmanagement"],
  },
  {
    icon: "cpu",
    title: "Digitalisierung",
    points: ["Prozessoptimierung", "Digitale Bildungsservices", "Tools & Systeme"],
  },
  {
    icon: "messages",
    title: "Kommunikation",
    points: ["Stakeholder-Kommunikation", "Donor Engagement", "B2B Vertrieb"],
  },
  {
    icon: "layers",
    title: "Organisation",
    points: ["Struktur & Prozesse", "Priorisierung", "Teamkoordination"],
  },
  {
    icon: "sparkles",
    title: "KI & Automatisierung",
    points: ["KI-Tools (fortgeschritten)", "Datenbasierte Analysen", "Automatisierte Workflows"],
  },
];
