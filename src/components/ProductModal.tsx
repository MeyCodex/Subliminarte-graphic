import { type CatalogProduct } from "@/data/CatalogData";
import { FiX } from "react-icons/fi";
import { createPortal } from "react-dom";
import { socials } from "@/data/SocialsData";
import { content } from "@/data/content";
import { BsTag, BsTagFill } from "react-icons/bs";

type Props = {
  product: CatalogProduct;
  onClose: () => void;
};

function ProductModal({ product, onClose }: Props) {
  const whatsappLink = socials.find((social) => social.name === "WhatsApp");
  const handleCotizar = () => {
    const message = `Hola, me gustaría cotizar el producto: ${product.name} ¿Podrían darme más detalles?`;
    if (whatsappLink) {
      const url = `${whatsappLink.href}&text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      onClose();
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-card w-full max-w-lg rounded-xl shadow-2xl flex flex-col">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-foreground p-2 rounded-full hover:bg-border/50 transition-colors cursor-pointer"
            aria-label="Cerrar detalles del producto"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <div className="px-6 pb-6 pt-4">
          <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-muted mb-4">{product.description}</p>
          <div className="flex flex-col bg-accent/10 p-4 rounded-lg mb-6">
            <span className="text-sm font-semibold text-foreground flex items-center gap-2">
              {product.priceFixed ? (
                <>
                  <BsTagFill className="text-accent" />
                  {content.catalog.modal.fixedPrice}
                </>
              ) : (
                <>
                  <BsTag className="text-accent" />
                  {content.catalog.modal.priceLabel}
                </>
              )}
            </span>
            <span className="text-accent font-bold text-2xl sm:text-3xl mt-1">
              {product.price}
            </span>
          </div>
          <button
            onClick={handleCotizar}
            className="w-full bg-accent text-card font-bold py-3 rounded-lg hover:bg-opacity-90 transition-opacity cursor-pointer"
          >
            {content.catalog.modal.cta}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ProductModal;
