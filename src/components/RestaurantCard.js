import { useContext } from "react";
import { CDN_URl } from "../utils/constants";
import UserContext from "src/utils/userContext";


const RestaurantCard = (props) => {

  const { resData } = props;
 
  const {loggedInUser} = useContext(UserContext);

const {name,cuisines,avgRating,costForTwo,} =resData?.info;
const {deliveryTime} = resData?.info?.sla
  return (
     // style={{ backgroundColor: "whitesmoke" }}
    <div className="m-4 p-4 w-[210px] rounded-lg bg-gray-100 
    hover:bg-gray-200 h-[400px] text-xs">
      <img
        className="rounded-lg w-[250px] size-[150px]"
        src={ CDN_URl + resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}minutes</h4>
      <h4> User: {loggedInUser}</h4>
</div>
  );
};

// Higher order Component - takes input as a component and add some features to it and returns the same component
// it basically enhances the quality of a component
// input- RestaurantCard  , output => RestaurantCardPromoted


// export const withPromotedLabel = (RestaurantCard) => {
//   return(props) => {
//     return (
//     <div className ="text-white bg-black m-2 p-2">
//     {/* <label>{props.aggregatedDiscountInfoV3.header.subHeader}</label> */}
// <label className="absolute bg-transparent text-white m-2 p-2 rounded-lg">Open</label>
//     <RestaurantCard {...props}/>
//     </div>
//     )
//   }
   
  
// }
export default RestaurantCard;