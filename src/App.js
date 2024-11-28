import logo from './logo.svg';
import './App.css';
import Com from "./Com.js";
import SidBar from './Component/SideBar.js';
import Post from './Component/Post.js';
import NavBar from './Component/NavBar.js';



function App() {
  return (
    <div className="App">
  
    <NavBar/>
    <div style={ {display:"flex", justifyContent :"center"}}>
    <div style={ {display:"flex", width :"60%"}}>
    
    <div style= {{width: "60%"}}>
    <Post tit1={"yoy"} tit2={"yii"} />
    <Post tit1={"pii"} tit2={"ychii"} ><h3>hello</h3></Post>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </div>
    <div style= {{ width: "40%"}}>
    <SidBar/>
    </div>
    </div>

    </div>
      
    </div>
  );

}



export default App;

