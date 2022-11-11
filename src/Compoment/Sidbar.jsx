import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import { FcMenu ,FcRefresh ,} from "react-icons/fc";
import { BsPersonPlusFill ,BsFillCartPlusFill,BsPersonPlus ,BsFillEmojiSmileUpsideDownFill,BsTextIndentLeft,BsFillArrowRightCircleFill} from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homelogo from '../Image/LOGO.png'

const styleFc={'font-size':'41px', 'margin-top':' 1px','margin-left':' 1px', 'font-weight': 'bolder','font-size':'40px','color':'black'}
const logo={'border-radius': '35px','margin-top':' 10px'}
const icon={"font-size": "35px"}
const sid={'margin-top':"90px"}

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
                        <span><BsFillCartPlusFill  style={icon}/></span>
                        <p className="text-darckfw-bolder fs-5 title"  style={{display: isShown ? 'block' : 'none'}} >Livreur</p>
                        </div>
                        <div  className="mt-5 pdashbor">
                        <span><BsPersonPlus style={icon}/></span>
                         <p className="text-darck fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>Manger</p>
                        </div>
                        <div  className="mt-5 pdashbor">
                        <span><BsPersonPlusFill style={icon}/></span> 
                        <p className="text-darck fw-bolder fs-5 title" style={{display: isShown ? 'block' : 'none'}}>Client</p>
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