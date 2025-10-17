import { motion } from "framer-motion";
import { services } from "@/data/ServicesData";
import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";
import { content } from "@/data/content";
import { useState } from "react";

function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleCardFlip = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="servicios" className="bg-[var(--color-background)]">
      <motion.div
        className="flex items-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-px flex-grow bg-accent/30"></div>
        <h2 className="text-3xl font-black uppercase tracking-widest text-center">
          {content.services.title}
        </h2>
        <div className="h-px flex-grow bg-accent/30"></div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            isFlipped={activeIndex === index}
            onFlip={() => handleCardFlip(index)}
          />
        ))}
      </motion.div>
    </Section>
  );
}

export default Services;
