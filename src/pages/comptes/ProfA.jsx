import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
// import { AuthContext } from '../../context/Auth';
// import Modal from "react-modal";

import FilesCard from '../../components/FilesCard';
import "./profA.css";

export default function ProfA({ userID }) {
    // const [isAuthenticated, setIsAuthenticated, role, setRole] = useContext(AuthContext);

    const userName = localStorage.getItem("userName");
    const userId = userID ? userID : localStorage.getItem("userId");
    const [cours, setCours] = useState([]);
    const [images, setImages] = useState([]);

    // const [massege, setMassege] = useState("");
    // const [showModal, setShowModal] = useState(false);
    // const [reponse, setReponse] = useState(false);

    const salleBcodeRef = useRef();
    const salleAcodeRef = useRef();
    const [codeSalleA, setCodeSalleA] = useState("");
    const [codeSalleB, setCodeSalleB] = useState("");

    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [refresh, setRefresh] = useState(false);

    const coursHandle = (e) => {
        setCours(e.target.files);
    }

    const handleCode = async () => {
        setCodeSalleA(salleAcodeRef.current.value);
        setCodeSalleB(salleBcodeRef.current.value);
        salleAcodeRef.current.value = "";
        salleBcodeRef.current.value = "";
        const codeData = { codeA: codeSalleA, codeB: codeSalleB, userId: userId }
        await axios.post("http://localhost:5000/user/profCode", codeData).then((res) => {
            console.log("success code send", res);
            setRefresh((prev) => !prev)

        }).catch((err) => console.error("error codes post", err))
    }
    // console.log("image :", image);
    // console.log("userId", userId);

    const onsubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("description", description);
        formData.append("title", title);
        // cours.forEach((elem) => { formData.append("cours", elem) });
        formData.append("userId", userId);
        for (let i = 0; i < cours.length; i++) {
            formData.append("cours", cours[i])
        }
        await axios.post("http://localhost:5000/formation/upload", formData)
            .then((res) => {
                console.log("successfully file post", res.data);
                setRefresh((prev) => !prev)
                // window.location.reload();
            })
            .catch((err) => console.log("error with file post", err))
    }

    const ondeletHandle = (id) => {
        // setShowModal(true);
        // setMassege("Vous allez supprimez cet item ?");

        // if (reponse) {
        axios.delete(`http://localhost:5000/formation/delete/${id}`).then((res) => {
            console.log("file a supprimé !", res.data);
            setRefresh((prev) => !prev)
        }).catch((err) => {
            console.log("error de delete!", err);
        })
        // }
    }

    const togglePartage = async (id) => {
        const formD = { userId: userId, formaId: id };
        await axios.put("http://localhost:5000/formation/formation-a", formD).then((res) => {
            console.log("formation partage ::", res);
            setRefresh((prev) => !prev)
        }).catch((err) => console.error(err));
    }

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:5000/formation/upload/${userId}`).then((res) => {
                const { cours, user } = res.data;
                console.log("formation :", cours, "user get prof a", user);
                setImages(cours);
                // setRole(user.role);
                setCodeSalleA(user.eleveCodeA);
                setCodeSalleB(user.eleveCodeB);
            }).catch((err) => {
                console.log("error get files :", err);
                console.error(err)
            })
        }
    }, [userId, refresh])
    return (
        <>
            <h1 className='text-center mt-4'>Bienvenue {userName}</h1>
            <section className='d-flex flex-wrap'>
                <div className='addfiles'>
                    <form onSubmit={onsubmit} encType="multipart/form-data" >
                        <div className="mb-3">
                            <label htmlFor="titleform" className="form-label">Title</label>
                            <input onChange={(e) => setTitle(e.target.value)} className="form-control" id="titleform" placeholder="Title" ></input>
                        </div>
                        <div className="mb-3 form-group">
                            <input onChange={coursHandle} name='cours' type="file" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="validationTextarea" className="form-label">Description</label>
                            <textarea onChange={(e) => setDescription(e.target.value)} className="form-control" id="validationTextarea" placeholder="Description" ></textarea>
                        </div>

                        <div className="mb-3">
                            <button className="btn btn-primary" type="submit" >Ajouter</button>
                            <button className="btn btn-warning ms-3" type="reset" >Reset</button>
                        </div>
                    </form>
                </div>
                <div className='codebox text-center m-auto'>
                    <h3 className='p-2'>Gérer le code pour les élèves </h3>
                    <div className='d-flex flex-wrap input-group p-3 '>
                        <input ref={salleAcodeRef} onChange={(e) => setCodeSalleA(e.target.value)} type="text" placeholder='Création de mot de passe ...' className='form-control' />
                        <button onClick={() => handleCode()} className='btn bg-light mx-2'>Ok</button>
                    </div>
                    {(codeSalleA && (<div className='d-flex justify-content-evenly align-items-center' ><p>Salle A : </p> <h2>{codeSalleA}</h2></div>))}
                    <div className='d-flex flex-wrap input-group p-3 '>
                        <input ref={salleBcodeRef} onChange={(e) => setCodeSalleB(e.target.value)} type="text" placeholder='Création de mot de passe ...' className='form-control' />
                        <button onClick={() => handleCode()} className='btn bg-light mx-2'>Ok</button>
                    </div>
                    {(codeSalleB && (<div className='d-flex justify-content-evenly align-items-center' ><p>Salle B : </p><h2>{codeSalleB}</h2></div>))}
                </div>
            </section>
            <section className='d-flex flex-wrap justify-content-evenly align-items-start mb-5'>
                {!images.length ? null : images.map((elem, index) => {
                    return (
                        <div key={index} >
                            <FilesCard file={elem} partager={togglePartage} ondeletHandle={ondeletHandle} />
                        </div>
                    )
                })}
                {/* <Modal className="modal-signup rounded bg-light col-5"
                    ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                    <h1>{massege}</h1>
                    <button className="btn btn-danger me-4" onClick={() => { setReponse(true); setShowModal(false) }}>Oui</button>
                    <button className="btn btn-secondary" onClick={() => { setReponse(false); setShowModal(false) }}>Non</button>
                </Modal> */}
            </section>
        </>
    )
}
