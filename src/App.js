import React from "react";
import {Routes, Route ,NavLink } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "./Compoment/Home";
import Login from "./Compoment/Login";
import Register from "./Compoment/Register";
const myStyle={
  background:'black',
  height:'100vh',
  overflow: 'hidden',
  // marginTop:'10px',w
};

  function App(){
    return(
     <div style={myStyle} className='main'>
       <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
//     </Routes>

     </div>
    )
    
  }
    
    
   
export default App 
