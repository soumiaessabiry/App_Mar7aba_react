import { Row } from "react-bootstrap";
import Col from "react-bootstrap";
import Navbar from "./Navbar";
import Tables from "./Table";
import Dashbord from "./Dashbord";
import Sidebar from "./Sidbar"
import ModalAjouter from "./ModalAjouter"
const over={'overflow': 'auto'}
const iconBsPC={'display':'none'}
const bgg={'background':'#fd7e14'}
const Client=()=>{
    return(
        <div className="h-100 bg-white">
            <div className="d-flex h-100">
                <div className="p-3 " style={bgg}>
                    <Sidebar/>
                </div>
                <div className=" p-1 w-100" style={over} >
                        <Row className=" m-auto" style={bgg}>
                            <Navbar name=" Client" iconBsP={iconBsPC} />
                        </Row>
                        <Row className="  m-auto mt-3 bg-light text-dark">
                            <div>
                                <div className=" p-1 w-100" style={over} >
                                <Row className="  m-auto mt-3 bg-light ">
                                    <Tables   />
                                </Row>
                                </div>
                            </div>
                        </Row>
                </div>
            </div>
       </div>
      
    )
}
export default Client
