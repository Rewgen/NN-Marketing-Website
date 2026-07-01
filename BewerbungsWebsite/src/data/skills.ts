export interface Skill {
  icon: string;
  title: string;
  points: string[];
}

/* Kompakte Kompetenz-Spalten im Stil des Mockups: Titel + kurze Stichworte. */
export const skills: Skill[] = [
  {
    icon: "messages",
    title: "Brücke zwischen Mensch & Technik",
    points: [
      "Vermittlung zwischen unterschiedlichen Anliegen und Perspektiven",
      "Übersetzung von Bedarfen in klare, umsetzbare Schritte",
      "Stakeholder-Kommunikation auf allen Ebenen",
    ],
  },
  {
    icon: "layout-grid",
    title: "Lösungsorientierung mit Nutzerblick",
    points: [
      "Datenbasiertes Arbeiten mit Blick auf den Nutzen",
      "Auswertung von Kennzahlen zur Ableitung konkreter Maßnahmen",
      "Anforderungsmanagement & Priorisierung",
    ],
  },
  {
    icon: "sparkles",
    title: "Digitale Eigeninitiative",
    points: [
      "Selbst erlernte Web-Entwicklung & Automatisierung",
      "KI-Tools und -Workflows in der praktischen Anwendung",
      "Grundkenntnisse in Versionsverwaltung (Git/GitHub)",
    ],
  },
  {
    icon: "layers",
    title: "Organisation",
    points: ["Struktur & Prozesse", "Priorisierung", "Teamkoordination"],
  },
  {
    icon: "cpu",
    title: "Prozessoptimierung",
    points: ["Analyse bestehender Abläufe", "Digitalisierung von Prozessen", "Kontinuierliche Verbesserung"],
  },
];
