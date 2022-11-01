import { Container } from 'react-bootstrap';
import {FcLock ,FcFeedback} from "react-icons/fc";
import{Router ,NavLink} from 'react-router-dom'
import Register from './Register';
const btnlg={background:'coral', border:'none'}
const sing={color:'coral'}
const shadow = {
    boxShadow: '1px 2px 20px #F4AAB9',
  };
const Login=()=>{
    return(
    <Container> 
        <form className='formregister' style={shadow}>
            <h1 className='loginh1'>Login</h1>
            <div class="mb-3" >
            <span className='FcFeedback'><FcFeedback/></span><label  class="form-label">Email </label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
            <span className='FcLock'><FcLock/></span><label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" className="form-control" id="passwordreg" />
            </div>
            <div class="d-grid gap-2">
                <button type="submit" className="btn btn-lg fw-bolder" style={btnlg}>login</button>
            </div>
            <h6 className=''>Note a member{' '}<NavLink to='/Register' className='h6log'>Sign up now</NavLink></h6>
        </form>
    </Container>
    );
};

export default Login
