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
import ShoppingCart from './ShoppingCart.js';
import RequestTracker from './RequestTracker.js';

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




  
  return (
    <div className="App">
    
    <RequestTracker/>
      
    </div>
  );

}






export default App;

