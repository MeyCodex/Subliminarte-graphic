import product1 from "@/assets/catalog/Tazas.jpg";
import product2 from "@/assets/catalog/Tazas.jpg";
import product3 from "@/assets/catalog/Tazas.jpg";
import product4 from "@/assets/catalog/Tazas.jpg";
import product5 from "@/assets/catalog/Tazas.jpg";
import product6 from "@/assets/catalog/Tazas.jpg";
import product7 from "@/assets/catalog/Tazas.jpg";
import product8 from "@/assets/catalog/Tazas.jpg";

export interface CatalogProduct {
  id: number;
  name: string;
  category: "textil" | "sublimacion" | "grafica_vehicular" | "adhesivos";
  imageUrl: string;
  priceEstimate: string;
  description: string;
}

export const products: CatalogProduct[] = [
  {
    id: 1,
    name: "Polera estampada DTF",
    category: "textil",
    imageUrl: product1,
    priceEstimate: "$15.000 - $25.000",
    description:
      "Polera 100% algodón, estampada con la técnica DTF (Direct-to-Film). Colores vibrantes y gran durabilidad. Perfecto para logos o diseños complejos.",
  },
  {
    id: 2,
    name: "Taza sublimada",
    category: "sublimacion",
    imageUrl: product2,
    priceEstimate: "$5.000",
    description:
      "Taza de 11oz de alta calidad, apta para microondas y lavavajillas. Personalización con fotos, textos o diseños completos.",
  },
  {
    id: 3,
    name: "Vinilo troquelado mate",
    category: "adhesivos",
    imageUrl: product3,
    priceEstimate: "Desde $3.000 / unidad",
    description:
      "Adhesivos de vinilo con corte de alta precisión (troquelados), resistentes a la intemperie. Ideales para notebooks, vehículos o decoración.",
  },
  {
    id: 4,
    name: "Gorra sublimada",
    category: "textil",
    imageUrl: product4,
    priceEstimate: "$12.000",
    description:
      "Gorra tipo trucker con panel frontal apto para sublimación. Diseños a todo color que no se decoloran con el sol.",
  },
  {
    id: 5,
    name: "Set de shoperos personalizados",
    category: "sublimacion",
    imageUrl: product5,
    priceEstimate: "$10.000 / unidad",
    description:
      "Shoperos de vidrio esmerilado con tu diseño favorito. Perfecto para regalos o merchandising de bares/restaurantes.",
  },
  {
    id: 6,
    name: "Franjas deportivas vehiculares",
    category: "grafica_vehicular",
    imageUrl: product6,
    priceEstimate: "Cotizar por vehículo",
    description:
      "Instalación de franjas deportivas en vinilo de alta gama. Aporta un look agresivo y profesional a tu vehículo.",
  },
  {
    id: 7,
    name: "Pendón publicitario 80x180cm",
    category: "adhesivos",
    imageUrl: product7,
    priceEstimate: "$35.000",
    description:
      "Pendón publicitario en tela de alta resistencia, con ojetillos para fácil montaje. Incluye diseño básico.",
  },
  {
    id: 8,
    name: "Polerón estampado vinilo",
    category: "textil",
    imageUrl: product8,
    priceEstimate: "$20.000 - $30.000",
    description:
      "Polerón de algodón grueso con estampado en vinilo textil de corte. Ideal para diseños de texto o formas simples con acabado mate.",
  },
];
