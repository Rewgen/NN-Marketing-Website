# nilsnegwer.de — Persönliche Website

Persönliche Marketing- und Bewerbungswebsite von Nils Negwer, gebaut mit
[Astro](https://astro.build) und [Tailwind CSS 4](https://tailwindcss.com).

## Konzept

Die Startseite (`/`) ist die allgemeine Website. Für einzelne Bewerbungen können
eigene Unterseiten (z. B. `/firma-xy`) angelegt werden, die die wiederverwendbare
"Wirbelsäule" (`src/components/Portfolio.astro`) rendern und per Props oder
`data-theme` eigene Inhalte, Bilder und Farben ergänzen — ohne das Grundgerüst
zu duplizieren.

## Struktur

```text
src/
├── pages/index.astro        Startseite
├── layouts/BaseLayout.astro Grundlayout (Fonts, Navigation, Footer, Scripts)
├── components/
│   ├── Portfolio.astro      Wiederverwendbare Sektions-Abfolge
│   ├── sections/            Hero, About, Skills, Projects, Resume, Engagement, Contact
│   └── ui/                  Button, Card, Icon, Modal, Section, ...
├── data/                    Alle Inhalte (site, skills, projects, resume, engagement)
└── styles/global.css        Design-Tokens & Themes (data-theme)

public/
├── downloads/lebenslauf.pdf Lebenslauf-Download
├── imagesMyself/            Porträtfotos (Hero-Slideshow)
└── projekte/                Projektbilder (Platzhalter, bis Datei existiert)
```

## Befehle

| Befehl            | Aktion                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Abhängigkeiten installieren                |
| `npm run dev`     | Dev-Server unter `localhost:4321` starten  |
| `npm run build`   | Produktions-Build nach `./dist/`           |
| `npm run preview` | Build lokal testen                         |

## Deployment

Netlify (siehe `netlify.toml`). Der Hero-Bereich ist öffentlich; alles darunter
wird clientseitig über ein Passwort-Gate (`src/components/PasswordGate.astro`)
freigeschaltet. Das ist Sichtschutz, keine echte Zugriffskontrolle — für harten
Schutz die auskommentierte Edge Function in `netlify.toml` reaktivieren
(`netlify/edge-functions/auth.ts`, Umgebungsvariable `SITE_PASSWORD`).
`public/robots.txt` steht aktuell auf `Disallow: /`.
