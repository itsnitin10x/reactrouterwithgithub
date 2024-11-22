import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes , Route, Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import GitHub from "./Component/GitHub";
import GitUser from "./Component/GitUser";

function App() {
  
  return (
    
/* <Router>
<Navbar/>
<Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/About" element={<About/>}/>
 <Route path="/Contact" element={<Contact/>}/>
 <Route path="/GitHub" element={<GitHub/>}/>
</Routes>
<Footer/>
</Router> */
    
    <>
    <Navbar/>
     <Outlet/>
    <Footer/>
    </>
  );
}

export default App
