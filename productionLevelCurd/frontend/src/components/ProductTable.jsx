import React from "react";

const ProductTable = ({
  products,
  loading,
  onEdit,
  onDelete,
}) => {
  if (loading) {
    return (
      <h2 className="text-center text-xl font-semibold mt-10">
        Loading...
      </h2>
    );
  }

  if (products.length === 0) {
    return (
      <h2 className="text-center text-red-500 text-xl mt-10">
        No Products Found
      </h2>
    );
  }

  return (
    <div className="overflow-x-auto">

      <table className="min-w-full border border-gray-300">

        <thead className="bg-sky-600 text-white">

          <tr>

            <th className="border px-4 py-3">
              Product ID
            </th>

            <th className="border px-4 py-3">
              Name
            </th>

            <th className="border px-4 py-3">
              Price
            </th>

            <th className="border px-4 py-3">
              Stock
            </th>

            <th className="border px-4 py-3">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product.productId}
              className="text-center hover:bg-gray-100"
            >

              <td className="border px-4 py-3">
                {product.productId}
              </td>

              <td className="border px-4 py-3">
                {product.name}
              </td>

              <td className="border px-4 py-3">
                ${product.price}
              </td>

              <td className="border px-4 py-3">
                {product.stock}
              </td>

              <td className="border px-4 py-3">

                <button
                  onClick={() => onEdit(product)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(product.productId)
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ProductTable;