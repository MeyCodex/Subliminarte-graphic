import { motion, type Variants } from "framer-motion";
import aboutImage from "@/assets/LogoOp.png";
import Section from "@/components/Section";
import { content } from "@/data/content";

const imageVariants: Variants = {
  rest: {
    y: 0,
    filter: "drop-shadow(0 0 0px var(--color-accent))",
  },
  hover: {
    y: -10,
    filter: "drop-shadow(0 0 10px var(--color-accent))",
  },
  tap: {
    scale: 0.95,
    filter: "drop-shadow(0 0 10px var(--color-accent))",
  },
};

function About() {
  return (
    <Section
      id="nosotros"
      className="relative bg-[var(--color-section-bg)] overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="hidden lg:block absolute w-[50rem] h-[50rem] rounded-full bg-accent/10 blur-3xl -left-48 -top-24 opacity-70"></div>
        <div className="hidden lg:block absolute w-[40rem] h-[40rem] rounded-full bg-accent/5 blur-3xl -right-48 -bottom-24 opacity-70"></div>
      </div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={aboutImage}
            alt="Logo Subliminarte Graphic"
            className="max-w-xs sm:max-w-sm w-full cursor-pointer"
            variants={imageVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </motion.div>
        <motion.div
          className="text-center lg:text-left max-w-lg mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-black uppercase tracking-widest text-accent mb-4">
            {content.about.title}
          </h2>
          <p className="text-muted mb-4">{content.about.paragraphOne} </p>
          <p className="text-muted">{content.about.paragraphTwo}</p>
        </motion.div>
      </div>
    </Section>
  );
}

export default About;
