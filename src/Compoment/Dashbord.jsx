import Container from "react-bootstrap/esm/Container";
import { FaDollyFlatbed} from "react-icons/fa";
import { FcManager} from "react-icons/fc";
import { ImUsers} from "react-icons/im";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidbar"
import Navbar from './Navbar'
import Tables from './Table'
import Livreur from './Livreur'
import Client from './Client'
import Manger from './Manger'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const bgg={'background':'#fd7e14'}
const over={'overflow': 'auto'}
const icon={"fontSize": "35px","color":"brown"}
const shadow = {
  boxShadow: '13px 8px 13px coral','border':'none'
};
const Dashbord=()=>{
    return(
     <div className="h-100 bg-white">
      <div className="d-flex h-100">
        <div className="p-4 " style={bgg}>
          <Sidebar/>
        </div>
        <div className=" p-1 w-100" style={over} >
          <Row className="  m-auto mt-3 bg-light text-dark">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col " >
                <div className="card" style={shadow}>
                  <div className="card-body">
                    <h5 className="card-title text-end"><FaDollyFlatbed style={icon}/></h5>
                    <h5 className="card-title text-start fw-bold fs-3">Livreur</h5>
                    <h5 className="card-title text-end">0</h5>
                  </div>
                </div>
              </div>
              <div className="col" >
                <div className="card" style={shadow}>
                  <div className="card-body">
                    <h5 className="card-title text-end"><FcManager style={icon}/></h5>
                    <h5 className="card-title text-start fw-bold fs-3">Manger</h5>
                    <h5 className="card-title text-end">0</h5>
                  </div>
                </div>
              </div> <div className="col" >
                <div className="card" style={shadow}>
                  <div className="card-body">
                    <h5 className="card-title text-end"><ImUsers style={icon}/></h5>
                    <h5 className="card-title text-start fw-bold fs-3">Client</h5>
                    <h5 className="card-title text-end">0</h5>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>  
      </div>
     </div>
    )

}
export default Dashbord

