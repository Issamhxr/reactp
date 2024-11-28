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
    <SidBar/>
    <Post/>
      
    </div>
  );

}



export default App;

