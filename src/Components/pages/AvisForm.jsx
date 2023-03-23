import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating';
import Modal from "react-modal";
import { FaStar } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';

export default function AvisForm() {
    const [rating, setRating] = useState(1);
    const [refresh, setRefresh] = useState(false);
    const [getAvis, setGetAvis] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [massege, setMassege] = useState("")

    const [avis, setAvis] = useState({ nom: "", societe: "", fonctionne: "", email: "", descriptions: "" });
    const handleChanges = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setAvis({ ...avis, [name]: value })
    }

    const submitHandle = async (e) => {
        e.preventDefault();

        await axios.post(``, {}).then((res) => {
            
        }).catch(({ response }) => {
            setMassege(response.data.message);
            setShowModal(true);
        })
        e.target.reset();
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/user/recupereravis`).then((res) => {
            setGetAvis(res.data);
        }).catch(({ response }) => {
            console.log("problem de get avis", response);
        })
    }, [refresh]);

    return (
        <>
            <h1 className='p-3 text-center'>Laissez nos votre avis !</h1>
            <Row className='d-flex justify-content-center'>
                <Col className='p-3'>
                    <form onSubmit={submitHandle} className='container p-3 rounded bg-light'>
                        <div className='p-4'>
                            <div className="mb-3">
                                <label htmlFor="lname" className="form-label">Nom</label>
                                <input type="text" className="form-control" name='nom' id="lname" onChange={handleChanges} placeholder="votre nom ...*" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="societe" className="form-label">Societé </label>
                                <input type="text" className="form-control" name='societe' id="societe" required onChange={handleChanges} placeholder="Societé ...*" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Fonction" className="form-label">Fonction </label>
                                <input type="text" className="form-control" name='Fonction' id="Fonction" required onChange={handleChanges} placeholder="Fonction ...*" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailAddress" className="form-label">Adresse email </label>
                                <input type="email" className="form-control" name='email' id="emailAddress" required onChange={handleChanges} placeholder="votre email ...*" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="textArea" className="form-label">Donner votre avis</label>
                                <textarea className="form-control" spellCheck="true" name='descriptions' id="textArea" placeholder='votre avis...*' required onChange={handleChanges} rows="3" />
                            </div>
                            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                <div><StarRating rating={rating} setRating={setRating} /></div>
                                <div className='p-3'><button className="btn btn-primary" type="submit">Envoyer</button></div>
                            </div>
                        </div>
                    </form>
                </Col>
            </Row>

            <div>
                <Modal className="modal-signup rounded-pill bg-light col-5"
                    ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                    <h1>{massege}</h1>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>fermer</button>
                </Modal>
            </div>

        </>
    )
}
