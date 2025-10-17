import { useState, useEffect, useCallback } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { products, type CatalogProduct } from "@/data/CatalogData";
import Section from "@/components/Section";
import { content } from "@/data/content";

function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    CatalogProduct["category"] | "all"
  >("all");
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(
    null
  );
  const categories = content.catalog.categories;
  const filteredProducts = products.filter((product) =>
    selectedCategory === "all" ? true : product.category === selectedCategory
  );

  const openModal = (product: CatalogProduct) => {
    setSelectedProduct(product);
    document.body.classList.add("overflow-hidden");
  };
  const closeModal = useCallback(() => {
    setSelectedProduct(null);
    document.body.classList.remove("overflow-hidden");
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      closeModal();
    };
    if (selectedProduct) {
      window.history.pushState(null, "", window.location.pathname);
      window.addEventListener("popstate", handlePopState);
    }
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedProduct, closeModal]);

  return (
    <Section id="catalogo" className="bg-[var(--color-background)] !pt-8 pb-18">
      <div className="flex gap-4 mb-8 lg:mb-12 overflow-x-auto whitespace-nowrap lg:flex-wrap lg:justify-center">
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
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            window.history.back();
          }}
        />
      )}
    </Section>
  );
}

export default CatalogPage;
