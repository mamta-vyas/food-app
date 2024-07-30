import React ,{lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard.js";
import About from "./components/About.js";
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js";
//  chunking
//  code splitting
//  dynamic Bundling
//  lazy loading 
//  on demand loading
// Dynamic Import

// below lazy function is very imp line of code it will not make grocery component to get included in index.js of network tab of out inspect of website
// so it will create grocery.js  a saparate file in network of inspect 
const Grocery = lazy(() => import ("./components/Grocery.js"));

const AppLayout = () => {
return (
    <div className="app">
    {/* i want my header to be intact */}
      <Header />
{/* i want only my body component will chANGE HERE SO WE USE  CHILDERN ROUTES so we can access about and contact us page (means i want to push childern according to route)  so we need to use "outlet" component*/}
      <Outlet/>
    </div>
  );
};
//  below is a configuration which we need to provide so we use routerprovider.
// this is an array of objects which diffines a different path
const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contactUs",
        element: <ContactUs/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading.......</h1>}><Grocery /></Suspense>,
        // Suspense is given to Us by React to use it with lazy function.
      },
    ],
    errorElement: <Error />,
  },
 
  // {
  //   path = "/",
  //   element: 
  // }


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>);
