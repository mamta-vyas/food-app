import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API} from "./constants";
// below is custom hook
const useRestaurantMenu = (resId) => {
const [resInfo, setResInfo] = useState(null);

     useEffect(() => {
           fetchdata();
         },[]);

           const fetchdata = async () => {
               const data = await fetch(RESTAURANT_MENU_API + resId);
               const json = await data.json();
               setResInfo(json);
           };          
     
    return resInfo;
} 

export default useRestaurantMenu;