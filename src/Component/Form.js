import './Comp.css';
import {useState } from "react";





export default function Form(){

    const [formInput , setFormInput]= useState({ name:"", email:"", areyou:true});

    function HandelIt(event){
        setFormInput({...formInput, areyou:event.target.checked})
        console.log(event.target.checked)
    }


    return(



<form  onSubmit={(event)=>{
    event.preventDefault();
}}


> 
<div>
<div>name</div>
        <input onChange={(event)=>{
            setFormInput({...formInput,name:event.target.value})
        }}></input>

</div>
<div>
<div>email</div>
<input onChange={(event)=>{
    setFormInput({...formInput,email:event.target.value})
}}></input>


</div>

<div>
<label><h1>are you sure</h1></label>
<input type='checkbox' checked={formInput.areyou}  onChange={HandelIt} ></input>
</div>

<button>submit</button>
</form>
       




)




}