import React from "react";

class UserClass extends React.Component {
    
    // inside class component we have render method which return a piece of JSX
constructor(props){
super(props)
console.log(this.props.name + "constructor called")

this.state = {
     
    // count: 0,
    // count2: 2,
    userInfo: {
     name: "dummy",
     location: "xyz",
     avatar_url: " ",  
    }
};
}

  async componentDidMount()
{
    // console.log(this.props.name + "component Did Mount")

    const data = await fetch("https://api.github.com/users/mamta-vyas");
    const json = await data.json();
    console.log(json);

    this.setState(
        {
            userInfo: json,
        }
    )
}

componentDidUpdate()
{
    console.log("component update");
}
componentWillUnmount(){
    console.log("component will unmount");
}

render()
    {
    //     console.log(this.props.name + "render called"); 
    // const {name, contactInfo} = this.props
    // const {count , count2} = this.state
const {name, location, avatar_url} = this.state.userInfo;
    return(
    <div className="user-card ">
{/* <h1>Name: Mamta</h1>  */}
{/* <h2>count: {count}</h2> */}
{/* <h2>count2: {count2}</h2> */}
{/* <h2>{this.props.name}</h2>  */}
{/* never update state vriable directly always use setState and we can use this.setState anywhwere in my class component this.setState({have object value}) */}
{/* react rerender when count gets inceased means whenever value update react rerenders */}
{/* <button onClick={()=> {this.setState({
count: this.state.count+1,
count2: this.state.count2+1,
})
}}>increase count</button> */}
{/* <h2>{name}</h2> */}
{/* <h3>{contactInfo}</h3>
<h2>Location: Chittorgarh</h2>  
<h3>Email: mamtavyas1990@gmail.com</h3>   */}
{/* <h1>{this.state.userInfo.name}</h1> */}
<h1>{name}</h1>
<h2>{location}</h2>
<img src={avatar_url} />
</div>
        )
    }
    };
export default UserClass;

// Dom manipulation is very expensive thing so react first render the constructor and render() of parent then render the constructor and render() of first child then render the constructor and render() of 2nd child this process called as render phase after this react renders the component did mount of first child then 2nd  child then parent child and this is called as commit phase befor this commit phase react updates the dom