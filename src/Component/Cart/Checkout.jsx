import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "L",
      color: "White",
      quantity: 1,
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [CheckoutId, setCheckoutId] = useState(null);
  const [showPayment, setShowPayment] = useState(false); // 👈 Step control
  const [ShippingAddress, setshippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleContinue = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const allFieldsFilled = Object.values(ShippingAddress).every(
      (val) => val.trim() !== ""
    );

    if (!allFieldsFilled) {
      alert("Please fill all shipping details before continuing.");
      return;
    }

    setShowPayment(true); // 👈 Move to payment step
  };

  const handleCashOnDelivery = () => {
    setCheckoutId(123456789);
    alert("Order placed successfully with Cash on Delivery!");
    navigate("/order-success");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>

        {/* Step 1: Shipping Form */}
        {!showPayment ? (
          <form onSubmit={handleContinue}>
            <h3 className="text-lg mb-4">Contact Details</h3>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value="user@example.com"
                className="w-full p-2 border rounded"
                disabled
              />
            </div>

            <h3 className="text-lg mb-4">Delivery</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  value={ShippingAddress.firstName}
                  onChange={(e) =>
                    setshippingAddress({
                      ...ShippingAddress,
                      firstName: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={ShippingAddress.lastName}
                  onChange={(e) =>
                    setshippingAddress({
                      ...ShippingAddress,
                      lastName: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                value={ShippingAddress.address}
                onChange={(e) =>
                  setshippingAddress({
                    ...ShippingAddress,
                    address: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  value={ShippingAddress.city}
                  onChange={(e) =>
                    setshippingAddress({
                      ...ShippingAddress,
                      city: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Postal Code</label>
                <input
                  type="text"
                  value={ShippingAddress.postalCode}
                  onChange={(e) =>
                    setshippingAddress({
                      ...ShippingAddress,
                      postalCode: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                value={ShippingAddress.country}
                onChange={(e) =>
                  setshippingAddress({
                    ...ShippingAddress,
                    country: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                value={ShippingAddress.phone}
                onChange={(e) =>
                  setshippingAddress({
                    ...ShippingAddress,
                    phone: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Step 1 Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
            >
              Continue to Payment
            </button>
          </form>
        ) : (
          // Step 2: Payment Method
          <div>
            <h3 className="text-lg mb-6 font-medium">Select Payment Method</h3>
            <div className="border p-4 rounded mb-4">
              <label className="flex items-center space-x-3">
                <input type="radio" checked readOnly />
                <span>Cash on Delivery</span>
              </label>
            </div>
            <button
              onClick={handleCashOnDelivery}
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
            >
              Confirm Order (COD)
            </button>
          </div>
        )}
      </div>

      {/* Right Section - Order Summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {cart.products.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-4 mb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded object-cover"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.size} | {item.color}
                </p>
              </div>
            </div>
            <p className="font-semibold">${item.price}</p>
          </div>
        ))}

        <div className="flex justify-between text-lg font-semibold mt-4">
          <span>Total:</span>
          <span>${cart.totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
