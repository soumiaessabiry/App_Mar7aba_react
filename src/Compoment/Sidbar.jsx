import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcMenu ,FcRefresh ,} from "react-icons/fc";
import { FaDollyFlatbed} from "react-icons/fa";
import { BsPersonPlusFill ,BsFillCartPlusFill,BsPersonPlus ,BsFillEmojiSmileUpsideDownFill,BsTextIndentLeft,BsFillArrowRightCircleFill} from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homelogo from '../Image/LOGO.png'
import Livreur from './Livreur'
import Client from './Client'
import Manger from './Manger'

const styleFc={'font-size':'41px', 'margin-top':' 15px','margin-left':' 1px', 'font-weight': 'bolder','font-size':'40px','color':'black'}
const logo={'border-radius': '35px','margin-top':' 10px'}
const icon={"font-size": "35px"}
const sid={'margin-top':"90px"}
const navlik={
    textDecoration: 'none' ,
    color:'black',

}

const Sidebar=()=>{
 const [isShown, setDisplay]=useState('true');
const Titledispshow=(e)=>{
    setDisplay(!isShown)
}
    return(
        <div className="position-relative p-1">
            <div className="position-absolute top-0 start-100 translate-middle pdashbor"><BsFillArrowRightCircleFill style={styleFc} id="menu" onClick={Titledispshow}/></div>
            <div>
               <div>
                    <div  style={{display: isShown ? 'block' : 'none'}}>
                        <img src={homelogo} alt="" srcset="" width={'100px'} style={logo}  />
                    </div>
                    <div className="mt-5 pdashbor"  style={{display: isShown ? 'block' : 'none'}}>
                        <h3 className="title text-center" >Admin</h3>
                    </div>
               </div>
                <div class="d-grid gap-2 "  style={sid}>
                    <div ClassName="">
                        <div  className=" pdashbor">
                            <NavLink to="/Livreur"  style={navlik}>
                                <span><FaDollyFlatbed  style={icon}/></span>
                                <p className="text-darckfw-bolder fs-5 title"  style={{display: isShown ? 'block' : 'none'}} >Livreur</p>
                            </NavLink>
                        </div>
                        <div  className="mt-5 pdashbor">
                            <NavLink to="/Manger"  style={navlik}>
                                <span><BsPersonPlus style={icon}/></span>
                                <p className="text-darck fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>Manger</p>
                            </NavLink>
                        </div>
                        <div  className="mt-5 pdashbor">
                            <NavLink to="/Client"  style={navlik}>
                                <span><BsPersonPlusFill style={icon}/></span> 
                                <p className="text-darck fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>Client</p>
                            </NavLink>
                        </div>
                        <div  className="mt-5 pdashbor">
                        <span><BsFillEmojiSmileUpsideDownFill style={icon}/></span> <p className="text-darck fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Sidebar