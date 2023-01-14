import { Container } from 'react-bootstrap';
import {FcLock ,FcFeedback} from "react-icons/fc";
import { FcPortraitMode ,FcCheckmark ,FcHighPriority} from "react-icons/fc";
import {NavLink, redirect} from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const btnlg={background:'coral', border:'none'}
const sing={color:'coral',Text:'bolder' }
const err={color:'red',Text:'bolder' }
const err2={color:'red',Text:'center' }
const shadow = { boxShadow: '1px 2px 20px yellow'};


const Register=()=>{    
    const [username ,setUsername]=useState('');
    const [email ,setEmail]=useState('');
    const [password ,setPassword]=useState('');
    const [confirmpwd ,setConfirmpwd]=useState('');
    const [error,setError]=useState(false);
    const [errorem,setErrmail]=useState(false);
    const data = {username, email, password}
    
    const dataSubmit= async (e)=>{
        e.preventDefault();
        if(username.length==0 ||email.length==0 ||password.length==0 ||confirmpwd.length==0 || password!=confirmpwd){
            setError(true)
        }else{
            await axios.post('http://127.0.0.1:4111/api/auth/register',data )
            .then((responce)=>{
                const verficemail =responce.data.message
                if(verficemail!=undefined){
                    setErrmail(true)
                }else{
                    window.location.replace('/Login') 
                    
                }
            
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
    return(
    <Container>
        <form className='formregister' style={shadow} onSubmit={dataSubmit}>
            <h1 className='regih1'>Register</h1>
            <h5 className='text-center'>{(errorem)?<span style={err2}><FcHighPriority className='FcHighPriority' />{' '}Email is already exist</span>:""}</h5>
            <div className="mb-3" >
                <span className='FcPortraitMode'><FcPortraitMode/></span>
                <label  className="form-label">Username</label>
                <input type="text" name='username' className="form-control p-2 fs-4" onChange={(e)=>{setUsername(e.target.value)}} placeholder=" Enter username" />
                {(error && username.length<=0) ?<span style={err}>username obligatoir</span>:""}
            </div>
            <div className="mb-3" >
                <span className='FcFeedback'><FcFeedback/></span> 
                <label  className="form-label">Email </label>
                <input type="email" name='email' className="form-control p-2 fs-4" onChange={(e)=>{setEmail(e.target.value)}}  aria-describedby="emailHelp" placeholder=" Enter email" />
                {(error && email.length<=0)?<span style={err}>email obligatoir</span>:""}
            </div>
            <div className="mb-3">
                <span className='FcLock'><FcLock/></span>
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password"  name='password' className="form-control p-2 fs-4" onChange={(e)=>{setPassword(e.target.value)}} placeholder=" Enter password" />
                {(error && email.length<=0)?<span style={err}>password obligatoir</span>:""}
            </div>
            <div className="mb-3">
                <span className='FcCheckmark'><FcCheckmark/></span>
                <label  className="form-label">Confirm Pssword</label>
                <input type="password" name='confirmpwd' className="form-control p-2 fs-4" onChange={(e)=>{setConfirmpwd(e.target.value)}} placeholder=" Enter username"/>
                {(error && confirmpwd.length<=0 || password!=confirmpwd)?<span style={err}>password incorrect</span>:""}
            </div>
            <div className="d-grid gap-2">
                <button type="submit" name="submit" className="btn btn-lg fw-bolder p-3 fs-3" style={btnlg}>Register</button>
            </div>
            <h4 className='preg'>{' '}<NavLink to='/Login' className='preg' style={sing}>Login</NavLink></h4>
        </form>
    </Container>
    );
}
export default Register
 