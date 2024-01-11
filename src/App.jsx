import './App.css'
import { Routes, Route } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import Green from './components/Green';
import Purple from './components/Purple';
import Yellow from './components/Yellow';
import Navigation from './Navbar';


function App() {
  
  return (
    <>
     <div id="container">
    <nav id='navbar'>
      <h1 className='Page-Header'>Colors!</h1>
      <Navigation />
    </nav>
    <div id="main-section">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blue' element={<Blue />} />
      <Route path='/red' element={<Red />} />
      <Route path='/green' element={<Green />} />
      <Route path='/yellow' element={<Yellow />} />
      <Route path='/purple' element={<Purple />} />
    </Routes>
    </div>
  </div>
    </>
  )
}

export default App
