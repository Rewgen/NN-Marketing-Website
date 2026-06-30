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
    points: ["Planung & Steuerung", "Ressourcenmanagement", "Agile Methoden"],
  },
  {
    icon: "cpu",
    title: "Digitalisierung",
    points: ["Prozessoptimierung", "Tools & Systeme", "Automatisierung"],
  },
  {
    icon: "messages",
    title: "Kommunikation",
    points: ["Moderation", "Stakeholder-Management", "Präsentation"],
  },
  {
    icon: "layers",
    title: "Organisation",
    points: ["Struktur & Prozesse", "Priorisierung", "Effizienz"],
  },
  {
    icon: "sparkles",
    title: "KI & Automatisierung",
    points: ["Workflows", "KI-Anwendungen", "Datenanalyse"],
  },
];
