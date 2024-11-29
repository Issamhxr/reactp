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







function App() {




  const [cuntry, setCuntry] = useState("") 
  const [cuntries,setCuntries] =useState(["algeria","tonas" ,"maroco"])

   const listCuntries = cuntries.map((cunt)=>{
   return <li>{cunt}</li>

 })

  return (
    <div className="App">
      
    <ul>{listCuntries}</ul>
    <input onChange={(e)=>{

      

    }}></input>
    <button onClick={}>add</button>
   
      
    </div>
  );

}

function Show() {
if (ShowSide == true) { return(<div style= {{ width: "40%"}}>
    <SidBar/>
    </div>)}else {return null}

}
 




export default App;

