import { useState } from "react";

const RestaurantCategory = ({data , showItems , setShowIndex}) => {

// const[showItems, setShowItems] = useState(false);
    // console.log(data);
 
const handleClick = () => {
// setShowItems(!showItems);
setShowIndex();
}

    return <div>
        {/* {header} */}
<div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 ">
   <div className="flex justify-between cursor-pointer" onClick={handleClick}>
   <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
   <span>⬇️</span>
   </div>

     {/* {Accordian Header} */}
    {showItems && <itemCards items={data.itemCards}/>}
</div>
</div>
}
export default RestaurantCategory;