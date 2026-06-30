export interface Project {
  title: string;
  image: string;
  note?: string;
  href?: string;
}

/*
  Beispiel-Projekte. Bilder einfach unter public/projekte/ ablegen — sobald die
  Datei existiert, wird sie automatisch statt des Platzhalters angezeigt.
*/
export const projects: Project[] = [
  {
    title: "Handykurs für Senioren",
    image: "/projekte/handykurs-senioren.jpg",
  },
  {
    title: "Veranstaltungen & Leichtathletik-Training",
    image: "/projekte/leichtathletik.jpg",
  },
  {
    title: "Digitalisierung lernen",
    image: "/projekte/digitalisierung-lernen.jpg",
  },
];
