
import './App.css';
import Nav from './Components/Shared/Nav';
import { Route, Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import HeroSection from './Components/HeroSection/HeroSection';


function App() {
  return (
    <div className="">
       <Nav></Nav>
       <Home></Home>
      
    </div>
  );
}

export default App;
