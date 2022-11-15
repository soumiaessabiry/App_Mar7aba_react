import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {FcLock ,FcFeedback,FcHighPriority} from "react-icons/fc";
import{Router ,NavLink} from 'react-router-dom'
import Register from './Register';
import Home from './Home'
import Users from "./Users";
import Dashbord from "./Dashbord";
import axios from 'axios'

const btnlg={background:'coral', border:'none'}
const err={color:'red'}
const sing={color:'coral'}
const forget={color:'white'}
const shadow = {boxShadow: '1px 2px 20px red',};

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [msgnotexitt,setMsgnotexitt]=useState(false);
    const [msgpwdaff,setMsgpwdaff]=useState(false);
    const [msguserexist,setMsguserexist]=useState(false);
    const logindata={email,password}
    const [erroor,setError]=useState(false)
    const onsubmit=async(e)=>{
        e.preventDefault();
        if(email.length==0 || password.length==0  ){
            setError(true)
        }else{
            // console.log(logindata)
            await axios.post('http://127.0.0.1:4111/api/auth/login',logindata)
            .then((responce)=>{
               const  messagepwd=responce.data.messagepwd
               const  messusernotexist=responce.data.messusernotexist
               const  messagesuccess=responce.data.messagesuccess
                 if(messagesuccess!=undefined){
                    setMsguserexist(true)
                    // localStorage.setItem('email',email)
                    // localStorage.setItem('name',email)
                    localStorage.setItem('NameUser',messagesuccess.username)
                    localStorage.setItem('EmailUser',messagesuccess.email)
                    localStorage.setItem('RoleUser',messagesuccess.role)
                    localStorage.setItem('passworduser',messagesuccess.password)

                }else if(messagepwd!=undefined){
                setMsgpwdaff(true)
                }else if(messusernotexist!=undefined){
                    setMsgnotexitt(true)
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
    return(
    <Container> 
        <form className='formregister' onSubmit={onsubmit} style={shadow}>
            <h1 className='loginh1 '>Login</h1>
            <h5 className='text-center'>
            {
                (msguserexist)
                // ?<span style={err} >user existe</span>
                
                ?window.location.replace('/Dashbord') 
                :(msgpwdaff)
                ?<span style={err} >password inccorect</span>:
                (msgnotexitt)
                ?<span style={err} >user noot existe</span>
                :""
            }
            </h5>


            <div class="mb-3" >
                <span className='FcFeedback'><FcFeedback/></span>
                <label  className="form-label">Email </label>
                <input type="text"  name='email' onChange={(e)=>{setEmail(e.target.value)}} className="form-control p-2 fs-4"   placeholder=" Enter email"/>
                {(erroor && email.length<=0) ? <span style={err}> <FcHighPriority className='FcHighPriority2' />{ ' '}email et obligatoir</span>:""}
            </div>
            <div class="mb-3">
                <span className='FcLock'><FcLock/></span>
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name='password' onChange={(e)=>{setPassword(e.target.value)}} className="form-control p-2 fs-4" id="pwdlog" placeholder=" Enter password" />
                    {(erroor && password.length<=0)?<span style={err} ><FcHighPriority className='FcHighPriority2' />{ ' '}password obligatoir</span>:""}
            </div>
            <div class="d-grid gap-2">
                <button type='submit' className="btn btn-lg fw-bolder fs-3 p-2" style={btnlg}>login</button>
            </div>
            <h5 className='sing'>You do not have account ?<NavLink to='/Register' className='h6log'>Sign up now</NavLink></h5>
            <h5 className='sing' >{' '}<NavLink to='/Register' className='forget'>Forget password ?</NavLink></h5>
        </form>
    </Container>
    );
};

export default Login
