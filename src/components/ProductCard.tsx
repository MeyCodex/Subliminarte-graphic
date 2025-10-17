import { motion } from "framer-motion";
import { type CatalogProduct } from "@/data/CatalogData";

type Props = {
  product: CatalogProduct;
  onOpenModal: (product: CatalogProduct) => void;
};

function ProductCard({ product, onOpenModal }: Props) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="bg-card rounded-lg overflow-hidden border border-border/50 cursor-pointer group flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ scale: 1.03, boxShadow: "0 0 10px var(--color-accent)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onOpenModal(product)}
    >
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <span className="absolute top-2 right-2 bg-accent text-card text-xs font-bold px-3 py-1 rounded-full">
          {product.priceEstimate}
        </span>
      </div>

      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold mb-1">{product.name}</h3>
        <p className="text-sm text-muted capitalize">
          {product.category.replace("_", " ")}
        </p>
      </div>

      <div className="p-4 pt-0">
        <button className="w-full bg-accent text-card font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity">
          Ver y cotizar
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
