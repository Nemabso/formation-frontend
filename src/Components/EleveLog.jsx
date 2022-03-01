import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import axios from 'axios';

export default function EleveLog() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [massege, setMassege] = useState("");
    // const [interCodeA, setInterCodeA] = useState([]);
    // const [interCodeB, setInterCodeB] = useState([]);
    const [code, setCode] = useState("");

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/user/allcodes`).then((res) => {
    //         console.log("res de eleves log", res);
    //         setInterCodeA(res.data.map((files) => [files.eleveCodeA, files._id]));
    //         setInterCodeB(res.data.map((elCodeB) => [elCodeB.eleveCodeB, elCodeB._id]));
    //     }).catch((err) => {
    //         console.error("error de recuperer les codes pour eleves !", err);
    //     })
    // }, []);
    // console.log("inter codesA! ", interCodeA, "interCodeB", interCodeB);
    // const matchA = interCodeA.find((item) => {
    //     if (code === item) {
    //         return true
    //     } else {
    //         return false
    //     }
    // })
    // const matchB = interCodeB.find((item) => {
    //     if (code === item) {
    //         return true
    //     } else {
    //         return false
    //     }
    // })

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5000/user/elevecode", { code: code }).then((res) => {
            console.log("code recu de eleve code", res.data);
            if (res.data.salonA) {
                sessionStorage.setItem("salonAID", res.data.salonA);
                return navigate("/sallea");
            }
            if (res.data.salonB) {
                sessionStorage.setItem("salonBID", res.data.salonB);
                return navigate("/salleb");
            }
        }).catch(({ response }) => {
            console.log("res de back", response);
            setShowModal(true);
            setMassege(response.data.message);
        })
        // if (!matchA || !matchB) {
        //     setShowModal(true);
        //     setMassege("Le mot de pass n'est pas correct !")
        // }
        // if (matchA) {
        //     return navigate("/sallea")
        // }
        // if (matchB) {
        //     return navigate("/salleb")
        // }
    }


    return (
        <div className="page-elevelogin ">
            <div className="login">
                <Modal className="modal-signup rounded-pill bg-light col-5" ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                    <h1>{massege}</h1>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>fermer</button>
                </Modal>
                <form onSubmit={onSubmit} className='form-figure' encType="multipart/form-data" >
                    <input className="login-input" required autoComplete="off" name="password" placeholder="Password ..." type="text" onChange={(e) => setCode(e.target.value)} />
                    <button type="submit" className="submit-button">Entrer</button>
                </form>
            </div>
        </div>
    )
}
