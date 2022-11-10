import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { FcMenu ,FcRefresh } from "react-icons/fc";
import { BsPersonPlusFill ,BsFillCartPlusFill,BsPersonPlus ,BsFillEmojiSmileUpsideDownFill,BsTextIndentLeft} from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homelogo from '../Image/LOGO.png'

const styleFc={'font-size':'41px', 'margin-top':' 12px','margin-left':' 50px', 'font-weight': 'bolder','font-size':'50px','color':'black'}
const logo={'border-radius': '35px','margin-top':' 10px'}
const icon={"font-size": "35px"}

const Sidebar=()=>{
 const [isShown, setDisplay]=useState('true');
const Titledispshow=(e)=>{
    setDisplay(!isShown)
}
    return(
        <div className="position-relative p-1">
            <div className="position-absolute top-0 start-100 translate-middle pdashbor"><FcMenu style={styleFc} id="menu" onClick={Titledispshow}/></div>
            <div>
                <div class="d-grid gap-2 ">
                    <div>
                        <img src={homelogo} alt="" srcset="" width={'80px'} style={logo} />
                    </div>
                    <div>
                        <div className="mt-3 pdashbor">
                            <h3 className="text-primary title">Admin</h3>
                        </div>
                        <div  className="mt-5 pdashbor">
                        <span><BsFillCartPlusFill  style={icon}/></span><p className="text-darckfw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}} >Livreur</p>
                        </div>
                        <div  className="mt-5 pdashbor">
                        <span><BsPersonPlus style={icon}/></span> <p className="text-darck fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>Manger</p>
                        </div>
                        <div  className="mt-5 pdashbor">
                        <span><BsPersonPlusFill style={icon}/></span> <p className="text-darck fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>Client</p>
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