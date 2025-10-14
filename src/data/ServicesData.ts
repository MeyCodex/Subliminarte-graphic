import { type IconType } from "react-icons";
import { LuShirt, LuCupSoda, LuSticker, LuCar } from "react-icons/lu";

export interface Service {
  icon: IconType;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: LuShirt,
    title: "Estampado textil",
    description:
      "Personalización de poleras y polerones con diseños duraderos y de alta calidad.",
  },
  {
    icon: LuCupSoda,
    title: "Sublimación general",
    description:
      "Artículos promocionales y regalos únicos como tazas, shoperos, jarros y más.",
  },
  {
    icon: LuCar,
    title: "Gráfica vehicular",
    description:
      "Wrap de piezas, ahumado de focos, franjas laterales, viseras y stickers tipo barro.",
  },
  {
    icon: LuSticker,
    title: "Adhesivos y publicidad",
    description:
      "Vinilos decorativos, holográficos, pendones y lienzos con ojetillos.",
  },
];
