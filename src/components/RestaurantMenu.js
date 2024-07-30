// import {useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const RestaurantMenu = () =>
    {

        // const [resInfo , setResInfo] = useState(null);
        const {resId} = useParams();

        const resInfo = useRestaurantMenu(resId);
        
        // useEffect(() =>
        // {
        //      fetchMenu();
        // }, []);

      

        // const fetchMenu = async() =>
        //     {
        //         const data = await fetch(RESTAURANT_MENU_API + resId);

        //         const json = await data.json();

        //         console.log(json);
        //         setResInfo(json)
        //     };
     
  if (resInfo === null) return <Shimmer/>;

   const {name, cuisines, costForTwo, costForTwoMessage}  = 
   resInfo?.data?.cards[2]?.card?.card?.info ;

   const { itemCards } = 
   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

        return (
            <div className="menu">
                
                <h1>{name}</h1>
                <p>
                    {cuisines.join(", ")} - {costForTwo/100}
                </p>
           
                <ul>
                    {itemCards.map(item =>
                        <li key = {item.card.info.id}>
                    {item.card.info.name} - {"Rs."} {item.card.info.defaultPrice/100}
                            </li>
                    )}
                   
                </ul>
            </div>
        )
    }

    export default RestaurantMenu;
