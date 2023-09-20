import { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SwiggyAPi } from "../utils/env";


function Body() {
  const [crouseldata, setCrouseldata] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [AllRestraunts, setAllRestraunts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [SearchTxt, setSearchtxt] = useState(""); //using hooks to maintain state of a component.

  async function getRestaurant() {
    const data = await fetch(
      SwiggyAPi
    );
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
  useEffect(() => {
    getRestaurant();
  }, [SearchTxt]);
  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(AllRestraunts);
    }
  };





  //build your own local storage hook
  //lszy loading and chunking

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1> OOPS! Check Your Internet Connection!</h1>;
  }

  // if allRestaurants is empty don't render restaurants cards
  if (!AllRestraunts) return <h1>its empty</h1>;




  return (
    <>
  
     
      <div className="flex justify-center mt-[110px]">
        <input
          type="text"
          className="p-5 m-2 rounded-md"
          placeholder="Search"
          value={SearchTxt}
          onChange={(e) => {
            setSearchtxt(e.target.value);
          }}
        />
        <button
          className="m-2 p-5 bg-sky-200 rounded-md hover:bg-sky-300 active:bg-sky-300"
          onClick={() => {
            // user click on button searchData function is called
            searchData(SearchTxt, AllRestraunts);
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
   
    
  
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {AllRestraunts?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className=" flex flex-wrap justify-center p-6 mt-16 gap-4">
  {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
  {FilteredRestaurants.map((restaurant) => (
    <Link
      to={"/restaurant/" + restaurant.info.id}
      key={restaurant.info.id}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
    >
      <Card  {...restaurant.info} />
    </Link>
  ))}
</div>
      )}
      
    
    </>
  );
}

export default Body;
