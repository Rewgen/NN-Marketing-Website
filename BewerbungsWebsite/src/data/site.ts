export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  nav: NavItem[];
  contact: {
    email: string;
    linkedin: string;
    cvHref: string;
  };
}

/* Zentrale Stammdaten der Website. Platzhalter bitte später ersetzen. */
export const site: SiteConfig = {
  name: "Nils Negwer",
  nav: [
    { label: "Über mich", href: "#about" },
    { label: "Kompetenzen", href: "#skills" },
    { label: "Arbeitsweise", href: "#workstyle" },
    { label: "Lebenslauf", href: "#resume" },
    { label: "Kontakt", href: "#contact" },
  ],
  contact: {
    email: "hallo@nilsnegwer.de",
    linkedin: "https://nilsnegwer-fuer-lsb.de/",
    cvHref: "/downloads/lebenslauf.pdf",
  },
};
