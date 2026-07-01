export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  nav: NavItem[];
  contact: {
    email: string;
    phone: string;
    location: string;
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
    { label: "Engagement", href: "#engagement" },
    { label: "Kontakt", href: "#contact" },
  ],
  contact: {
    email: "nils_negwer@outlook.de",
    phone: "0176 45 72 0449",
    location: "Duisburg",
    linkedin: "https://www.linkedin.com/",
    cvHref: "/downloads/lebenslauf.pdf",
  },
};
