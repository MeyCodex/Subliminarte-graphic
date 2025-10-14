import { navItems, type NavItem } from "@/data/NavData";

type Props = {
  onItemClick?: () => void;
};

function NavItems({ onItemClick }: Props) {
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
            onClick={onItemClick}
            className="text-foreground hover:text-accent transition duration-200 font-medium tracking-wide"
          >
            {item.name}
          </a>
        ))}
    </nav>
  );
}

export default NavItems;
