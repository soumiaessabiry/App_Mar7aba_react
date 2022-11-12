import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const bgg={'background':'#fd7e14'}

const ModalAjouter=(props)=>{
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="Ajouter text-dark" id="exampleModalLabel">Ajouter {props.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-dark fw-bolder">
                    <form>
                        <div className="mb-3">
                            <label className="col-form-label fs-5">Nom de {props.name}</label>
                            <input type="text" className="form-control p-2 fs-4"  />
                        </div>
                        <div className="mb-3">
                            <label for="message-text" className="col-form-label fs-5">Email  {props.name}</label>
                            <input type="email" className="form-control p-2 fs-4" />

                        </div>
                        <div className="mb-3">
                            <label for="message-text" className="col-form-label fs-5">Password </label>
                            <input type="password" className="form-control p-2 fs-4" />

                        </div>
                        <div className="mb-3">
                            <label for="message-text" className="col-form-label fs-5">Role</label>
                            <input type="text" className="form-control p-2 fs-4" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer ">
                    <button type="button" className="btn btn-secondary fw-bolder p-3" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn p-3 fw-bolder text-white" style={bgg}>Ajouter {props.name}</button>
                </div>
                </div>
            </div>
        </div>
    )

}
export default ModalAjouter