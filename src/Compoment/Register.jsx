// bootstrap
import { Container } from 'react-bootstrap';
// icon
import {FcLock ,FcFeedback} from "react-icons/fc";
import { FcPortraitMode ,FcCheckmark} from "react-icons/fc";
// react dom 
import {NavLink} from 'react-router-dom';
// compoment
import Login from './Login';
// usestate
import { useState } from 'react';
// style css
const btnlg={background:'coral', border:'none'}
const sing={color:'coral',Text:'bolder' }
const shadow = {
    boxShadow: '1px 2px 20px #F4AAB9',
  };
//   creat usestate
//  compoment
const Register=()=>{
    const [username ,setUsername]=useState('');
    const test = () => {
        console.log(username)
    }

    return(
    <Container>
        <form className='formregister' style={shadow}>
            <h1 className='regih1'>Register</h1>
            <div className="mb-3" >
                <span className='FcPortraitMode'><FcPortraitMode/></span>
                <label  className="form-label">Username</label>
                <input type="text" className="form-control" id="emailreg"  />
            </div>
            <div class="mb-3" >
                <span className='FcFeedback'><FcFeedback/></span> 
                <label  className="form-label">Email </label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <span className='FcLock'><FcLock/></span>
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" className="form-control" id="passwordreg" />
            </div>
            <div class="mb-3">
                <span className='FcCheckmark'><FcCheckmark/></span>
                <label  className="form-label">Confirm Pssword</label>
                <input type="password" className="form-control" id="confirmpwd" />
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-lg fw-bolder" style={btnlg}>Register</button>
            </div>
            <h5 className='preg'>{' '}<NavLink to='/Login' className='preg' style={sing}>Login</NavLink></h5>
        </form>
    </Container>
    );
}
export default Register
 