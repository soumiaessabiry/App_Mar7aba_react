import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FcLock} from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";


const btnlg={background:'coral', border:'none'}
const sing={color:'coral'}
const shadow = {
    boxShadow: '1px 2px 20px #F4AAB9',
  };
const Login=()=>{
    return(
       <Container>
            <Form className='formlogin' style={shadow}>
            <h1 className='loginh1'>Login</h1>
                <Form.Group className="mb-3" controlId="Emaillogin">
                    
                    <Form.Label  ><span className='FcFeedback'><FcFeedback/></span>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Passwordlogin">
                <span className='FcLock'><FcLock/></span><Form.Label>Password</Form.Label>
                    <Form.Control type="password"  placeholder="Password" />
                </Form.Group>
                <p><a href="http://" style={sing}>Forget Passwprd ?</a></p>
                <div className="d-grid gap-2">
                   <Button  type="submit" style={btnlg} size="lg">Login</Button>
                </div>               
                 <h6 >Note a member{' '}<a className='h6log' href="http://" style={sing}>Sign up now</a></h6>

            </Form>
            
       </Container>
    );
};

export default Login