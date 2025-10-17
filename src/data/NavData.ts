export type Page = "landing" | "catalog";

export interface NavItem {
  name: string;
  href: string;
  isPageLink?: boolean;
  page?: Page;
}

export const navItems: NavItem[] = [
  { name: "Inicio", href: "#inicio", isPageLink: true, page: "landing" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Galería", href: "#galeria" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Ubicación", href: "#ubicacion" },
];
