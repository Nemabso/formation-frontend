import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Registering from '../../components/Registering';
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { FaStar } from "react-icons/fa";
import "./admin.css"

export default function Admin() {

    const [showModal, setShowModal] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [avisRecu, setAvisRecu] = useState([]);
    const [counter, setCounter] = useState(null);
    const [hoverMessage, setHoverMessage] = useState("");
    const [compteCounter, setCompteCounter] = useState(null);
    const [comptes, setComptes] = useState([]);
    const [avishoverMessage, setAvisHoverMessage] = useState("");

    // console.log("counter", counter);
    // console.log("avisRecu", avisRecu);

    const handleAccepte = (id) => {
        // console.log("handleAccepte", id);
        axios.put(`http://localhost:5000/user/acceptavis/${id}`).then((res) => {
            console.log("avis a accepte !", res);
            setRefresh((prev) => !prev);
        }).catch(({ response }) => {
            console.log("response de accepte avis", response);
        })
    }
    const handleDelete = (emal) => {
        // console.log("handleDelete", emal);
        axios.delete(`http://localhost:5000/user/deleteavis/${emal}`).then(() => {
            console.log("avis a ete supprime !");
            setRefresh((prev) => !prev);
        }).catch(({ response }) => {
            console.log("response de delete avis", response);
        })
    }

    const getAvis = () => {
        axios.get(`http://localhost:5000/user/adminavisget`).then((res) => {
            console.log("admin get avis", res);
            setCounter(res.data.length);
            setAvisRecu(res.data);
        }).catch(({ response }) => {
            console.log("error de get admin avis", response);
        })
    }

    useEffect(() => {
        getAvis();
    }, [refresh]);


    return (
        <div>
            <header className='d-flex align-items-center justify-content-between'>
                <div className='position-relative p-3'>
                    <button onClick={() => { setShowModal(true); setFullscreen(true) }} className='btn mt-2 ms-2'><BsFillChatSquareDotsFill
                        onMouseEnter={() => setHoverMessage("Avis reçu !")} onMouseLeave={() => setHoverMessage("")} size={40} />
                    </button>
                    <span className='notif-counter'>{counter} </span>
                    <span className='notif-message'> {hoverMessage}</span>
                </div>
                <div className='position-relative p-3'>
                    <button onClick={() => { setShowModal(true); setFullscreen(true) }} className='btn mt-2 ms-2'><MdManageAccounts
                        onMouseEnter={() => setAvisHoverMessage("gérer les comptes")} onMouseLeave={() => setAvisHoverMessage("")} size={50} />
                    </button>
                    <span className='notif-comptes'>{compteCounter}</span>
                    <span className='notif-message'> {avishoverMessage}</span>
                </div>
            </header>
            <Registering />

            <Modal role="document" fullscreen={fullscreen}
                show={showModal} onHide={() => setShowModal(false)}>
                <ModalHeader closeButton />
                <h2 className='p-3'>Des avis reçus :</h2>
                {avisRecu && avisRecu.map((avis, index) => (
                    <article key={index} className='d-flex justify-content-center p-3'>
                        <div className="border border-primary " style={{ width: "38rem" }}>
                            <div className="card-header bg-transparent border-success"></div>
                            <div className="card-body text-success">
                                <h5 className="card-title">{avis.nom}</h5>
                                <p className="card-text">{avis.descriptions}</p>
                            </div>
                            <div className="card-footer bg-transparent border-success d-flex justify-content-between align-items-center">
                                <div>
                                    {[...Array(5)].map((star, i) => {
                                        const ratingValue = i + 1;
                                        return (<FaStar size={30} key={i} color={ratingValue <= (avis.ratAvis) ? "#ffc107" : "#e4e5e9"} />)
                                    })}
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button onClick={() => { if (window.confirm("vous allez acceptez ce avis ?")) handleAccepte(avis._id) }} className='btn me-3' style={{ backgroundColor: "#abea81" }} >accepter</button>
                                    <button onClick={() => { if (window.confirm("vous allez refuser ce avis ?")) handleDelete(avis.email) }} className='btn btn-danger'>refuser</button>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </Modal>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}
