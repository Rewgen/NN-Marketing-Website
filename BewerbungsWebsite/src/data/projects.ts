export interface Project {
  title: string;
  image: string;
  ausgangslage: string;
  umsetzung: string;
  ergebnis: string;
  nebenerfolg?: string;
}

/*
  Projekte mit Ausgangslage, Umsetzung und Ergebnis. Bilder liegen unter
  public/imagesProjects/ — fehlt eine Datei, erscheint automatisch ein
  Platzhalter.
*/
export const projects: Project[] = [
  {
    title: "Sportabzeichenfest für die Leichtathletik Jugend",
    image: "/imagesProjects/SportsBadge.jpg",
    ausgangslage:
      "Das Deutsche Sportabzeichen abzulegen ist für Kinder oft trocken, wenn es nur nebenbei im Training mitläuft.",
    umsetzung:
      "Ich habe ein eigenes Sportabzeichenfest organisiert, mit Laufzetteln für jedes Kind, klarem Ablauf, Eltern als Helfer und einer richtigen Siegerehrung.",
    ergebnis:
      "Aus einer Pflichtübung ist ein festes Highlight im Trainingsjahr geworden, inzwischen fest etabliert.",
    nebenerfolg:
      "Begonnen mit einer Gruppe und 10 Kindern, heute zwei Gruppen mit insgesamt 35 Kindern.",
  },
  {
    title: "Smartphone-Kurse für Senioren",
    image: "/imagesProjects/smartphoneSeminar.jpg",
    ausgangslage:
      "Viele ältere Menschen trauen sich nicht, ihr Smartphone wirklich zu nutzen, aus Angst, etwas falsch zu machen, oder finden niemanden, der es ihnen in Ruhe erklärt.",
    umsetzung:
      "Ich habe ehrenamtlich und komplett selbst organisiert einen wiederkehrenden Kurs aufgebaut, der Grundlagen ohne Fachjargon erklärt und Raum für individuelle Fragen lässt.",
    ergebnis: "14 Teilnehmende, die dadurch sicherer im digitalen Alltag geworden sind.",
  },
  {
    title: "Eigenständig Programmieren und KI beibringen",
    image: "/imagesProjects/learnToProgram.jpg",
    ausgangslage:
      "Ohne Vorkenntnisse, aber mit dem Ziel, digitale Prozesse nicht nur zu nutzen, sondern selbst zu bauen.",
    umsetzung:
      "Ich habe mir einen eigenen Lernplan geschrieben und mir in rund 500 Stunden neben Job, Familie und Ehrenamt das Programmieren beigebracht. Später bin ich auf KI-gestützte Entwicklung umgestiegen, um schneller und zielgerichteter zu bauen.",
    ergebnis:
      "Eigene Apps (unter anderem ein Zeichenzähler und eine Trainings-App) sowie ein Automatisierungs-Workflow, der Aufgaben aus Telegram automatisch in mein Todo-System plant.",
  },
];
