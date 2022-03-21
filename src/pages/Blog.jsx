import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StarRating from '../components/StarRating';
import Modal from "react-modal";
import Footer from '../components/Footer';
import { FaStar } from "react-icons/fa";


export default function Blog() {
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
            console.log("avis a ete cree !", res);
            setMassege(res.data.message);
            setShowModal(true);
            setRefresh((prev) => !prev);
        }).catch(({ response }) => {
            console.log("probleme avis !", response);
            setMassege(response.data.message);
            setShowModal(true);
        })
        e.target.reset();
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/user/recupereravis`).then((res) => {
            console.log("here is get d'avis !!!", res);
            setGetAvis(res.data);
        }).catch(({ response }) => {
            console.log("problem de get avis", response);
        })
    }, [refresh]);

    // console.log("aviss", avis);
    // console.log("rating", rating);

    return (
        <>
            {/* <h1 className='p-4'>Blog page</h1> */}
            {getAvis && getAvis.map((avis, index) => {
                return (
                    <article key={index} className='d-flex bg-secondary justify-content-center p-3 '>
                        <div className="border border-light " style={{ width: "38rem" }}>
                            {/* <div className="card-header bg-transparent border-light"></div> */}
                            <div className='d-flex p-3 gap-3 align-items-center'>
                                <h6 className='text-light'>Avis client </h6>
                                <div className="bg-transparent mb-2">{[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1;
                                    return (<FaStar size={20} key={i} color={ratingValue <= (avis.ratAvis) ? "#ffc107" : "#e4e5e9"} />)
                                })}
                                </div>
                                <h6 className='text-light' >{avis.ratAvis}/5</h6>
                            </div>
                            <div className="pb-3 ps-3 text-light">
                                {/* <h6 className="card-title">{avis.nom}</h6> */}
                                <p className="card-text">{avis.descriptions}</p>
                                <p className='float-end pe-3' >le {avis.createdOn.split("T").slice(0, 1)} par<b> {avis.nom}</b></p>
                            </div>
                        </div>
                    </article>
                )
            })}

            <div className='p-4 bg-secondary'>
                <form onSubmit={submitHandle} className='container col-sm-6 col-md-6 col-lg-6 col-xl-6 border  rounded bg-light'>
                    <div className='p-4'>
                        <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Nom</label>
                            <input type="text" className="form-control" name='nom' id="lname" onChange={handleChanges} placeholder="votre nom ..." required />
                            {/* <div className="valid-feedback">
                            Looks good!
                        </div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="societe" className="form-label">Societé </label>
                            <input type="text" className="form-control" name='societe' id="societe" required onChange={handleChanges} placeholder="Societé ..." />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fonctionne" className="form-label">Fonctionne </label>
                            <input type="text" className="form-control" name='fonctionne' id="fonctionne" required onChange={handleChanges} placeholder="Fonctionne ..." />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailAddress" className="form-label">Address email </label>
                            <input type="email" className="form-control" name='email' id="emailAddress" required onChange={handleChanges} placeholder="votre email ..." />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="textArea" className="form-label">Donner votre avis</label>
                            <textarea className="form-control" name='descriptions' id="textArea" required onChange={handleChanges} rows="3" />
                        </div>
                        <div className='d-flex flex-wrap justify-content-between align-items-center'>
                            <div><StarRating rating={rating} setRating={setRating} /></div>
                            <div className='p-3'><button className="btn btn-primary" type="submit">Envoyer</button></div>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <Modal className="modal-signup rounded-pill bg-light col-5"
                    ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                    <h1>{massege}</h1>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>fermer</button>
                </Modal>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
