import {BrowserRouter, Routes , Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import About from './Components/About'


// const Home = (props) =>{
//   return(
//     <div>
//       <h1>Home Page</h1>
//       <Link to={"/about"}>About</Link>
//     </div>
//   )
// }

// const About = (props) =>{
//   return(
//     <div>
//       <h1>About Page</h1>
//       <Link to={"/"}>Home</Link>
//     </div>
//   )
// }




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
