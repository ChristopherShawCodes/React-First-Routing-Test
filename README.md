First JavaScript React Routing Test.

Notes:
Make sure localhost is not running during route install

Make sure to cd into client first

.........................................

Install:        

    npm install react-router-dom

.........................................

Example:

    import {BrowserRouter, Routes , Route, Link} from 'react-router-dom'
    import Home from './Components/Home'
    import About from './Components/About'

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
