import product1 from "@/assets/catalog/EstampadoPolera.jpg";
import product2 from "@/assets/catalog/Tazas.jpg";
import product3 from "@/assets/catalog/Troquelados.jpg";
import product4 from "@/assets/catalog/EstampadoGorro.jpg";
import product5 from "@/assets/catalog/Tazas.jpg";
import product6 from "@/assets/catalog/Viseras.jpg";
import product7 from "@/assets/catalog/ExpositorDos.jpg";
import product8 from "@/assets/catalog/EstampadoPolera.jpg";

export interface CatalogProduct {
  id: number;
  name: string;
  category: "textil" | "sublimación" | "grafica_vehicular" | "adhesivos";
  imageUrl: string;
  price: string;
  description: string;
  priceFixed: boolean;
}

export const products: CatalogProduct[] = [
  {
    id: 1,
    name: "Polera estampada DTF",
    category: "textil",
    imageUrl: product1,
    price: "$15.000 - $25.000",
    priceFixed: false,
    description:
      "Polera 100% algodón, estampada con la técnica DTF (Direct-to-Film). Colores vibrantes y gran durabilidad. Perfecto para logos o diseños complejos.",
  },
  {
    id: 2,
    name: "Taza sublimada",
    category: "sublimación",
    imageUrl: product2,
    price: "$5.000",
    priceFixed: true,
    description:
      "Taza de 11oz de alta calidad, apta para microondas y lavavajillas. Personalización con fotos, textos o diseños completos.",
  },
  {
    id: 3,
    name: "Vinilo troquelado mate",
    category: "adhesivos",
    imageUrl: product3,
    price: "Cotizar por proyecto",
    priceFixed: false,
    description:
      "Adhesivos de vinilo con corte de alta precisión (troquelados), resistentes a la intemperie. Ideales para notebooks, vehículos o decoración.",
  },
  {
    id: 4,
    name: "Gorra sublimada",
    category: "textil",
    imageUrl: product4,
    price: "$12.000",
    priceFixed: true,
    description:
      "Gorra tipo trucker con panel frontal apto para sublimación. Diseños a todo color que no se decoloran con el sol.",
  },
  {
    id: 5,
    name: "Shoperos personalizados",
    category: "sublimación",
    imageUrl: product5,
    price: "$10.000",
    priceFixed: true,
    description:
      "Shoperos de vidrio esmerilado con tu diseño favorito. Perfecto para regalos o merchandising de bares/restaurantes.",
  },
  {
    id: 6,
    name: "Franjas deportivas vehiculares",
    category: "grafica_vehicular",
    imageUrl: product6,
    price: "Cotizar por vehículo",
    priceFixed: false,
    description:
      "Instalación de franjas deportivas en vinilo de alta gama. Aporta un look agresivo y profesional a tu vehículo.",
  },
  {
    id: 7,
    name: "Pendón publicitario 80x180cm",
    category: "adhesivos",
    imageUrl: product7,
    price: "$35.000",
    priceFixed: false,
    description:
      "Pendón publicitario en tela de alta resistencia, con ojetillos para fácil montaje. Incluye diseño básico.",
  },
  {
    id: 8,
    name: "Polerón estampado vinilo",
    category: "textil",
    imageUrl: product8,
    price: "$20.000 - $30.000",
    priceFixed: false,
    description:
      "Polerón de algodón grueso con estampado en vinilo textil de corte. Ideal para diseños de texto o formas simples con acabado mate.",
  },
];
