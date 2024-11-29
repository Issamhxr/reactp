import './Comp.css';
import {useState } from "react";





export default function Label(){

    const [input , setInput]= useState("");

    function change (event){
    
       setInput(event.target.value);
       
       
    
        
    }


    return(
        <div>

 <label> your input </label>
 <input value={input} onChange={change}></input>

</div>)




}