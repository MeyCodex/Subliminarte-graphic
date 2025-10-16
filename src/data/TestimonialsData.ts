export interface Testimonial {
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "La calidad del estampado es increíble. Pedimos poleras para nuestra banda y quedaron espectaculares. ¡Totalmente recomendados!",
    author: "Cliente 1",
    role: "Proyecto de merchandising",
    avatar: "C1",
  },
  {
    text: "Necesitaba adhesivos para mi pyme y el resultado superó mis expectativas. El corte es perfecto y los colores son muy vivos.",
    author: "Cliente 2",
    role: "Adhesivos para Pyme",
    avatar: "C2",
  },
  {
    text: "El trabajo en mi vehículo quedó impecable. La atención al detalle en el wrap de las piezas fue de primer nivel. Muy recomendado.",
    author: "Cliente 3",
    role: "Gráfica Vehicular",
    avatar: "C3",
  },
  {
    text: "¡Las tazas personalizadas fueron el regalo perfecto! La impresión es de alta calidad y muy duradera.",
    author: "Cliente 4",
    role: "Regalos personalizados",
    avatar: "C4",
  },
];
