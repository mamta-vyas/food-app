// import {useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () =>
    {
        // const [resInfo , setResInfo] = useState(null);
        const {resId} = useParams();
     const resInfo = useRestaurantMenu(resId);

     const[showIndex, setShowIndex] = useState(0);

    if (resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwo, costForTwoMessage}  = 
   resInfo?.data?.cards[2]?.card?.card?.info ;

   const { itemCards } = 
   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   const categories =   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swig…on.food.v2.ItemCategory")

   console.log(categories);

    console.log(itemCards);

        return (
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <p className="font-bold text-lg">
                    {cuisines.join(", ")} - {costForTwo/100}
                </p>
                {/* categories accordian */}
                {categories.map((category , index) => (
                    // Controlled Component
                    <RestaurantCategory
                     key={category?.card?.card.title} 
                     data={category?.card?.card}
                     showItems={index === showIndex ? true : false}
                     setShowIndex ={() => setShowIndex(ndex)}
                     />
                ))}
           </div>
        )
    }

    export default RestaurantMenu;

      
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