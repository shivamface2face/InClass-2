import React from "react";
import Forms from "./FORM/Forms";
import { Link, NavLink, Route,Router,Routes } from "react-router-dom";
import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import MainHeader from "./components/MainHeader";

const App = () => {
  return <div>
    
    <nav>
      <ul>
     
        <NavLink to="/">Home </NavLink>
        <Link to="/about">About </Link>
        <Link to="/labs">Labs </Link>
        <Link  to="/support">Support </Link>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<MainHeader />} >
       <Route index element={<Home />} />                  
      <Route path="/support" element={<Support/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/labs" element={ <Labs/>} />
      <Route path="*" element={<div>not found</div>} />

      </Route> 
      
     
    </Routes>
    
  </div>;
};

export default App;

    // index for default route
