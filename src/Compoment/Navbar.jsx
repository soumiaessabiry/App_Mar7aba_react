import { Container } from "react-bootstrap"
import Row from "react-bootstrap"
import Col from "react-bootstrap"
import { BsPersonPlusFill} from "react-icons/bs";
import ModalAjouter from "./ModalAjouter"
const iconBsP={"fontSize": "35px"}

const Navbar=(props)=>{
return(
    <div className="d-flex bd-highlight mb-3">
        <div className="p-2 bd-highlight">
            <form className="d-flex mt-2">
                <input className="form-control me-2 p-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn  fw-bolder fs-5" type="submit">Search</button>
            </form>
        </div>
        <div className="ms-auto p-2 bd-highlight mt-2">
            <button type="button" className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><BsPersonPlusFill style={props.iconBsP}/></button>
        </div>
    </div>
)
}
export default Navbar