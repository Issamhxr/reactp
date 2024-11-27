
import "./ComStyle.css"
 export default function Com(){

    const person  ={
        name : "issam",
        email : "contact@issamhxr.com",
    };
    const elmStyle  ={
       backgroundColor : "red",
       fontSaze : "20px",

    }
    

    return (
  
       <div>
      <h1 style={elmStyle}>{person.email}helllo world</h1>
      <h1 className={"ll mm"}>helllo world</h1>
      <button onClick={Wow}>you</button>
      <h1 className={person.name== "issam" ? "ll" : "mm" }>helllo world</h1>
       </div>
  
    );
  }
  function Wow (){
    alert("gi")
  }