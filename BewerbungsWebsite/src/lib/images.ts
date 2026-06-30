import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

export interface GalleryImage {
  src: string;
  alt: string;
}

/*
  Liest alle Bilder aus public/imagesMyself zur Build-/Renderzeit ein.
  me.png ist immer das Standardbild und steht an erster Stelle — die Galerie
  springt beim Öffnen automatisch dorthin zurück. Neue Bilder im Ordner
  erscheinen automatisch, ohne Code-Änderung.
*/
export function getMyselfImages(): GalleryImage[] {
  const dir = join(process.cwd(), "public", "imagesMyself");
  const exts = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

  let files: string[] = [];
  if (existsSync(dir)) {
    files = readdirSync(dir).filter((f) =>
      exts.has(f.slice(f.lastIndexOf(".")).toLowerCase())
    );
  }

  files.sort((a, b) => {
    if (a.toLowerCase() === "me.png") return -1;
    if (b.toLowerCase() === "me.png") return 1;
    return a.localeCompare(b);
  });

  if (files.length === 0) files = ["me.png"];

  return files.map((f) => ({ src: `/imagesMyself/${f}`, alt: "Nils Negwer" }));
}
