# food app
# parcel
-Dev Build
-Local Server
-HMR = Hot Module Replcement
-File Watching Algorithm - written in c++
-Caching - Faster builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling - Support older browsers
-Diagnostic 
-Error Handling
-HTTPS
-Tree Shaking - remove unused code
Different dev prod bundles

# food App

// const styleCard = {
//     backgroundcolor: "yellow" ,
// };
// instead of props we can destructure the props and send it as {resName, cuisine} in "()" of RestaurantCard .(this is the javascript thing).
// the backend data comes in form of json


  // const {resName , cuisine} = props;
  // <h3>{resName}</h3>
  // <h4>{cuisine}</h4>
  // resData?.data this is done by optional chaining

  // type: "restaurants"
//   <RestaurantCard
//   resName="Meghana Food"
//   cuisine="aloo puff,cheese puff, italian, north indian"
// />

// <RestaurantCard resName="KFC" cuisine="Burger, FastFood" />


{/* we can use in this way also  */}
{/* react itself says never use indexes as their key  
{resList.map((Element,index)=>(<RestaurantCard key={index} resData={Element}/>))}*/}
{/* not using keys(not acceptable) <<<<< index as key <<<<<<< unique id (best practice) */}

// passing a prop to a component  is just like passing an argument to a function

 // there are two types of import/export
 one is default export and another one is named export in which we put export word in front of variable.

 //1. export default ComponentName //import componentname from "path".
 //2. export const variableName -->Named export // import {variableName} from "path".


# React Hooks->
-useState()  -->super powerful state variables in react ( use to generate superpower)
-useEffect()


 # React Hooks - 
 //1. normal javascript functions.
 // state variable - super powerful variable --that is react hook ,,hook is very powerful state variable.
  //react hook is normal javascript function which is given to us by react means function has some super power or we can say it has logic behind it.
  //it is a utility function given by react to us.
  //There are multiple such funtions those are known as react hooks.

  //normal js utility variable developed by fb developers and we got all the utility functions in our react of node modules.

//when we call useState(); variable we will get it inside an array.
//const [ variableName] = useState([null]);
let variableName = null// useState's default value will be null.

 
// //so whatever we  pass in usestate([]) (in array form ) our variableName's value gets updated according to useState's array value.

//normal js variable
 // let listOfRestaurants = [];-->it's value is in array form 

//whenever a state variable updates react rerenders the component.

   //useEffect -> it has 2 things one is callback function and other is dependency array.

    useEffect(() =>{
console.log("useeffect Called");
  }, []);

  //    this is call back function  (() =>{
console.log("useeffect Called")});
and callback function is called after components rendered.

when we return useeffect inside body component  so when body component load it will first render all the  component after rendering cycle finish  of all the component  then it will quickly  call the callback function which is inside useeffect.  