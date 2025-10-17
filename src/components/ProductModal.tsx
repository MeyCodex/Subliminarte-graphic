import { type CatalogProduct } from "@/data/CatalogData";
import { FiX, FiCheckCircle } from "react-icons/fi";
import { createPortal } from "react-dom";

type Props = {
  product: CatalogProduct;
  onClose: () => void;
};

function ProductModal({ product, onClose }: Props) {
  const handleCotizar = () => {
    const message = `Hola, me gustaría cotizar el producto: ${product.name} ¿Podrían darme más detalles?`;
    const whatsappNumber = "56932844503";
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    onClose();
  };
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-card w-full max-w-lg rounded-xl shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-foreground p-2 rounded-full hover:bg-border/50 transition-colors"
          aria-label="Cerrar detalles del producto"
        >
          <FiX className="w-6 h-6" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>

          <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-sm text-muted mb-4">{product.description}</p>

          <div className="flex justify-between items-center bg-accent/10 p-3 rounded-lg mb-6">
            <span className="font-semibold text-foreground flex items-center gap-2">
              <FiCheckCircle className="text-accent" /> Precio estimado:
            </span>
            <span className="text-accent font-bold text-xl">
              {product.priceEstimate}
            </span>
          </div>

          <button
            onClick={handleCotizar}
            className="w-full bg-accent text-card font-bold py-3 rounded-lg hover:bg-opacity-90 transition-opacity"
          >
            Cotizar por whatsApp
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ProductModal;
