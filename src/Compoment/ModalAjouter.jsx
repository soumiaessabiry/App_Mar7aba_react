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
                            <label className="col-form-label">Nom de {props.name}</label>
                            <input type="text" className="form-control p-2"  />
                        </div>
                        <div className="mb-3">
                            <label for="message-text" className="col-form-label">Email  {props.name}</label>
                            <input type="email" className="form-control p-2" />

                        </div>
                        <div className="mb-3">
                            <label for="message-text" className="col-form-label">Password </label>
                            <input type="password" className="form-control p-2" />

                        </div>
                        <div className="mb-3">
                            <label for="message-text" className="col-form-label">Role</label>
                            <input type="text" className="form-control p-2" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer ">
                    <button type="button" className="btn btn-secondary fw-bolder p-2" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn p-2 fw-bolder" style={bgg}>Ajouter {props.name}</button>
                </div>
                </div>
            </div>
        </div>
    )

}
export default ModalAjouter