import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../App.css';
import Shimmer from './shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Body() {
  const [crouseldata, setCrouseldata] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [AllRestraunts, setAllRestraunts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [SearchTxt, setSearchtxt] = useState('');
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          console.log('Latitude:', latitude, 'Longitude:', longitude);
        },
        (error) => {
          console.error('Error getting user location:', error.message);
          setLocationError(error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
      setLocationError('Geolocation is not supported by your browser.');
    }
  }, []);

  useEffect(() => {
    // Only fetch restaurant data if userLocation is available
    if (userLocation.lat !== null && userLocation.lng !== null) {
      console.log('Fetching restaurant data with user location:', userLocation);
      getRestaurant();
    }
  }, [userLocation, SearchTxt]);

  async function getRestaurant() {
    const SwiggyAPi = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${userLocation.lat}&lng=${userLocation.lng}&is-seo-homepage-enabled=false&page_type=DESKTOP_WEB_LISTING`;
    const data = await fetch(SwiggyAPi);
    const json = await data.json();

    setAllRestraunts(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCrouseldata(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== '') {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage('');
      if (data.length === 0) {
        setErrorMessage('No matching restaurants found');
      }
    } else {
      setErrorMessage('');
      setFilteredRestaurants(AllRestraunts);
    }
  };

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1> OOPS! Check Your Internet Connection!</h1>;
  }

  if (locationError) {
    return (
      <div>
        <h1>Error getting user location:</h1>
        <p>{locationError}</p>
        {/* You can choose to display content here even if location is not available */}
        {AllRestraunts?.length > 0 && (
          <div className="flex flex-wrap justify-center p-6 mt-7 gap-4">
            {FilteredRestaurants.map((restaurant) => (
              <Link
                to={'/restaurant/' + restaurant.info.id}
                key={restaurant.info.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-300 transform hover:scale-105"
              >
                <Card {...restaurant.info} />
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (!AllRestraunts) return <h1>It's empty</h1>;

  return (
    <>
      <div className="flex items-center justify-end mx-[11.2vmax] mt-[70px]">
        <input
          type="text"
          className="p-3 m-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500 transition-all duration-300 focus:ring focus:ring-sky-300"
          placeholder="Search"
          value={SearchTxt}
          onChange={(e) => {
            setSearchtxt(e.target.value);
          }}
        />
        <button
          className="ml-2 p-3 bg-sky-200 rounded-md hover:bg-sky-300 active:bg-sky-300 focus:outline-none focus:shadow-outline-sky transition-all duration-300"
          onClick={() => {
            searchData(SearchTxt, AllRestraunts);
          }}
        >
          <FontAwesomeIcon icon={faSearch} className="text-white" />
        </button>
      </div>

      {errorMessage && (
        <div className="text-red-500 font-bold text-center mt-4">
          {errorMessage}
        </div>
      )}

      {AllRestraunts?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center p-6 mt-7 gap-4">
          {FilteredRestaurants.map((restaurant) => (
            <Link
              to={'/restaurant/' + restaurant.info.id}
              key={restaurant.info.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-300 transform hover:scale-105"
            >
              <Card {...restaurant.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Body;
