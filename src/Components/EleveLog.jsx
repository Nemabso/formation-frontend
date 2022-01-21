import React, { useState } from 'react'
import Modal from "react-modal";

export default function EleveLog() {
    const [showModal, setShowModal] = useState(false);
    const [massege, setMassege] = useState("")
    const [user, setUser] = useState({ email: "", password: "" })

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({ ...user, [name]: value })
    }
    return (
        <div className="page-elevelogin ">
            <div className="login">
                {/* <h1 className="login-heading">Login</h1> */}
                <Modal className="modal-signup rounded-pill bg-light col-5" ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                    <h1>{massege}</h1>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </Modal>
                <form className='form-figure' >
                    <input className="login-input" required autoComplete="off" name="password" placeholder="Password ..." type="password" onChange={handleChange} />
                    <button type="submit" className="submit-button">Entrer</button>
                </form>
            </div>
        </div>
    )
}
