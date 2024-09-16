import { LOGO_URL } from "../utils/constants";
import { useState , useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

// hooks or usestate or state variable will only be called and initialized in function component it can't br called on if ,else (js aloows this) or for loop or any function or it canit be called outside of function component.

// and in function component always call usestate on top of function.

const Header = () => {

    //  const btnName = "login";
const [btnNameReact , setBtnNameReact] = useState("login");
const onlineStatus = useOnlineStatus(); 
// if there is no dependency array useEffect will be called on every render
// useEffect(() => {
// console.log("useEffecet called");
// });


const {loggedInUser} = useContext(UserContext);

// if there is empty dependency array then useeffect will be called only on initial render(just once).
useEffect(() => {
  console.log("useEffecet called");
  },[]);

  // useEffect(() => {
  //   console.log("useEffecet called");
  //   },[]]);

  //Subscribing to the store using  useSelector 

  const cartItems = useSelector((store) => store.cart.items);


    return (
  <div className="flex justify-between shadow-lg bg-pink-100 sm:bg-yellow-50 lg:bg-green-100">
        <div className=" ">
          <img
            className="w-56"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status : { onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="px-4">
              <Link to="/">Home</Link>
              </li>
            <li className="px-4">
         <Link to="/about">About us</Link>
              </li>
            <li className="px-4">
          <Link to ="/grocery"> Grocery</Link>
            </li>
            <li className="px-4"> <Link to="/contactus">Contact Us</Link></li>
            <li className="px-4 font-bold text-xl">cart - ({cartItems.length} items)</li>
            <button className="login-btn" onClick={() => { btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login")}}>{btnNameReact}</button>
         
          <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        
        </div>
      </div>
    );
  };
  
  export default Header;