import ProductCard from "./ProductCard";

function ProductSection({ products, selectedProductIds, onAddToOrder }) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-600">
          Featured Arrangements
        </p>
        <h2 className="mt-2 font-heading text-3xl text-olive-900 sm:text-4xl">
          Request an arrangement
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
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
