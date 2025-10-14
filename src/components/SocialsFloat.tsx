import { motion } from "framer-motion";
import { socials } from "@/data/SocialsData";

function SocialsFloat() {
  return (
    <motion.div
      className="hidden md:flex flex-col gap-2 fixed top-1/2 -translate-y-1/2 right-5 z-40 bg-card/70 backdrop-blur-sm p-2 rounded-full border border-accent/30"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visita nuestro ${social.name}`}
          className="p-2 rounded-full text-muted hover:text-accent hover:bg-accent/10 transition-all duration-300"
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </motion.div>
  );
}

export default SocialsFloat;
