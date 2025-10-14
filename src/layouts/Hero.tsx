import { HexagonBackground } from "@/components/ui/HexagonBackground";
import heroImage from "@/assets/Subli.png";
import { motion, type Variants } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { content } from "@/data/content";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-4rem)] flex items-center"
    >
      <HexagonBackground className="absolute inset-0" hexagonMargin={1.5} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide"
              variants={titleVariants}
            >
              {content.hero.title.map((word, index) => (
                <span
                  key={`${word.word}-${index}`}
                  className="inline-block overflow-hidden pb-2"
                >
                  <motion.span
                    className="inline-block"
                    variants={wordVariants}
                    style={{
                      color: word.isAccent ? "var(--color-accent)" : "inherit",
                    }}
                  >
                    {word.word}&nbsp;{" "}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-muted"
              variants={itemVariants}
            >
              {content.hero.subtitle}
            </motion.p>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <a
                href="#servicios"
                className="mt-8 inline-block bg-accent text-card font-bold py-3 px-8 rounded-lg"
              >
                {content.hero.cta}
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:flex justify-center items-center"
            variants={imageVariants}
          >
            <motion.div
              className="relative w-full max-w-md"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-accent rounded-2xl transform rotate-3"></div>

              <div className="relative z-10 border-4 border-accent bg-card rounded-2xl p-2 transform -rotate-3">
                <img
                  src={heroImage}
                  alt="Imagen sobre sublimación"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Flecha */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <a href="#servicios" aria-label="Ir a la siguiente sección">
          <FiArrowDown className="w-8 h-8 text-muted hover:text-accent transition-colors" />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
