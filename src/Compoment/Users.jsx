import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {FcLock ,FcFeedback,FcHighPriority} from "react-icons/fc";
import{Router ,NavLink} from 'react-router-dom'
import axios from 'axios'
import home from './Home'
import login from './Login'
const btnlg={background:'coral', border:'none'}
const LOGOUT={background:'coral', color:'black', border:'none'}
const Resit={background:'green', color:'white', border:'none'}
const sing={color:'coral'}
const card = {boxShadow: '1px 2px 20px #F4AAB9',color:"black",text:"bolder", };
const Username=localStorage.getItem('NameUser')
const Email=localStorage.getItem('EmailUser')
const Role=localStorage.getItem('RoleUser')
const bgg={'background':'#fd7e14'}
const err={color:'red' ,'text':'center'}


const logout=()=>{
    localStorage.clear();

}
const User=()=>{
    const [email,setEmail]=useState("")
    const [password,SetLastpwd]=useState("")
    const [newpassword,setNewpwd]=useState("")
    const [error,setError]=useState(false)
    const [errorUpdatpwd,seterrUpdatpwd]=useState(false)
    const [emailnotexist,setemailnotexist]=useState(false)
    const [emaills,setEmaills]=useState("")
    const [passwordls,setpasswordls]=useState("")
    const dataResit={email,password,newpassword}
    const ResitPassword=async(e)=>{
        e.preventDefault();
        setEmaills(localStorage.getItem("EmailUser"))
        setpasswordls(localStorage.getItem("passworduser"))
            if(email.length ==0 ||password.length==0 || newpassword.length==0){
                  setError(true)
            }else{
                await axios.post("http://127.0.0.1:4111/api/auth/resitpassword",dataResit)
                .then((responce)=>{
                    // console.log(responce)
                    const messageUpdatepwd=responce.data.messageUpdatepwd
                    const emailusernotexist=responce.data.emailusernotexist
                    const passwordIncorect=responce.data.passwordIncorect
                    // console.log(messageUpdatepwd)
                    if(messageUpdatepwd!=undefined){
                        window.location.replace("/login")
                    }else if(passwordIncorect!=undefined){
                        seterrUpdatpwd(true)
                    }else if(emailusernotexist!=undefined){
                        setemailnotexist(true)

                    }
                }).catch((err)=>{
                        console.log("erroooor update")
                })
            }
    }
    return(
    <Container> 
        <div className="card  formregister" style={card}>
            <div className="card-body">
                <h5 className="card-title">Hello {Username}</h5>
                <h5 className="card-title">Your email is : {Email}</h5>
                <h5 className="card-title">Your role is : {Role}</h5>
                <p className="card-text"></p>
                <div class="d-grid gap-2">
                <button type='submit' className="btn btn-lg fw-bolder" style={LOGOUT} onClick={logout}><NavLink to='/home' className='LOGOUT'>LOGOUT</NavLink></button>
                <button type='submit' className="btn btn-lg fw-bolder "  data-bs-toggle="modal" data-bs-target="#ResitPasswordmodal" data-bs-whatever="@mdo"style={Resit} onClick={ResitPassword}>Resit Password</button>
                </div>           
             </div>
        
        </div>
        {/* modal resit password */}

        <div className="modal fade" id="ResitPasswordmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="Ajouter text-dark" id="exampleModalLabel">Resit password</h5> 
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-dark fw-bolder">
                    <form onSubmit={ResitPassword}>
                    {
                    (errorUpdatpwd)
                    ?<span style={err} className="fw-bolder fs-4 ">last password inccorect</span>
                    :(emailnotexist)
                    ?<span style={err} className="fw-bolder fs-4 text-center">Email not exist</span>
                    :""
                    }
                     <div class="mb-3" >
                        <label  className="form-label">Email </label>
                        <input type="email"  name='email' onChange={(e)=>{setEmail(e.target.value)}} className="form-control p-2 fs-4"   placeholder=" Enter email"/>
                        {(error && email.length<=0) ? <span style={err}> <FcHighPriority className='FcHighPriority2' />{ ' '}email et obligatoir</span>:""}
                    </div>
                        <div className="mb-3">
                            <label className="col-form-label fs-5">Last password</label>
                            <input type="password" className="form-control p-2 fs-4" name="password" onChange={(e)=>{SetLastpwd(e.target.value)}}  />
                            {(error && password.length<=0 )? <span style={err}>Last password obligatoir</span>:""}

                        </div>
                        <div className="mb-3">
                            <label className="col-form-label fs-5">new Password</label>
                            <input type="password" className="form-control p-2 fs-4"  name="newpassword" onChange={(e)=>{setNewpwd(e.target.value)}}  />
                            {(error && newpassword.length<=0 )? <span style={err}>new Password obligatoir</span>:""}

                        </div>
                       
                       
                        <div className="modal-footer ">
                            <button type="button" className="btn btn-secondary fw-bolder p-3" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn p-3 fw-bolder text-white"   style={bgg}>Resit password</button>
                        </div>
                    </form>
                </div>
               
                </div>
            </div>
        </div>
    </Container>
    );
};

export default User
