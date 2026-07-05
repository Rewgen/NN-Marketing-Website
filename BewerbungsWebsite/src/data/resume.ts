export interface ResumeEntry {
  period: string;
  role: string;
  org?: string;
  description?: string;
  achievements?: string[];
  category: "work" | "training" | "education";
}

export const resume: ResumeEntry[] = [
  // Berufserfahrung
  {
    category: "work",
    period: "05/2024 — heute",
    role: "Spendergewinnung / Donor Engagement",
    org: "Westdeutsche Spenderzentrale (WSZE) – Ratingen",
    description:
      "Eigenverantwortliche Planung, Organisation und Steuerung von Typisierungsaktionen über alle Projektphasen hinweg.",
    achievements: [
      "Eigenverantwortliche Planung, Organisation und Steuerung von Typisierungsaktionen über alle Projektphasen",
      "Termindurchführung mit direkter Zielgruppenansprache zur Gewinnung von Stammzellspender*innen",
      "Akquise von Veranstaltungspartnern (Unternehmen, Festivals, Bildungseinrichtungen)",
      "2024 höchste Neuspender-Quote seit Gründung",
    ],
  },
  {
    category: "work",
    period: "01/2023 — 04/2024",
    role: "Inside Sales Consultant | B2B-Vertrieb",
    org: "The StepStone Group GmbH – Düsseldorf",
    description:
      "Beratung und Akquise von Entscheider:innen im Mittelstand zu digitalen Lösungen, datenbasierte Optimierung gemeinsam mit Kund:innen und IT.",
    achievements: [
      "Beratung und Akquise von HR-Entscheider*innen (KMU) zu digitalen Recruiting-Lösungen",
      "Pipeline-Steuerung im CRM (Salesforce)",
      "Datenbasierte Auswertung der Anzeigen-Performance mit Kund*innen und IT; Ableitung und Umsetzung konkreter Optimierungsmaßnahmen",
      "Umsatzvorgabe in den ersten 6 Monaten um 30 % übertroffen (Ziel: 10.000 €, Ergebnis: 13.000 €)",
    ],
  },
  {
    category: "work",
    period: "11/2020 — 12/2022",
    role: "Selbstständiger Immobilienmakler",
    org: "Postbank Immobilien GmbH – Gladbeck",
    description:
      "Steuerung kompletter Vermittlungsprozesse in Abstimmung mit allen Stakeholdern, datenbasierte Markt- und Wertanalysen.",
    achievements: [
      "Steuerung aller Ein-/Verkaufsphasen von der Erstbewertung bis zum Notartermin in Abstimmung mit allen Stakeholdern",
      "Datenbasierte Markt- und Wertanalysen (Lage, Vergleichsobjekte, Marktentwicklung) mit konkreten Handlungsempfehlungen",
      "Konzeption und Einführung eines regelmäßigen Kundenevents inkl. Werbemaßnahmen",
    ],
  },
  {
    category: "work",
    period: "07/2018 — 10/2020",
    role: "Stellvertretender Abteilungsleiter",
    org: "Peek & Cloppenburg KG – Mönchengladbach",
    description:
      "Führungsverantwortung im Tagesgeschäft sowie eigenverantwortliche Leitung eines kompletten Abteilungsumbaus.",
    achievements: [
      "Führung des Teams im Tagesgeschäft sowie Ansprechperson für Mitarbeiter*innen- und Kundenanliegen",
      "Analyse von Verkaufskennzahlen und Optimierung der Warenplatzierung auf Datenbasis",
      "Eigenverantwortliche Leitung eines kompletten Abteilungsumbaus (Flächenkonzept, Warenplatzierung, Teamkoordination)",
    ],
  },
  {
    category: "work",
    period: "12/2016 — 06/2018",
    role: "Modefachverkäufer",
    org: "Peek & Cloppenburg KG – Düsseldorf",
    description: "Verkauf und Kundenberatung mit Auszeichnung für herausragende Leistung.",
    achievements: [
      "Auszeichnung als erfolgreichster Verkäufer 2017",
      "Beförderung zum stellvertretenden Abteilungsleiter",
    ],
  },
  {
    category: "work",
    period: "06/2016 — 11/2016",
    role: "Fachverkäufer Kosmetik & Körperpflege",
    org: "Stadt-Parfümerie Pieper GmbH – Oberhausen",
  },
  // Weiterbildung
  {
    category: "training",
    period: "2024 — heute",
    role: "Selbststudium – Entwicklung & KI-Tools",
    org: "Vollständig selbstorganisiertes Lernen (ca. 500 Std.) neben Vollzeitjob, Familie und Ehrenamt",
    achievements: [
      "Eigenständiger Aufbau einer Automatisierung: Erfassung und Planung von Aufgaben über Telegram",
      "Praktische Softwareentwickler-Grundlagen (HTML, CSS, JavaScript/TypeScript, React) inkl. eigener Projekte",
      "Eigene App zur Trainingsplan-Gestaltung mit Claude Code entwickelt",
      "Grundkenntnisse in Versionsverwaltung (Git/GitHub)",
    ],
  },
  // Ausbildung
  {
    category: "education",
    period: "08/2013 — 06/2016",
    role: "Ausbildung zum Einzelhandelskaufmann",
    org: "Stadt-Parfümerie Pieper GmbH – Oberhausen",
    achievements: ["Gesamtergebnis IHK-Prüfung: 84 / 100"],
  },
  {
    category: "education",
    period: "08/2006 — 06/2013",
    role: "Mittlere Fachoberschulreife",
    org: "Realschule Duisburg Süd",
  },
];

export const cvDownloadHref = "/downloads/lebenslauf.pdf";
