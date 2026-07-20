import React, { useEffect, useState } from "react";
import api from "../api/axios";

const ProductModal = ({
  closeModal,
  fetchProducts,
  editingProduct,
}) => {
  const [formData, setFormData] = useState({
    productId: "",
    name: "",
    price: "",
    stock: "",
  });

  // ===============================
  // Fill form when editing
  // ===============================
  useEffect(() => {
    if (editingProduct) {
      setFormData({
        productId: editingProduct.productId,
        name: editingProduct.name,
        price: editingProduct.price,
        stock: editingProduct.stock,
      });
    }
  }, [editingProduct]);

  // ===============================
  // Handle Input Change
  // ===============================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ===============================
  // Save Product
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingProduct) {
        // UPDATE
        await api.patch(
          `/products/${editingProduct.productId}`,
          formData
        );

        alert("Product updated successfully");
      } else {
        // CREATE
        await api.post("/products", formData);

        alert("Product added successfully");
      }

      fetchProducts();
      closeModal();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white rounded-lg shadow-lg w-[450px] p-6">

        <h2 className="text-2xl font-bold mb-5 text-center">
          {editingProduct ? "Edit Product" : "Add Product"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Product ID */}

          <div>
            <label className="block mb-1">
              Product ID
            </label>

            <input
              type="text"
              name="productId"
              value={formData.productId}
              onChange={handleChange}
              disabled={editingProduct}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Name */}

          <div>
            <label className="block mb-1">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Price */}

          <div>
            <label className="block mb-1">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Stock */}

          <div>
            <label className="block mb-1">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              {editingProduct
                ? "Update"
                : "Save"}
            </button>

          </div>
        </form>

      </div>
    </div>
  );
};

export default ProductModal;