import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcMenu ,FcRefresh ,} from "react-icons/fc";
import { FaDollyFlatbed,FaUserFriends} from "react-icons/fa";
import { RiAdminFill} from "react-icons/ri";
import { BsPersonPlusFill ,BsFillCartPlusFill,BsPersonPlus ,BsFillEmojiSmileUpsideDownFill,BsTextIndentLeft,BsFillArrowRightCircleFill} from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homelogo from '../Image/LOGO.png'
import Livreur from './Livreur'
import Client from './Client'
import Manger from './Manger'
import homePage from "./Home"
import axios   from "axios";

const styleFc={'fontSize':'41px', 'marginTop':' 15px','marginleft':'-15px', 'fontWeight': 'bolder','fontSize':'40px','color':'black'}
const logo={'borderRadius': '35px','marginTop':' 10px'}
const icon={"fontSize": "35px"}
const sid={'marginTop':"90px"}
const navlik={
    textDecoration: 'none' ,
    color:'black',

}
const navlik2={
    'border': 'none' ,
    'background':'#fd7e14',



}

const Sidebar=()=>{
const [isShown, setDisplay]=useState('true');
const Titledispshow=(e)=>{
    setDisplay(!isShown)
}
const Logout=async()=>{
    await axios.get("http://127.0.0.1:4111/api/auth/Logout" )
    .then((responce)=>{
        const logoutmessage=responce.data.logoutmessage
        if(logoutmessage!=undefined){
            window.location.replace("/Home")
        }

    }).catch((err)=>{
        console.log("errrror")
    })
}
    return(
        <div className="position-relative p-2">
            <div className="position-absolute top-0 start-100 translate-middle pdashbor"><BsFillArrowRightCircleFill style={styleFc} id="menu" onClick={Titledispshow}/></div>
            <div>
               <div>
                    <div  style={{display: isShown ? 'block' : 'none'}}>
                        <img src={homelogo}  width={'100px'} style={logo}  />
                    </div>
                    <div className="mt-4 pdashbor"  style={{display: isShown ? 'block' : 'none'}}>
                        <h3 className="title text-center" >Admin</h3>
                    </div>
               </div>
                <div className="d-grid gap-2 "  style={sid}>
                    <div >
                        <div  className="mt-5 pdashbor">
                            <NavLink to="/Dashbord"  style={navlik}>
                                <span><RiAdminFill style={icon}/></span>
                                <p className="text-darckfw-bolder fs-5 title"  style={{display: isShown ? 'block' : 'none'}} >Manager</p>
                            </NavLink>
                        </div>
                        <div  className=" pdashbor mt-5">
                            <NavLink to="/Livreur"  style={navlik}>
                                <span><FaDollyFlatbed  style={icon}/></span>
                                 <p className="text-darck fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>Livreur</p>

                            </NavLink>
                        </div>
                        <div  className="mt-5 pdashbor">
                            <NavLink to="/Client"  style={navlik}>
                                <span><FaUserFriends style={icon}/></span> 
                                <p className="text-darck fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>Client</p>
                            </NavLink>
                        </div>
                        <div  className="mt-5 pdashbor">
                        
                            <button  style={navlik2}  onClick={Logout}>
                                <span><BsFillEmojiSmileUpsideDownFill style={icon}/></span>
                                <p className="text-darck fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>logout</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Sidebar