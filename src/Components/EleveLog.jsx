import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import axios from 'axios';

export default function EleveLog() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [massege, setMassege] = useState("");
    const [interCodeA, setInterCodeA] = useState([]);
    const [interCodeB, setInterCodeB] = useState([]);
    const [code, setCode] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/user/allcodes`).then((res) => {
            setInterCodeA(res.data.map((files) => files.eleveCodeA));
            setInterCodeB(res.data.map((elCodeB) => elCodeB.eleveCodeB));
        }).catch((err) => {
            console.error("error de recuperer les codes pour eleves !", err)
        })
    }, []);
    console.log("inter codesA! ", interCodeA, "interCodeB", interCodeB);
    const matchA = interCodeA.find((item) => {
        if (code === item) {
            return true
        } else {
            return false
        }
    })
    const matchB = interCodeB.find((item) => {
        if (code === item) {
            return true
        } else {
            return false
        }
    })

    const onSubmit = (e) => {
        e.preventDefault();
        if (!matchA || !matchB) {
            setShowModal(true);
            setMassege("Le mot de pass n'est pas correct !")
        }
        if (matchA) {
            return navigate("/sallea")
        }
        if (matchB) {
            return navigate("/salleb")
        }
    }


    return (
        <div className="page-elevelogin ">
            <div className="login">
                <Modal className="modal-signup rounded-pill bg-light col-5" ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                    <h1>{massege}</h1>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </Modal>
                <form onSubmit={onSubmit} className='form-figure' >
                    <input className="login-input" required autoComplete="off" name="password" placeholder="Password ..." type="text" onChange={(e) => setCode(e.target.value)} />
                    <button type="submit" className="submit-button">Entrer</button>
                </form>
            </div>
        </div>
    )
}
