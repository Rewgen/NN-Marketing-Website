export interface EngagementItem {
  icon: string;
  title: string;
  text: string;
}

export const volunteering: EngagementItem[] = [
  {
    icon: "🏃",
    title: "Sport-Training",
    text: "Ehrenamtliches Training von Jugendgruppen im Verein, mit Übungsleiter-Lizenz.",
  },
  {
    icon: "📱",
    title: "Digitalkurse für Senioren",
    text: "Ehrenamtliche, selbst organisierte Kurse, die älteren Menschen den Umgang mit digitalen Geräten näherbringen.",
  },
  {
    icon: "🌙",
    title: "Nebentätigkeit auf Minijob-Basis",
    text: "Zuverlässige Übernahme von Verantwortung auch außerhalb der Haupttätigkeit.",
  },
];

export const interests: EngagementItem[] = [
  {
    icon: "🏋️",
    title: "Calisthenics",
    text: "Krafttraining mit dem eigenen Körpergewicht.",
  },
  {
    icon: "🏃",
    title: "Ausdauersport",
    text: "Laufen, der Arbeitsweg mit dem Rad und ein Marathon als bisheriges Highlight.",
  },
  {
    icon: "🤖",
    title: "Technologie & KI",
    text: "Aus eigenem Interesse regelmäßige Beschäftigung mit Automatisierung, KI-Agenten und neuen Tools.",
  },
];

export const values: EngagementItem[] = [
  { icon: "", title: "Disziplin", text: "Konsequent bleiben, auch wenn es unbequem wird." },
  { icon: "", title: "Loyalität", text: "Verlässlich sein — für Menschen und für Zusagen." },
  { icon: "", title: "Menschlichkeit", text: "Menschen sehen, zuhören und mitnehmen." },
];
