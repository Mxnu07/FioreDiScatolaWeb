import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { CATALOG_CATEGORIES } from "../data/products";

function ProductSection({ products, selectedProductIds, onAddToOrder }) {
  const [activeCategory, setActiveCategory] = useState(CATALOG_CATEGORIES[0]);

  const visibleProducts = useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [products, activeCategory]
  );

  return (
    <section id="catalog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-600">
          Our Catalog
        </p>
        <h2 className="mt-2 font-heading text-3xl text-olive-900 sm:text-4xl">
          Browse Our Collections
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Explore our floral catalog by category and add pieces to your order
          request when you are ready.
        </p>
      </div>

      <nav
        className="mb-10 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:justify-center [&::-webkit-scrollbar]:hidden"
        aria-label="Catalog categories"
      >
        {CATALOG_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-left text-sm font-medium transition ${
                isActive
                  ? "border-olive-600 bg-olive-600 text-white shadow-soft"
                  : "border-olive-200/90 bg-white/85 text-olive-800 hover:border-olive-300 hover:bg-olive-50/90"
              }`}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </nav>

      <div
        key={activeCategory}
        className="animate-catalog-in grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToOrder={onAddToOrder}
            isAdded={selectedProductIds.includes(product.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
