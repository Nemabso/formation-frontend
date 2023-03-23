import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating';
import Modal from "react-modal";
import { FaStar } from "react-icons/fa";


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

        await axios.post(`http://localhost:5000/user/avis`, { data: avis, rating: rating }).then((res) => {
            setMassege(res.data.message);
            setShowModal(true);
            setRefresh((prev) => !prev);
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
            <h1 className='p-3 text-center' style={{ fontFamily: "charm" }} >Les avis des apprenants </h1>
            <div className='row m-auto ' style={{ minHeight: "101vh" }}>
                <div className='p-3 col-md-6'>
                    <form onSubmit={submitHandle} className='container p-3 rounded bg-light' style={{ height: "612px" }}>
                        <div className='p-4'>
                            <div className="mb-3">
                                <label htmlFor="lname" className="form-label">Nom</label>
                                <input type="text" className="form-control" name='nom' id="lname" onChange={handleChanges} placeholder="votre nom ...*" required />
                                {/* <div className="valid-feedback">
                            Looks good!
                        </div> */}
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
                </div>

                <div className='col-md-6 m-auto'>
                    {getAvis && getAvis.map((avis, index) => {
                        return (
                            <article key={index} className=' p-3 '>
                                <div className="border">
                                    {/* <div className="card-header bg-transparent border-light"></div> */}
                                    <div className='d-flex p-3 gap-2 align-items-center' style={{ width: "300px" }}>
                                        <p className=''><strong> Avis client</strong> </p>
                                        <div className="bg-transparent mb-1">{[...Array(5)].map((star, i) => {
                                            const ratingValue = i + 1;
                                            return (<FaStar size={20} key={i} color={ratingValue <= (avis.ratAvis) ? "#ffc107" : "#e4e5e9"} />)
                                        })}
                                        </div>
                                        <p><strong> {avis.ratAvis}/5</strong></p>
                                    </div>
                                    <div className="">
                                        {/* <h6 className="card-title">{avis.nom}</h6> */}
                                        <p className="p-2">{avis.descriptions}</p>
                                        <p className='float-end pe-3' >le {avis.createdOn.split("T").slice(0, 1)} par<b> {avis.nom}</b></p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>

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
