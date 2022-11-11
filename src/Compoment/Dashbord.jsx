import Container from "react-bootstrap/esm/Container";
import Sidebar from "./Sidbar"
import Navbar from './Navbar'
import Tables from './Table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const bgg={'background':'#fd7e14'}
const over={'overflow': 'auto'}
const Dashbord=()=>{
    return(
     <div className="h-100 bg-white">
      <div className="d-flex h-100">
        <div className="p-4 " style={bgg}>
          <Sidebar/>
        </div>
        <div className=" p-1 w-100" style={over} >
          <Row className=" m-auto">
            <Navbar />
          </Row>
          <Row className="  m-auto mt-3 bg-light ">
            <Tables   />
          </Row>
        </div>
        
      </div>
     </div>
    )

}
export default Dashbord