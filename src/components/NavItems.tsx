import { navItems, type NavItem } from "@/data/NavData";

type Page = "landing" | "catalog";
type NavigateFn = (page: Page) => void;

type Props = {
  navigate: NavigateFn;
  currentPage: Page;
};

function NavItems({ navigate, currentPage }: Props) {
  const handleLinkClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    if (currentPage !== "landing") {
      navigate("landing");
      setTimeout(() => {
        const section = document.querySelector(item.href);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.querySelector(item.href);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:flex space-x-6">
      {navItems
        .filter(
          (item) => item.name !== "Testimonios" && item.name !== "Nosotros"
        )
        .map((item: NavItem) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleLinkClick(e, item)}
            className="text-foreground hover:text-accent transition duration-200 font-medium tracking-wide cursor-pointer"
          >
            {item.name}
          </a>
        ))}
    </nav>
  );
}

export default NavItems;
