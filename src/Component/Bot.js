import './Comp.css';
import {useState } from "react";





export default function Bot(){

    const [name , setName]= useState("issam");

    function Click (){
    
       
        if (name=="islam") {
            setName("issam");
                
            }else{
            setName("islam");
            }
       
    
        
    }


    return(
        <div>

<button  className="bu" onClick={Click} >click</button>   
<h1>{name}</h1>

</div>)




}