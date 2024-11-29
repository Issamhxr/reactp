import "./Comp.css"
import Button from "./Button"

export default function SidBar (){
    const botns =[
     {
        id:1 , tit:"click me", 
        c: (<div>
            <span>😂😂😂</span>
            </div>) 

        ,
     },
     {
        id:2 , tit:"", 
        c: (<div>
            <span>😂😂😂</span>
            </div>) 

        ,
     },
     {
        id:3 , tit:"", 
        c: (<div>
            <img style={{width: "100px"}} 
            src="https://img.freepik.com/free-vector/tree_1308-36471.jpg?w=360"/> 
            </div>) 

        
     } ]
     const ShowBtn =botns.map((botn)=>{
        return (<Button key={botn.id} tit={botn.tit}>
             {botn.c}
            </Button>)

     })

   

    return(
        <div style={{ border: "solid 10px green", margin: "25px" , justifyContent :"center"  }}>    
     
       {ShowBtn} 

       </div>

    )



}