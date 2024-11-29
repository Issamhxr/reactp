import "./Comp.css"

export default function Button ({tit,children}){

   
    return(
       <div   > 


       {tit ==null && children==null ? <div></div> : 
        <button  className="bu" >{tit} {children}</button>  }  
     
          
       </div>

    )



}