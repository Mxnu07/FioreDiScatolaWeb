function ProductCard({ product, onAddToOrder, isAdded }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-soft transition hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="space-y-3 p-5">
        <h3 className="font-heading text-2xl text-rose-900">{product.name}</h3>
        <p className="text-sm text-slate-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-rose-700">${product.price}</p>
          <button
            type="button"
            onClick={() => onAddToOrder(product.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              isAdded
                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                : "bg-rose-600 text-white hover:bg-rose-700"
            }`}
          >
            {isAdded ? "Added" : "Add to Order"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
