import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=10", // ✅ Fixed URL
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 40,
      image: "https://picsum.photos/200?random=20", // ✅ Fixed URL
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          {/* Product Image */}
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover rounded mr-4"
            />

            {/* Product Info */}
            <div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | Color: {product.color}
              </p>
              <p className="text-sm text-gray-500">
                Quantity: {product.quantity}
              </p>
            </div>
          </div>

          {/* Price + Delete */}
          <div className="flex items-center gap-6">
            <p className="text-lg font-semibold">${product.price}</p>
            <button className="text-red-500 hover:text-red-700">
              <RiDeleteBin3Line size={22} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
