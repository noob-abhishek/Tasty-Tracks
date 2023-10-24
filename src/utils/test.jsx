import React, { useEffect, useState } from 'react';

const SwiggyComponent = () => {
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const [restaurantData, setRestaurantData] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  }, []);

  const swiggyAPI = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${userLocation.lat}&lng=${userLocation.lng}&is-seo-homepage-enabled=false&page_type=DESKTOP_WEB_LISTING`;

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(swiggyAPI);
        const data = await response.json();
        setRestaurantData(data);
      } catch (error) {
        console.error('Error fetching restaurant data:', error.message);
      }
    };

    if (userLocation.lat !== null && userLocation.lng !== null) {
      fetchRestaurantData();
    }
  }, [swiggyAPI, userLocation]);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div>
      <h1>Swiggy Restaurants Near You</h1>
      {restaurantData.length > 0 ? (
        <div>
          <ul>
            {restaurantData.map((restaurant) => (
              <li key={restaurant.id} onClick={() => handleRestaurantClick(restaurant)}>
                {restaurant.name}
              </li>
            ))}
          </ul>
          {selectedRestaurant && (
            <div>
              <h2>{selectedRestaurant.name}</h2>
              <p>{selectedRestaurant.description}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SwiggyComponent;
