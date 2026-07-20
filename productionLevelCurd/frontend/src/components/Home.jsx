import React, { useEffect, useState } from "react";
import api from "../api/axios";
import ProductModal from "./ProductModal";
import ProductTable from "./ProductTable";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);

  // ===========================
  // Fetch All Products
  // ===========================
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await api.get("/products");

      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ===========================
  // Open Add Modal
  // ===========================
  const openAddModal = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  // ===========================
  // Open Edit Modal
  // ===========================
  const openEditModal = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  // ===========================
  // Delete Product
  // ===========================
  const deleteProduct = async (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${productId}`);

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // ===========================
  // Search
  // ===========================
  const filteredProducts = products.filter((product) =>
    product.productId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto mt-10">

      <h1 className="text-4xl font-bold text-center mb-8">
        Product CRUD
      </h1>

      <div className="flex justify-between mb-6">

        <input
          type="text"
          placeholder="Search by Product ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg w-80"
        />

        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Add Product
        </button>

      </div>

      <ProductTable
        products={filteredProducts}
        loading={loading}
        onEdit={openEditModal}
        onDelete={deleteProduct}
      />

      {showModal && (
        <ProductModal
          editingProduct={editingProduct}
          fetchProducts={fetchProducts}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Home;