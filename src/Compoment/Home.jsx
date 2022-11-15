import React from "react"
import homelogo from '../Image/LOGO.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import { Router , Routes ,Route  ,NavLink } from "react-router-dom";
const shadow = {
    boxShadow: '1px 2px 20px coral',
  };
  const navlik={
    textDecoration: 'none' ,
    color:'coral',
  }
  const bg={"background": "none"}
const HomePage=()=>{
    // console.log('HomePage:', props)

    return(
       <div className=" m-auto">
            <Row className="bg-red text-center ">
                <Col className="mt-5 ">
                <div className=" text-center ">
                   <img src={homelogo} alt=""  srcset="" className="" />
                </div>
                </Col>
            </Row>
            <Row className="bg-red text-center w-50 m-auto" >
                <Col className="">
                <div className="text-dark">
                <div className="card  text-center"  style={bg}>
                    <div className="card-body "  >
                        <h5 className="card-title fw-bold fs-1 text-white">MARHABA</h5>
                        <div className="home-logreg">
                            <button type="submit" className='btn-log ' style={shadow}> <NavLink to="/login" style={navlik}>login</NavLink></button>
                            <button type="submit" className='btn-reg ' style={shadow}> <NavLink to="/register" style={navlik}>Register</NavLink></button>
                        </div>
                    </div>
                    </div>                
                 </div>
                </Col>
            </Row>
       </div>
    );

}
export default  HomePage

{/* <div >
<div className='home-img'>
    <img src={homelogo} alt="" className='home-imglogo' />
</div>
<div className="home-logreg">
<button type="submit" className='btn-log' style={shadow}> <NavLink to="/login" style={navlik}>login</NavLink></button>
<button type="submit" className='btn-reg' style={shadow}> <NavLink to="/register" style={navlik}>Register</NavLink></button>
</div>

</div> */}