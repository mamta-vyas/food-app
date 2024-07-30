import React from 'react'
import User from './User'
import UserClass from './UserClass'


class About extends React.Component{
    constructor(){
    super();
    console.log("parent constructor");
  }
componentDidMount(){
  console.log("parentDidMount");
}
  
  

     

  render()
  {
    console.log("parent render")
    return (
      <div>
        <h1>About</h1>
        <h2>This is a food app</h2>
        {/* <User name = {"mamta vyas(function component)"}/> */}
        <UserClass name = {"mamta vyas(class component)"} contactInfo = {2345678910} />
        {/* <UserClass name = {"swati vyas(class component)"} contactInfo = {1123456789} /> */}
      </div>
    )
  }
}


// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is a food app</h2>
//       {/* <User name = {"mamta vyas(function component)"}/> */}
//       <UserClass name = {"mamta vyas(class component)"} contactInfo = {2345678910} />
//     </div>
//   )
// }

export default About
