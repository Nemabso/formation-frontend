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

    const [avis, setAvis] = useState({ nom: "", email: "", descriptions: "" });
    const handleChanges = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setAvis({ ...avis, [name]: value })
    }

    const submitHandle = async (e) => {
        e.preventDefault();

        await axios.post(`http://localhost:5000/user/avis`, { data: avis, rating: rating }).then((res) => {
            console.log("avis a ete cree !", res);
            setRefresh((prev) => !prev);
        }).catch(({ response }) => {
            console.log("probleme avis !", response);
            setMassege(response.data.message);
            setShowModal(true);
        })
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
            {getAvis && getAvis.map((avis, index) => (
                <article key={index} className='d-flex  justify-content-center p-3'>
                    <div className="border border-primary " style={{ width: "38rem" }}>
                        <div className="card-header bg-transparent border-success"></div>
                        <div className="card-body text-success">
                            <h5 className="card-title">{avis.nom}</h5>
                            <p className="card-text">{avis.descriptions}</p>
                        </div>
                        <div className="card-footer bg-transparent border-success">{[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return (<FaStar size={20} key={i} color={ratingValue <= (avis.ratAvis) ? "#ffc107" : "#e4e5e9"} />)
                        })} </div>
                    </div>
                </article>
            ))}

            <div className='p-4'>
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
                            <label htmlFor="emailAddress" className="form-label">Email address</label>
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
