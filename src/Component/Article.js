
import "./Comp.css"

export default function Article({name , email, pa= "no content"}){
  
return(
<>
<div style={{ }} >
<div className="art">

<h1>{name}</h1>
<hr></hr>
<h1>{email}</h1>
<hr></hr>
<h1>{pa}</h1>

</div></div>


</>




)
}