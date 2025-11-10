import { motion } from "framer-motion";
import { FiClock, FiMapPin } from "react-icons/fi";
import Section from "@/components/Section";
import { content } from "@/data/content";

function Location() {
  return (
    <Section id="ubicacion" className="bg-[var(--color-background)]">
      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-black uppercase tracking-widest text-center text-accent mb-4">
          {content.location.title}
        </h2>
        <div className="w-24 h-1 bg-accent/30"></div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiClock className="text-accent" />
              {content.location.hoursTitle}
            </h3>
            {content.location.hours.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-border/50 py-2"
              >
                <span>{item.day}</span>
                <span
                  className={
                    item.time === "CERRADO"
                      ? "font-semibold text-red-500"
                      : "font-semibold"
                  }
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FiMapPin className="text-accent" />
              {content.location.addressTitle}
            </h3>
            <p className="text-muted">{content.location.address}</p>
          </div>
        </div>
        <div className="w-full h-80 lg:h-full rounded-2xl overflow-hidden border-4 border-accent/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1452.4436541252128!2d-70.69069032629406!3d-30.022147005827893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96901ba723dd1fa9%3A0xb7c9160ceda69c0c!2sSubliminarteGraphic!5e0!3m2!1ses!2scl!4v1762797271975!5m2!1ses!2scl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </Section>
  );
}

export default Location;
