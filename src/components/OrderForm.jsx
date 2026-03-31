import { useMemo, useState } from "react";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  notes: "",
};

function OrderForm({
  products,
  selectedProductIds,
  onAddProduct,
  onRemoveProduct,
  onSelectedProductsChange,
}) {
  const [formValues, setFormValues] = useState(initialForm);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [isSending, setIsSending] = useState(false);

  const selectedProducts = useMemo(
    () => products.filter((product) => selectedProductIds.includes(product.id)),
    [products, selectedProductIds]
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleManualSelect = (event) => {
    const selectedIds = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    onSelectedProductsChange(selectedIds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (
      !formValues.fullName.trim() ||
      !formValues.phone.trim() ||
      !formValues.email.trim()
    ) {
      setFormError("Please complete full name, phone number, and email.");
      return;
    }

    if (selectedProductIds.length === 0) {
      setFormError("Please select at least one arrangement.");
      return;
    }

    setIsSending(true);

    try {
      const payload = {
        ...formValues,
        selectedProducts: selectedProducts.map((p) => p.name),
      };

      // Mock email request call. Replace this with EmailJS/Formspree/Resend/API.
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.info("Order request payload", payload);

      setFormSuccess(
        "Your order request was sent successfully. We will confirm details by email soon."
      );
      setFormValues(initialForm);
      onSelectedProductsChange([]);
    } catch {
      setFormError("Unable to send request right now. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="order" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-soft lg:grid-cols-5 lg:p-10">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">
            Order Request
          </p>
          <h2 className="mt-2 font-heading text-3xl text-rose-900">
            Reserve your bouquet
          </h2>
          <p className="mt-4 text-slate-600">
            Select products below, add personal notes, and send your request.
            We will email you a confirmation with pickup or delivery details.
          </p>

          <div className="mt-6 rounded-2xl bg-rose-50 p-4">
            <p className="font-semibold text-rose-800">Quick Add</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {products.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => onAddProduct(product.id)}
                  className="rounded-full border border-rose-200 bg-white px-3 py-1 text-sm text-rose-700 transition hover:bg-rose-100"
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <form className="space-y-4 lg:col-span-3" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Full name
              <input
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-xl border border-rose-200 px-4 py-3 outline-none transition focus:border-rose-400"
                placeholder="Your full name"
              />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Phone number
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-xl border border-rose-200 px-4 py-3 outline-none transition focus:border-rose-400"
                placeholder="+1 234 567 8900"
              />
            </label>
          </div>

          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-xl border border-rose-200 px-4 py-3 outline-none transition focus:border-rose-400"
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Selected products (multi-select)
            <select
              multiple
              value={selectedProductIds}
              onChange={handleManualSelect}
              className="mt-1 h-36 w-full rounded-xl border border-rose-200 px-3 py-2 outline-none transition focus:border-rose-400"
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} (${product.price})
                </option>
              ))}
            </select>
          </label>

          <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
            <p className="text-sm font-semibold text-rose-800">Review your selection</p>
            {selectedProducts.length === 0 ? (
              <p className="mt-2 text-sm text-slate-500">No products selected yet.</p>
            ) : (
              <ul className="mt-3 flex flex-wrap gap-2">
                {selectedProducts.map((product) => (
                  <li
                    key={product.id}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm text-slate-700"
                  >
                    {product.name}
                    <button
                      type="button"
                      onClick={() => onRemoveProduct(product.id)}
                      className="font-semibold text-rose-600 hover:text-rose-800"
                      aria-label={`Remove ${product.name}`}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <label className="block text-sm font-medium text-slate-700">
            Additional requests
            <textarea
              name="notes"
              value={formValues.notes}
              onChange={handleInputChange}
              rows={4}
              placeholder="Card message, preferred colors, delivery notes, or custom requests..."
              className="mt-1 w-full rounded-xl border border-rose-200 px-4 py-3 outline-none transition focus:border-rose-400"
            />
          </label>

          {formError && (
            <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
              {formError}
            </p>
          )}
          {formSuccess && (
            <p className="rounded-lg bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
              {formSuccess}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="w-full rounded-full bg-rose-600 px-6 py-3 font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-rose-300"
          >
            {isSending ? "Sending Request..." : "Send Order Request"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default OrderForm;
