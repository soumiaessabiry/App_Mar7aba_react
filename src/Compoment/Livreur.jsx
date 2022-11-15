import { Row } from "react-bootstrap";
import Col from "react-bootstrap";
import Navbar from "./Navbar";
import { useState } from "react";
import Tables from "./Table";
import Dashbord from "./Dashbord";
import Sidebar from "./Sidbar"
import livreur from "./Livreur"
import axios from "axios"
import ModalAjouter from "./ModalAjouter"
import { FcPortraitMode ,FcCheckmark ,FcHighPriority} from "react-icons/fc";
const over={'overflow': 'auto'}
const bgg={'background':'#fd7e14'}
const err2={color:'red',Text:'center' }
const err={color:'red',Text:'bolder',Text:'center' ,'display': 'flex','justifyContent': 'center' }
const iconBsP={"fontSize": "35px"}


const Livreur=()=>{
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)
    const [erroremail,setErrorEmail]=useState(false)
    const datalivreur={
        username,email,password
    }
    const dataSubmit= async(e)=>{
        e.preventDefault();
        if(username.length==0 ||email.length==0 ||password.length==0 ){
            setError(true)
        }else{
            // console.log(datalivreur)
            await axios.post('http://127.0.0.1:4111/api/auth/Addlivreur',datalivreur)
            .then((responce)=>{
                // console.log(responce)
                const verficemail=responce.data.message
                if(verficemail!=undefined){
                    setErrorEmail(true)
                }else{
                   window.location.replace('/livreur')
                }
               

            }).catch((err)=>{
                console.log(err)
            })
            
        }

    }
    return(
        <div className="h-100 bg-white">
            <div className="d-flex h-100">
                <div className="p-3 " style={bgg}>
                    <Sidebar/>
                </div>
                <div className=" p-1 w-100" style={over} >
                        <Row className=" m-auto" style={bgg}>
                            <Navbar name=" Livreur" iconBsP={iconBsP}/>
                        </Row>
                        <Row className="  m-auto mt-3 bg-light text-dark">
                            <div>
                                <div className=" p-1 w-100" style={over} >
                                <Row className="  m-auto mt-3 bg-light ">
                                    <Tables   />
                                </Row>
                                </div>
                            </div>
                        </Row>
                </div>
            </div>
            {/* modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="Ajouter text-dark" id="exampleModalLabel">Ajouter livreur </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-dark fw-bolder">
                    <form onSubmit={dataSubmit}>
                        {(erroremail)?<span style={err} className="fs-3 text-center"><FcHighPriority className='FcHighPriority ' />{''}Email is already existe</span>:""}
                        <div className="mb-3">
                            <label className="col-form-label fs-5">Nom de </label>
                            <input type="text" className="form-control p-2 fs-4" value={username}  onChange={(e)=>setUsername(e.target.value)}/>
                            {(error && username.length<=0)?<span style={err2}><FcHighPriority className='FcHighPriority' />{' '}username obligatoir</span>:""}

                        </div>
                        <div className="mb-3">

                            <label  className="col-form-label fs-5">Email  </label>
                            <input type="email" className="form-control p-2 fs-4" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            {(error && email.length<=0)?<span style={err2}><FcHighPriority className='FcHighPriority' />{' '}username obligatoir</span>:""}

                        </div>

                        <div className="mb-3">

                            <label  className="col-form-label fs-5">Password </label>
                            <input type="password" className="form-control p-2 fs-4" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            {(error && password.length<=0)?<span style={err2}><FcHighPriority className='FcHighPriority' />{' '}username obligatoir</span>:""}

                        </div>
                        <div className="modal-footer ">
                        <button type="button" className="btn btn-secondary fw-bolder p-3" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn p-3 fw-bolder text-white"  name="submit"  style={bgg}>Ajouter livreur </button>
                    </div>
                    </form>
                </div>
              
                </div>
            </div>
        </div>
       </div>
      
    )
}
export default Livreur
