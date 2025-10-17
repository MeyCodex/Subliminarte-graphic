import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { products, type CatalogProduct } from "@/data/CatalogData";
import Section from "@/components/Section";

function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    CatalogProduct["category"] | "all"
  >("all");
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(
    null
  );

  const categories = [
    { label: "Todos", value: "all" },
    { label: "Textil & Estampados", value: "textil" },
    { label: "Tazas & Sublimación", value: "sublimacion" },
    { label: "Gráfica Vehicular", value: "grafica_vehicular" },
    { label: "Adhesivos", value: "adhesivos" },
  ];

  const filteredProducts = products.filter((product) =>
    selectedCategory === "all" ? true : product.category === selectedCategory
  );

  const openModal = (product: CatalogProduct) => {
    setSelectedProduct(product);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <Section id="catalogo" className="bg-[var(--color-background)]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black uppercase tracking-wider text-foreground mb-2">
          Catálogo
        </h1>
        <p className="text-lg text-muted">
          Explora las posibilidades de personalización.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`text-sm md:text-base px-4 py-2 rounded-full font-semibold border transition-colors ${
              selectedCategory === cat.value
                ? "active filter-button"
                : "text-accent border-accent hover:bg-accent/10"
            }`}
            onClick={() =>
              setSelectedCategory(
                cat.value as CatalogProduct["category"] | "all"
              )
            }
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenModal={openModal}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </Section>
  );
}

export default CatalogPage;
