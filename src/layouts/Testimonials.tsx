import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { testimonials } from "@/data/TestimonialsData";
import { VscQuote } from "react-icons/vsc";
import Section from "@/components/Section";
import { content } from "@/data/content";

function Testimonials() {
  return (
    <Section
      id="testimonios"
      className="bg-[var(--color-section-bg)] overflow-hidden"
    >
      <motion.div
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">
          {content.testimonials.subtitle}
        </p>
        <h2 className="text-3xl font-black text-center mb-4">
          {content.testimonials.title}
        </h2>
        <div className="w-24 h-1 bg-accent/50"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          loop={true}
          modules={[EffectCards]}
          className="w-full max-w-[280px] sm:max-w-[320px] h-[420px] mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-card border border-border p-8"
            >
              <div>
                <VscQuote className="w-8 h-8 mb-4 opacity-30 text-accent" />
                <p className="text-lg italic text-muted">{testimonial.text}</p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={`https://placehold.co/48x48/ff6b00/0d0d0d?text=${testimonial.avatar}`}
                  alt={`Avatar de ${testimonial.author}`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </Section>
  );
}

export default Testimonials;
