import { CDN_URl } from "../utils/constants";


const RestaurantCard = (props) => {

  const { resData } = props;
const {name,cuisines,avgRating,costForTwo,} =resData?.info;
const {deliveryTime} = resData?.info?.sla
  return (
    <div className="res-card" style={{ backgroundColor: "whitesmoke" }}>
      <img
        className="res-img"
        src={ CDN_URl + resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}minutes</h4>
</div>
  );
};

export default RestaurantCard;