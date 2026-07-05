export interface EngagementItem {
  icon: string;
  title: string;
  text: string;
}

/*
  Bereich "Neben dem Job": Ehrenamt, Nebentätigkeiten, Interessen und
  Persönliches. Leichtathletik-Training und Handykurse erscheinen hier bewusst
  nur als kurze Faktenzeile — die Geschichten dazu stehen im Bereich "Projekte".
*/
export const volunteering: EngagementItem[] = [
  {
    icon: "medal",
    title: "Leichtathletik-Trainer & Prüfer für das Deutsche Sportabzeichen",
    text: "Übungsleiter-C-Lizenz, zwei Jugendgruppen beim ETuS Wedau.",
  },
  {
    icon: "smartphone",
    title: "Handykurse für Senioren",
    text: "Ehrenamtlich organisierte Smartphone-Kurse.",
  },
  {
    icon: "target",
    title: "Schützenverein",
    text: "Aktives Mitglied im Schützenverein vor Ort.",
  },
  {
    icon: "moon",
    title: "Nachtwache im Fitnessstudio",
    text: "Nebentätigkeit auf Minijob-Basis.",
  },
];

export const interests: string[] = [
  "Calisthenics",
  "Ausdauersport (Marathon in 4:11 Std.)",
  "Bouldern",
  "Technologie & KI",
];

export const personal = "Leidenschaftlicher Vater einer wunderbaren Tochter.";
