export interface Skill {
  icon: string;
  title: string;
  text: string;
}

/* Kompetenz-Kacheln im Block "Wie ich arbeite": Titel + kurzer Beschreibungstext. */
export const skills: Skill[] = [
  {
    icon: "messages",
    title: "Zuhören und übersetzen",
    text: "Was Menschen wirklich brauchen herausfinden, auch wenn sie es nicht direkt so sagen, und in klare, umsetzbare Schritte bringen.",
  },
  {
    icon: "layers",
    title: "Strukturieren und organisieren",
    text: "Aus vielen losen Enden ein Vorhaben machen, das Hand und Fuß hat, mit Prioritäten, Zeitplan und dem Blick fürs Ganze.",
  },
  {
    icon: "cpu",
    title: "Digital denken und umsetzen",
    text: "Prozesse nicht nur verwalten, sondern selbst digitalisieren, automatisieren und dabei am Ball bleiben, was neue Tools ermöglichen.",
  },
  {
    icon: "sparkles",
    title: "Mehr tun, als gefordert ist",
    text: "Bedarf erkennen, bevor er angesprochen wird, und von selbst handeln, ob beim Aufbau neuer Fähigkeiten, in der Organisation oder im Umgang mit Menschen, die einen betreffen.",
  },
];

/* Zusammenfassender Fließtext unterhalb der Kacheln. */
export const workProcess =
  "Am Anfang steht immer Zuhören, erst dann weiß ich, worum es wirklich geht. Danach strukturiere ich, was zu tun ist, und setze es Schritt für Schritt um. Und weil kein Plan von Anfang an perfekt ist, justiere ich unterwegs nach, wenn sich zeigt, was besser funktioniert.";
