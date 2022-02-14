import React, { useState } from 'react'
import FileViewer from "react-file-viewer";
import { BsTrashFill, BsShareFill } from "react-icons/bs";
import "./fileCard.css";
import Modal from 'react-modal';
// import { ModalBody, ModalTitle } from 'react-bootstrap';
// import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export default function FilesCard({ file, ondeletHandle, partager }) {
    const [showModal, setShowModal] = useState(false);

    const [fullscreen, setFullscreen] = useState(true);


    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }

    // function changePage(offset) {
    //     setPageNumber(prevPageNumber => prevPageNumber + offset);
    // }

    // function previousPage() {
    //     changePage(-1);
    // }

    // function nextPage() {
    //     changePage(1);
    // }
    function openImag(breakpoint) {
        console.log("has clicked !");
        setFullscreen(breakpoint);
        setShowModal(true)
    }

    // console.log("file de cards", file);
    // file.map(elem => console.log("elem => :::", elem))
    // const dataFile = file.map((elem) =>{
    //     description: elem.description,
    //     title : elem.title,
    //     images : elem.images.map(el => el)
    // })


    return (
        <>
            <div className="card col-sm-6 col-md-3 col-xl-2 mt-5 " style={{ width: "18rem" }} >
                {file.images.map((elem, j) => {
                    if (typeof elem === "string" && `${elem.split(".").slice(-1)}` === "docx") {
                        return (
                            <FileViewer className="embed-files" filePath={`http://localhost:5000${elem}`}
                                title={j} key={j} fileType={'docx'} />)
                    }
                    if (`${elem.split(".").slice(-1)}` === "mp4" || `${elem.split(".").slice(-1)}` === "mov") {
                        return (
                            <video className='embed-files' controls key={j}>
                                <source src={`http://localhost:5000${elem}`} />
                            </video>)
                    }
                    else {
                        return (
                            <embed onClick={() => openImag(true)} className='embed-files' src={`http://localhost:5000${elem}`} key={j} />)
                    }
                })}
                <div className="card-body">
                    <h5 className="card-title">{file.title} </h5>
                    <p className="card-text">{file.description} </p>
                </div>
                <div className='d-flex justify-content-evenly p-2'>
                    <span onClick={() => { if (window.confirm("vous allez supprimez ce item ?")) ondeletHandle(file._id) }} className="btn"><BsTrashFill /></span>
                    <button onClick={() => { setShowModal(true) }} className="btn"><BsShareFill /></button>
                </div>
            </div>
            <Modal className="modal-signup rounded bg-light col-5" role='document'
                ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                <h2>Partager avec :</h2>
                <button className="btn btn-info" onClick={() => { partager(file._id); setShowModal(false) }}>{file.salonA ? "enlever le partage avec salle A" : "partager avec salleA"}</button>
                <button className="btn btn-warning" onClick={() => setShowModal(false)}>{file.salonB ? "enlever le partage avec salle B" : "partager avec salleB"}</button>
            </Modal>
        </>
    )
}
