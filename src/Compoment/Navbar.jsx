import { Container } from "react-bootstrap"
import Row from "react-bootstrap"
import Col from "react-bootstrap"
import { BsPersonPlusFill} from "react-icons/bs";
import ModalAjouter from "./ModalAjouter"
const iconBsP={"font-size": "35px"}

const Navbar=(props)=>{
return(
    <div class="d-flex bd-highlight mb-3">
        <div class="p-2 bd-highlight">
            <form class="d-flex mt-2">
                <input class="form-control me-2 p-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn  fw-bolder fs-5" type="submit">Search</button>
            </form>
        </div>
        <div class="ms-auto p-2 bd-highlight mt-2">
            <button type="button" class="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><BsPersonPlusFill Ajouter={props.name} style={iconBsP}/></button>
        </div>
    </div>
)
}
export default Navbar