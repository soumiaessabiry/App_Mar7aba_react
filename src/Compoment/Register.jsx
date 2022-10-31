import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FcLock} from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
const btnlg={background:'coral', border:'none'}
const sing={color:'coral',Text:'bolder' }
const shadow = {
    boxShadow: '1px 2px 20px #F4AAB9',
  };
const Register=()=>{
    return(
        <Container>
        <Form className='formregister' style={shadow}>
            <h1 className='regih1'>Register</h1>
            <Form.Group className="mb-3" controlId="username">
            <span className='FcPortraitMode'><FcPortraitMode/></span>  <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Emailregister">
            <span className='FcFeedback'><FcFeedback/></span>  <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Passwordregister">
            <span className='FcLock'><FcLock/></span> <Form.Label>Password</Form.Label>
                <Form.Control type="password"  placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmpassword">
                <span className='FcCheckmark'><FcCheckmark/></span> <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password"  placeholder="confirme password" />
            </Form.Group>
            <div className="d-grid gap-2">
               <Button  type="submit" style={btnlg} size="lg">Register</Button>
            </div>               
             <h5 className='preg'>{' '}<a href="http://" style={sing}>Login</a></h5>

        </Form>
        
   </Container>
    );
}
export default Register