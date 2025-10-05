import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1", // ✅ Fixed URL
    },
    {
      name: "Casual Sneakers",
      size: "L",
      color: "White",
      quantity: 1,
      price: 75,
      image: "https://picsum.photos/150?random=2", // ✅ Fixed URL
    },
  ],
  totalPrice: 195,
}

const Checkout = () => {
  const navigate = useNavigate();
  const [CheckoutId, setCheckoutId] = useState(null)
  const [ShippingAddress, setshippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
  //   setCheckoutId(123);
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
      {/* Left Section */}c                                                                                                      
      <div className='bg-white rounded-lg p-6 '>
        <h2 className='text-2xl uppercase mb-6 '>Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className='text-lg mb-4'>Contact Details</h3>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input type="email"
              value="user@example.com"
              className='w-full p-2 border rounded'
              disabled
            />
          </div>
          <h3 className='text-lg mb-4 '>Delivery</h3>
          <div className='mb-4 grid grid-cols-2 gap-4'>
            <div >
              <label className='block text-gray-700'>First Name</label>
              <input
                type="text"
                value={ShippingAddress.firstName}
                onChange={(e) =>
                  setshippingAddress({
                    ...ShippingAddress,
                    firstName: e.target.value,
                  })
                }
                className='w-full p-2 border rounded'
                required />
            </div>

            <div >
              <label className='block text-gray-700'>Last Name</label>
              <input
                type="text"
                value={ShippingAddress.lastName}
                onChange={(e) =>
                  setshippingAddress({
                    ...ShippingAddress,
                    lastName: e.target.value,
                  })
                }
                className='w-full p-2 border rounded'
                required />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Address</label>
            <input type="text" value={ShippingAddress.address}
              onChange={(e) => setshippingAddress({
                ...ShippingAddress, address: e.target.value,
              })
              }
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mb-4 grid grid-cols-2 gap-4'>
            <div >
              <label className='block text-gray-700'>City</label>
              <input
                type="text"
                value={ShippingAddress.city}
                onChange={(e) =>
                  setshippingAddress({
                    ...ShippingAddress,
                    city: e.target.value,
                  })
                }
                className='w-full p-2 border rounded'
                required />
            </div>

            <div >
              <label className='block text-gray-700'>Postal Code</label>
              <input
                type="text"
                value={ShippingAddress.postalCode}
                onChange={(e) =>
                  setshippingAddress({
                    ...ShippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className='w-full p-2 border rounded'
                required />
            </div>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700'>Country</label>
            <input type="text" value={ShippingAddress.country}
              onChange={(e) => setshippingAddress({
                ...ShippingAddress, country: e.target.value,
              })
              }
              className='w-full p-2 border rounded'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700'>Phone</label>
            <input type="tel" value={ShippingAddress.phone}
              onChange={(e) => setshippingAddress({
                ...ShippingAddress, phone: e.target.value,
              })
              }
              className='w-full p-2 border rounded'
              required
            />
          </div>
          <div className='mt-6 '>
            {!CheckoutId ? (
              <button type='submit' className='w-full bg-black text-white py-3 rounded'>Continue to Payment</button>
            ) : (
              <div>
                <h3 className='text-lg mb-4 '>Pay with Paypal</h3>
                {/* Paypal component */}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout