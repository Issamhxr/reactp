import logo from './logo.svg';
import './App.css';
import Com from "./Com.js";
import SidBar from './Component/SideBar.js';
import Post from './Component/Post.js';
import NavBar from './Component/NavBar.js';
import Bot from './Component/Bot.js';
import Label from './Component/Label.js';
import Form from './Component/Form.js';
import { useState } from 'react';

const ShowSide =true

const Posts =[
  {
    id : 1 , tit1 :"yoy", tit2 : "yii" 
  },
  {
    id : 2 , tit1 :"pii", tit2 : "chii" 
  },
  {
    id : 3 , tit1 :"yloo", tit2 : "lli" 
  }
]
const ShowPost = Posts.map((post) => {

  return ( <Post  key={post.id} tit1={post.tit1} tit2={ post.tit2}/>)

})
let nid =4;






function App() {




  const [cuntry, setCuntry] = useState("") 
  const [cuntries,setCuntries] =useState([{id:1 ,  name:"algeria"},
    {id:2 ,  name:"tonas"} ,{id:3 ,  name:"maroco"}])

   const listCuntries = cuntries.map((cunt)=>{
   return <li key={cunt.id}>{cunt.name} 
   <button onClick={()=>{HandleDelete(cunt.id)}} >delete</button>


   <button onClick={()=>{HandleEdit(cunt.id)

   }}>edit</button>
   </li>

 })

  function HandleEdit (id){
 const NewCuntries = cuntries.map((cun)=>{
   if(id == cun.id)   {
    let Newc={...cun, name: cun.name+"0"} 
    return (Newc)}
    else {return cun}

 })
 setCuntries(NewCuntries)


  }

 function HandleDelete(id){
  const Newcuntries = cuntries.filter((cun)=>
 {return cun.id !== id} 
  )
  setCuntries(Newcuntries)


 }

  function HandleClickChanges(){

  setCuntries([...cuntries,{id:nid ,name:cuntry } ])
 nid=nid+1
  }
  return (
    <div className="App">
      
    <ul>{listCuntries}</ul>
    <input onChange={(e)=>{

  setCuntry(e.target.value)

    }}></input>
    <button onClick={HandleClickChanges} >add</button>
   
      
    </div>
  );

}

function Show() {
if (ShowSide == true) { return(<div style= {{ width: "40%"}}>
    <SidBar/>
    </div>)}else {return null}

}
 




export default App;

