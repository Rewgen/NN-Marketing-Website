export interface WorkStep {
  step: string;
  title: string;
  description: string;
}

export const workStyle: WorkStep[] = [
  {
    step: "01",
    title: "Verstehen",
    description: "Zuhören, den Kontext erfassen und die richtige Frage stellen.",
  },
  {
    step: "02",
    title: "Strukturieren",
    description: "Komplexes ordnen, Prioritäten setzen und Wege klar machen.",
  },
  {
    step: "03",
    title: "Umsetzen",
    description: "Verbindlich liefern und die beteiligten Menschen mitnehmen.",
  },
  {
    step: "04",
    title: "Wirken",
    description: "Ergebnisse sichern, daraus lernen und kontinuierlich verbessern.",
  },
];
