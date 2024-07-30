
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

//local state variable - super powerful variable
const [listOfRestaurants ,setListOfRestaurants] = useState([]);
// now removing resList from useState(resList)
  // setListOfRestaurants();

  const [searchText , setSeachText] = useState("");
  const [filteredRestaurants , setFilteredRestaurants] = useState([]);

  // whenever state variables update, react triggers reconciliation cycle(re-renders the component)
   console.log("Body rendered")  ;

useEffect(()=>{
 fetchData();
}, []);

// console.log("body rendered");

const fetchData = async  () => {
    const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
    );
     
    const json = await data.json();
    console.log(json);
    // now we are using optional chaining by using(?)
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
// if statement conditional statement
// if(listOfRestaurants.length === 0)
//   {
//     return <Shimmer /> ;
//   }


// below is conditional statement by using tarnary operator 
const onlineStatus = useOnlineStatus();

if(onlineStatus === false)
  return( 
  <h1>
    Looks like you're offline!! Please check your internet connection;
   </h1>);
 


  return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div className="body">
          <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {setSeachText(e.target.value)}}
          />
          <button onClick={() => {
            // filter the res-cards and update the UI.
              console.log(searchText);

              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            });;
              
              setFilteredRestaurants(filteredRestaurants);

          }}
          >search</button>
        </div>
      
              <button className="filter-btn" onClick={() => { 
                //filter logic here
                const filteredList= listOfRestaurants.filter((Element) => Element.info.avgRating > 4.4);
                  //  console.log(listOfRestaurants);
                  setListOfRestaurants(filteredList);
                   }}
                   
                  >
                    Top Rated Restaurants
                    </button>
        </div>
        <div className="res-container">
       {filteredRestaurants.map((restaurant)=>(
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >    <RestaurantCard  resData={restaurant}/>
          </Link>
        ))}
        </div>
      </div>
    );
  };

  export default Body;