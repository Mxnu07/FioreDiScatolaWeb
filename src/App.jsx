import { useState } from "react";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OrderForm from "./components/OrderForm";
import ProductSection from "./components/ProductSection";
import { products } from "./data/products";

function App() {
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const addProductToOrder = (productId) => {
    setSelectedProductIds((prev) =>
      prev.includes(productId) ? prev : [...prev, productId]
    );
  };

  const removeProductFromOrder = (productId) => {
    setSelectedProductIds((prev) => prev.filter((id) => id !== productId));
  };

  return (
    <div className="min-h-screen bg-olive-50">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProductSection
          products={products}
          selectedProductIds={selectedProductIds}
          onAddToOrder={addProductToOrder}
        />
        <OrderForm
          products={products}
          selectedProductIds={selectedProductIds}
          onAddProduct={addProductToOrder}
          onRemoveProduct={removeProductFromOrder}
          onSelectedProductsChange={setSelectedProductIds}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
