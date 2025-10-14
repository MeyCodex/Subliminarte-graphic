import { motion } from "framer-motion";
import { galleryItems } from "@/data/GalleryData";
import { socials } from "@/data/SocialsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Section from "@/components/Section";
import { content } from "@/data/content";

function Gallery() {
  const instagramLink = socials.find((social) => social.name === "Instagram");

  return (
    <Section id="galeria" className="bg-[var(--color-background)]">
      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-black uppercase tracking-widest text-center mb-4">
          {content.gallery.title}
        </h2>
        <div className="w-24 h-1 bg-accent"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {galleryItems.map((imageSrc, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={imageSrc}
                  alt={`Trabajo de galería ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <a
            href={instagramLink?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-card font-bold py-3 px-8 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            {content.gallery.cta}
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

export default Gallery;
