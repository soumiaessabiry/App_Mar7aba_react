import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {FcLock ,FcFeedback,FcHighPriority} from "react-icons/fc";
import{Router ,NavLink} from 'react-router-dom'
import Register from './Register';
import Home from './Home'
import Users from "./Users";
import axios from 'axios'

const btnlg={background:'coral', border:'none'}
const err={color:'red'}
const sing={color:'coral'}
const shadow = {boxShadow: '1px 2px 20px #F4AAB9',};

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
                    // localStorage.setItem('RoleUser',messagesuccess.Role)

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
            <h1 className='loginh1'>Login</h1>
            <h5 className='text-center'>
            {
                (msguserexist)
                // ?<span style={err} >user existe</span>
                ?window.location.replace('/Users') 
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
                <input type="text"  name='email' onChange={(e)=>{setEmail(e.target.value)}} className="form-control"   placeholder=" Enter email"/>
                {(erroor && email.length<=0) ? <span style={err}> <FcHighPriority className='FcHighPriority2' />{ ' '}email et obligatoir</span>:""}
            </div>
            <div class="mb-3">
                <span className='FcLock'><FcLock/></span>
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name='password' onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="pwdlog" placeholder=" Enter password" />
                    {(erroor && password.length<=0)?<span style={err} ><FcHighPriority className='FcHighPriority2' />{ ' '}password obligatoir</span>:""}
            </div>
            <div class="d-grid gap-2">
                <button type='submit' className="btn btn-lg fw-bolder" style={btnlg}>login</button>
            </div>
            <h6 className='sing'>Note a member{' '}<NavLink to='/Register' className='h6log'>Sign up now</NavLink></h6>
        </form>
    </Container>
    );
};

export default Login
