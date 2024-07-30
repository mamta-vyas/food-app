import { useState } from "react";

const User = (props) =>{
const [count, setCount] = useState(0);

return( 
<div className="user-card">

<h1>Name: Mamta</h1>
<h2>{props.name}</h2>
<h3>count: {count}</h3>  
<h2>Location: Chittorgarh</h2>  
<h3>Email: mamtavyas1990@gmail.com</h3> 
<button onClick={()=>setCount(count+1)}>increase count</button>
</div>
)}
export default User;