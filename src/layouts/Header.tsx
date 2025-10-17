import MobileMenu from "@/components/MobileMenu";
import NavItems from "@/components/NavItems";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { socials } from "@/data/SocialsData";
import { content } from "@/data/content";

type Page = "landing" | "catalog";
type NavigateFn = (page: Page) => void;

type Props = {
  navigate: NavigateFn;
  currentPage: Page;
};

function Header({ navigate, currentPage }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const whatsappLink = socials.find((social) => social.name === "WhatsApp");

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm shadow-xl border-b border-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <button
            onClick={() => navigate("landing")}
            className="flex items-center space-x-2 flex-shrink-0 cursor-pointer"
          >
            <span className="text-lg sm:text-2xl font-black tracking-widest text-foreground uppercase">
              {content.brand.partOne}{" "}
              <span className="text-accent">{content.brand.partTwo}</span>
            </span>
          </button>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <NavItems navigate={navigate} currentPage={currentPage} />
            {whatsappLink && (
              <a
                href={whatsappLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-foreground py-2 px-4 rounded-full font-bold hover:bg-opacity-80 transition duration-300 hidden sm:inline-flex items-center space-x-2 shadow-lg shadow-accent/20 text-sm"
              >
                <whatsappLink.icon className="w-4 h-4 text-card" />
                <span className="text-card">{content.header.cta}</span>
              </a>
            )}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-foreground p-2"
              aria-label="Abrir menú móvil"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        closeMenu={closeMenu}
        navigate={navigate}
        currentPage={currentPage}
      />
    </>
  );
}

export default Header;
