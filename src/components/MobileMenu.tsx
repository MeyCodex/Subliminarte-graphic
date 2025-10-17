import { navItems, type NavItem } from "@/data/NavData";
import { socials } from "@/data/SocialsData";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from "framer-motion";
import { FiX } from "react-icons/fi";
import { content } from "@/data/content";

type Page = "landing" | "catalog";
type NavigateFn = (page: Page) => void;

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
  navigate: NavigateFn;
  currentPage: Page;
};

const menuVariants: Variants = {
  closed: {
    y: "-100%",
    transition: {
      type: "tween",
      duration: 0.35,
      ease: "easeOut",
    } as Transition,
  },
  open: {
    y: "0%",
    transition: {
      type: "tween",
      duration: 0.35,
      ease: "easeIn",
      staggerChildren: 0.07,
      delayChildren: 0.1,
    } as Transition,
  },
};

const itemVariants: Variants = {
  closed: { x: -20, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

function MobileMenu({ isOpen, closeMenu, navigate, currentPage }: Props) {
  const handleLinkClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    if (item.isPageLink) {
      navigate(item.page!);
      closeMenu();
    } else {
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
      closeMenu();
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="h-full w-full bg-card/95 backdrop-blur-sm flex flex-col shadow-2xl overflow-y-auto">
            <div className="flex justify-between items-center h-16 px-4 sm:px-6 border-b border-accent/30 flex-shrink-0">
              <span className="text-lg font-bold tracking-widest text-foreground">
                {content.brand.partOne}{" "}
                <span className="text-accent">{content.brand.partTwo}</span>
              </span>
              <button
                onClick={closeMenu}
                aria-label="Cerrar menú"
                className="text-foreground p-2 hover:text-accent transition duration-200"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col flex-grow justify-between items-center py-8 px-4">
              <motion.nav className="flex flex-col w-full">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item)}
                    variants={itemVariants}
                    className="text-2xl font-bold text-foreground hover:bg-muted/10 transition duration-200 py-4 w-full text-center border-b border-border/20"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.nav>
              <motion.div
                className="flex flex-col items-center gap-8"
                variants={itemVariants}
              >
                <div className="flex gap-6">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                    >
                      <social.icon className="w-8 h-8" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
