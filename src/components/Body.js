
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_LIST_API } from "../utils/constants";
const Body = () => {

//local state variable - super powerful variable
const [listOfRestaurants ,setListOfRestaurants] = useState([]);
const [filteredRestaurants , setFilteredRestaurants] = useState([]);
// now removing resList from useState(resList)
  // setListOfRestaurants();


  const [searchText , setSeachText] = useState("");

//  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  
  // whenever state variables update, react triggers reconciliation cycle(re-renders the component)
  //  console.log("Body rendered", listOfRestaurants)  ;

useEffect(()=>{
 fetchData();
}, []);

// console.log("body rendered");

const fetchData = async  () => {
    const data = await fetch(RESTAURANT_LIST_API);
     
    const json = await data.json();
    console.log(json);
    // now we are using optional chaining by using(?)
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
 
 


  return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
      <div className="body">
          <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {setSeachText(e.target.value)}}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-xl" onClick={() => {
            // filter the res-cards and update the UI.
              console.log(searchText);

              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            });;
              
              setFilteredRestaurants(filteredRestaurants);

          }}
          >search</button>
        </div>
      <div className="search m-4 p-4 flex items-center">
      <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => { 
                //filter logic here
                const filteredList= listOfRestaurants.filter((Element) => Element.info.avgRating > 4.4);
                  //  console.log(listOfRestaurants);
                  setListOfRestaurants(filteredList);
                   }}
                   
                  >
                    Top Rated Restaurants
                    </button>
      </div>
              
        </div>
        <div className="flex flex-wrap">
       {filteredRestaurants.map((restaurant)=>(
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> 
          {/* if the restraunt is promoted then add a label to it */}
        {/* {restaurant.info.isOpen ? (<RestaurantCardPromoted resdata={restaurant}/>): */}
       
        {/* } */}
          {/* <RestaurantCard  resData={restaurant}/> */}

          <RestaurantCard resData = {restaurant}/>
          </Link>
        ))}
        </div>
      </div>
    );
  };

  export default Body;