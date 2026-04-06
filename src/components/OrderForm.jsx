import { useMemo, useState } from "react";
import roseFeature from "../assets/fiore-di-scatola/rose_image.png";

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
        "Thank you! We received your order request and will contact you soon to confirm."
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
          <p className="text-sm font-semibold uppercase tracking-wide text-olive-600">
            Order Request
          </p>
          <h2 className="mt-2 font-heading text-3xl text-olive-900">
            Reserve your order
          </h2>
          <p className="mt-4 text-slate-600">
            Choose arrangements, add any notes, and send your request to Fiore di
            Scatola. We&apos;ll get back to you to confirm your order, pickup at
            our Levittown shop, and any special requests.
          </p>

          <div className="mt-6 rounded-2xl bg-olive-50 p-4">
            <p className="font-semibold text-olive-800">Quick Add</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {products.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => onAddProduct(product.id)}
                  className="rounded-full border border-olive-200 bg-white px-3 py-1 text-sm text-olive-700 transition hover:bg-olive-100"
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl shadow-soft ring-1 ring-olive-100">
            <img
              src={roseFeature}
              alt="Signature rose arrangement in Fiore di Scatola hatbox"
              className="aspect-square w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
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
                className="mt-1 w-full rounded-xl border border-olive-200 px-4 py-3 outline-none transition focus:border-olive-400"
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
                className="mt-1 w-full rounded-xl border border-olive-200 px-4 py-3 outline-none transition focus:border-olive-400"
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
              className="mt-1 w-full rounded-xl border border-olive-200 px-4 py-3 outline-none transition focus:border-olive-400"
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Selected products (multi-select)
            <select
              multiple
              value={selectedProductIds}
              onChange={handleManualSelect}
              className="mt-1 h-36 w-full rounded-xl border border-olive-200 px-3 py-2 outline-none transition focus:border-olive-400"
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} (${product.price})
                </option>
              ))}
            </select>
          </label>

          <div className="rounded-2xl border border-olive-100 bg-olive-50 p-4">
            <p className="text-sm font-semibold text-olive-800">Review your selection</p>
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
                      className="font-semibold text-olive-600 hover:text-olive-800"
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
              className="mt-1 w-full rounded-xl border border-olive-200 px-4 py-3 outline-none transition focus:border-olive-400"
            />
          </label>

          {formError && (
            <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
              {formError}
            </p>
          )}
          {formSuccess && (
            <p className="rounded-lg bg-olive-100 px-4 py-2 text-sm text-olive-800">
              {formSuccess}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="w-full rounded-full bg-olive-600 px-6 py-3 font-semibold text-white transition hover:bg-olive-700 disabled:cursor-not-allowed disabled:bg-olive-300"
          >
            {isSending ? "Sending Request..." : "Send Order Request"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default OrderForm;
