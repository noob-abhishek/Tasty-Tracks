import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SwiggyMenuAPi } from '../utils/env';
import { additem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [Restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurantInfo(); // eslint-disable-next-line
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(SwiggyMenuAPi + id);
    const json = await data.json();

    const restaurantData =
      json?.data?.cards?.map((x) => x.card)?.find((x) => x && x.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant')?.card?.info || null;
    setRestaurant(restaurantData);

    const menuItemsData =
      json?.data?.cards.find((x) => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x?.card?.card)?.filter((x) => x['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')?.map((x) => x.itemCards).flat().map((x) => x?.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x?.id === item?.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setMenuItems(uniqueMenuItems);
  }
// redux config-----------------------------------
  const handleItems = (item) => {
    dispatch(additem(item));
    console.log(item)
  };

  return (
    <div className='restaurant-menu'>
      <div className='restaurant-img-details flex items-center gap-6 py-4 bg-gray-100'>
        <div className='flex-shrink-0'>
          <img
            className='img-res w-44 h-28 object-cover rounded-lg shadow-md'
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${Restaurant.cloudinaryImageId}`}
            alt='img'
          />
        </div>
        <div className='details'>
          <h2 className='text-xl font-semibold text-gray-700'>id: {id}</h2>
          <h1 className='text-3xl font-bold text-gray-800'>{Restaurant.name}</h1>
          <h3 className='text-lg text-gray-600'>{Restaurant.areaName}</h3>
          <h4 className='text-lg text-gray-600'>{Restaurant.city}</h4>
          <p className='text-lg text-gray-600'>{Restaurant.costForTwo / 100 + '/- Rupees'}</p>
        </div>
      </div>
      <div className='menu-items-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {menuItems.map((item) => (
          <div className='menu-item bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300' key={item?.id}>
            <div className='menu-item-details'>
              <h3 className='text-lg font-semibold mb-2 text-gray-800'>{item?.name}</h3>
              <p className='text-lg mb-2 text-blue-500 font-bold'>
                {item?.price > 0
                  ? new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                    }).format(item?.price / 100)
                  : ' '}
              </p>
              <p className='text-gray-600 text-sm'>{item?.description}</p>
            </div>
            <div className='menu-img-wrapper flex justify-center items-center mt-4'>
              {item?.imageId && (
                <img
                  className='menu-item-img w-32 h-32 object-cover rounded-lg'
                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.imageId}`}
                  alt={item?.name}
                />
              )}
            </div>
            <button
              className='add-btn bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:shadow-outline-blue transition-all duration-300'
              onClick={() => {
                handleItems(item);
              }}
            >
              ADD +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
