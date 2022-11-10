import Container from "react-bootstrap/esm/Container";
import Sidebar from "./Sidbar"
import Navbar from './Navbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const bgg={'background':'#bcbc5e'}
const Dashbord=()=>{
    return(
     <div className="h-100">
      <div className="d-flex h-100">
        <div className="p-4 " style={bgg}>
          <Sidebar/>
        </div>
        <div className=" p-1 w-100" >
          <Row className=" m-auto" style={bgg}>
            <Navbar/>
          </Row>
        </div>
        
      </div>
     </div>
    )

}
export default Dashbord