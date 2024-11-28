
import "./Comp.css"

export default function Post ({tit1,tit2 ,children}){

    return(
       <div className={"yo"}>   
        <h1>{tit1}</h1> 
        <hr/> 
        <h1>{tit2}</h1>  
        {children} 
       </div>

    )



}