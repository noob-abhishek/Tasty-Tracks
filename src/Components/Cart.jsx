import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../utils/cartSlice';
import { useParams } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const { id } =  useParams();



  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className='bg-white p-4 rounded-md shadow-md mb-4 flex items-center justify-between'>
          <div className='flex-shrink-0'>
            {item.imageId && (
              <img
                className='w-16 h-16 object-cover rounded-md'
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                alt={item.name}
              />
            )}
          </div>
          <div className='ml-4'>
            <h3 className='text-lg font-semibold text-gray-800'>{item.name}</h3>
            <p className='text-gray-600'>{item.description}</p>
            <p className='text-blue-500 font-bold'>
              {item.price > 0
                ? new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                  }).format(item.price / 100)
                : ' '}
            </p>
          </div>
          <button
            className='text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red transition-all duration-300'
            onClick={() => {
              dispatch(removeItem(item.id));
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* i will show total amount here*/}
      <div className='bg-gray-100 p-4 rounded-md shadow-md mt-4'>
        <h3 className='text-lg font-semibold mb-2'>Total Amount</h3>
        <p className='text-blue-500 font-bold'>
          {totalAmount > 0
            ? new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
              }).format(totalAmount / 100)
            : ' '}
        </p>
        <div>
          <button className='text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red transition-all duration-300'>
          Proceed to payload</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
