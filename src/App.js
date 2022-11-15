import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

let App0=()=> 
 <div>
      -------------------------------------------
      <h3>I am App0 {new Date().toLocaleString()}</h3>
 </div>
  
  const User = (props) => 
  <div>
      <h2>I am a User component {new Date().toLocaleString()}</h2>
      {props.name}{props.surname}{props.c1}
  </div>
  


export default App = () => {
let [cnt, setCnt] = React.useState(1000);
  
var ob={ name:<h3>Mike</h3>, surname:<h3>Tyson</h3> , c1:<App0/>};
let clickHandler=()=>setCnt(cnt+1);

return (
  <div style={{ margin: '50px' }}>

       <h1>I am a App component {new Date().toLocaleString()}</h1>
       <button onClick={clickHandler}><h3>{cnt}</h3></button>

       <User {...ob}/>
  </div>
)}


