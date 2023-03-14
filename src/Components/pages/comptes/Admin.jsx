import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Registering from '../../Registering';
import { BsFillChatSquareDotsFill, BsSpeedometer } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { FaStar } from "react-icons/fa";
import "./admin.css";

export default function Admin({ userID }) {

    const [showModal, setShowModal] = useState(false);
    const [showPorcent, setPorcentModal] = useState(false);
    const [modalCompte, setModalCompte] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [avisRecu, setAvisRecu] = useState([]);
    const [counter, setCounter] = useState(null);
    const [hoverMessage, setHoverMessage] = useState("");
    const [compteCounter, setCompteCounter] = useState(null);
    const [comptes, setComptes] = useState([]);
    const [avishoverMessage, setAvisHoverMessage] = useState("");
    const [pourcenthoverMessage, setPourcentHoverMessage] = useState("");

    const [pourcentA, setPourcentA] = useState(null);
    const [pourcentB, setPourcentB] = useState(null);
    const [pourcentC, setPourcentC] = useState(null);

    // console.log("pourcentA, B ,C", pourcentA, pourcentB, pourcentC);
    // console.log("counter", counter);
    // console.log("avisRecu", avisRecu);
    // console.log("userID Admin", userID);

    const handleAccepte = (id) => {
        // console.log("handleAccepte", id);
        if (userID) {
            axios.put(`http://localhost:5000/user/acceptavis/${id}`).then((res) => {
                // console.log("avis a accepte !", res);
                setRefresh((prev) => !prev);
            }).catch(({ response }) => {
                console.log("response de accepte avis", response);
            })
        }
        if (!userID) {
            alert("vous devez vous connectez pour continuer !")
        }
    }
    const handleDelete = (emal) => {
        // console.log("handleDelete", emal);
        if (userID) {
            axios.delete(`http://localhost:5000/user/deleteavis/${emal}`).then(() => {
                // console.log("avis a ete supprime !");
                setRefresh((prev) => !prev);
            }).catch(({ response }) => {
                console.log("response de delete avis", response);
            })
        }
        if (!userID) {
            alert("vous devez vous connectez pour continuer !")
        }
    }

    const getAvis = () => {
        if (userID) {
            axios.get(`http://localhost:5000/user/adminavisget`).then((res) => {
                // console.log("admin get avis", res);
                setCounter(res.data.length);
                setAvisRecu(res.data);
            }).catch(({ response }) => {
                console.log("error de get admin avis", response);
            })
        }
        if (!userID) {
            alert("vous devez vous connectez pour continuer !")
        }
    }

    const getComptes = () => {
        if (userID) {
            axios.get(`http://localhost:5000/user/admincomptesget`).then((res) => {
                // console.log("admin get comptes", res);
                setCompteCounter(res.data.length);
                setComptes(res.data);
            }).catch(({ response }) => {
                console.log("admin get comptes response", response)
            })
        }
        if (!userID) {
            alert("vous devez vous connectez pour continuer !")
        }
    }

    const deleteComptes = (id) => {
        if (userID) {
            axios.delete(`http://localhost:5000/user/comptedelete/${id}`).then(() => {
                // console.log("compte a ete supprime !");
                setRefresh((prev) => !prev);
            }).catch(({ response }) => {
                console.log("response de delete comptes", response);
            })
        }
        if (!userID) {
            alert("vous devez vous connectez pour continuer !")
        }
    }
    const pourcentHandle = () => {
        // console.log("pourcentage", pourcentA, pourcentB, pourcentC);
        if (userID) {
            axios.post("http://localhost:5000/user/pourcentage", {
                userId: userID, pourcentA: pourcentA, pourcentB: pourcentB, pourcentC: pourcentC
            }).then(() => {
                // console.log("pourcentag a fixé");
                setRefresh((prev) => !prev);
            }).catch(({ response }) => {
                console.log("response de pourcentage", response);
            })
        }
        if (!userID) {
            alert("vous devez vous connectez pour continuer !")
        }
    }
    useEffect(() => {
        getAvis();
        getComptes();
    }, [refresh]);


    return (
        <div>
            <header className='d-flex align-items-center justify-content-between'>
                {/* avis */}
                <div className='position-relative p-3'>
                    <button onClick={() => { setShowModal(true); setFullscreen(true) }} className='btn mt-2 ms-2'><BsFillChatSquareDotsFill
                        onMouseEnter={() => setHoverMessage("Avis reçus")} onMouseLeave={() => setHoverMessage("")} size={40} />
                    </button>
                    <span className='notif-counter'>{counter} </span>
                    <span className='notif-message'> {hoverMessage}</span>
                </div>
                {/* pourcentage */}
                <div className='position-relative p-3'>
                    <button onClick={() => { setPorcentModal(true); setFullscreen(true) }} className='btn mt-2 ms-2'><BsSpeedometer
                        onMouseEnter={() => setPourcentHoverMessage("Changer le pourcentage")} onMouseLeave={() => setPourcentHoverMessage("")} size={40} />
                    </button>
                    <span className='notif-counter'>{3} </span>
                    <span className='notif-message'> {pourcenthoverMessage}</span>
                </div>
                {/* comptes */}
                <div className='position-relative p-3'>
                    <button onClick={() => { setModalCompte(true); setFullscreen(true) }} className='btn mt-2 ms-2'><MdManageAccounts
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
                        <div className="border border-secondary " style={{ width: "38rem" }}>
                            {/* <div className="card-header bg-transparent border-success"></div> */}
                            <div className="card-body">
                                {/* <h5 className="card-title">{avis.nom}</h5> */}
                                <p className="card-text text-success">Email : {avis.email}</p>
                                <p className="card-text float-end pe-3">Fonctionne : {avis.fonctionne}</p>
                                <p className="card-text">Societé : {avis.societe}</p>
                                <p className='card-text float-end pe-3' >le {avis.createdOn.split("T").slice(0, 1)} par<b> {avis.nom}</b></p>
                                <p className="card-text">Avis : {avis.descriptions}</p>
                            </div>
                            <div className="card-footer bg-transparent border-success d-flex justify-content-between align-items-center">
                                <div>
                                    {[...Array(5)].map((star, i) => {
                                        const ratingValue = i + 1;
                                        return (<FaStar size={30} key={i} color={ratingValue <= (avis.ratAvis) ? "#ffc107" : "#e4e5e9"} />)
                                    })}
                                </div>
                                <div className='d-flex justify-content-between'>
                                    {(avis.recently === true) && <button onClick={() => { if (window.confirm("vous allez acceptez ce avis ?")) handleAccepte(avis._id) }} className='btn me-3' style={{ backgroundColor: "#abea81" }} >accepter</button>}
                                    <button onClick={() => { if (window.confirm("vous allez refuser ce avis ?")) handleDelete(avis.email) }} className='btn btn-danger'>{avis.recently === false ? "supprimer" : "refuser"}</button>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </Modal>
            <Modal role="document" fullscreen={fullscreen}
                show={modalCompte} onHide={() => setModalCompte(false)}>
                <ModalHeader closeButton />
                <h2 className='p-3'>Tous les Comptes (attention aux admins):</h2>
                {comptes && comptes.map((user, index) => (
                    <article key={index} className='d-flex justify-content-center p-3'>
                        <div className="border border-secondary " style={{ width: "38rem" }}>
                            <div className="card-header bg-transparent border-success"></div>
                            <div className="card-body">
                                <h5 className="card-title">Nom: {user.lastName}</h5>
                                <p className="card-text">Email: {user.email}</p>
                                <p className={`card-text ${user.role === "admin" ? "text-danger fw-bold" : "fw-bold"}`}>Role: {user.role}</p>
                            </div>
                            <div className="card-footer bg-transparent border-success d-flex justify-content-between align-items-center">
                                <div>
                                    <button onClick={() => { if (window.confirm("vous allez supprimer ce compte ?")) deleteComptes(user._id) }} className='btn btn-danger' >supprimer</button>
                                    {/* <button onClick={() => { if (window.confirm("vous allez refuser ce avis ?")) handleDelete(avis.email) }} className='btn btn-danger'>refuser</button> */}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </Modal>
            <Modal role="document" fullscreen={fullscreen}
                show={showPorcent} onHide={() => setPorcentModal(false)}>
                <ModalHeader closeButton />
                <h2 className='p-3'>Changer le pourcentage (page Avis CLIENT) :</h2>
                <div className='admin-pourcent-form'>
                    <div className='d-flex '>
                        <p>Satisfaction employeur :</p> <input type="number" accept='number' onChange={(e) => setPourcentA(e.target.value)} />
                    </div>
                    <div className='d-flex '>
                        <p>Satisfaction Pôle Emploi :</p> <input type="number" accept='number' onChange={(e) => setPourcentB(e.target.value)} />
                    </div>
                    <div className='d-flex '>
                        <p>Satisfaits apprenants :</p> <input type="number" accept='number' onChange={(e) => setPourcentC(e.target.value)} />
                    </div>
                    <button className='btn btn-primary float-end' onClick={() => pourcentHandle()} >OK</button>
                </div>
            </Modal>


        </div>
    )
}
