import React from "react"
import homelogo from '../Image/lllllllll.png'
import { Router , Routes ,Route  ,NavLink } from "react-router-dom";
const shadow = {
    boxShadow: '1px 2px 20px #F4AAB9',
  };
  const navlik={
    textDecoration: 'none' ,
    color:'coral',
  }
const HomePage=()=>{
    // console.log('HomePage:', props)

    return(
        <div className="home">
            <div >
                <div className='home-img'>
                    <img src={homelogo} alt="" className='home-imglogo' />
                </div>
                <div className="home-logreg">
                <button type="submit" className='btn-log' style={shadow}> <NavLink to="/login" style={navlik}>login</NavLink></button>
                <button type="submit" className='btn-reg' style={shadow}> <NavLink to="/register" style={navlik}>Register</NavLink></button>
                </div>
                
            </div>
            
        </div>
    );

}
export default  HomePage