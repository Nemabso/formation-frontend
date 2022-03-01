import React, { useState, useEffect } from 'react'
import FileViewer from "react-file-viewer";
import { BsTrashFill, BsShareFill, BsArrowsFullscreen } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";

import "./fileCard.css";
// import Modal from 'react-modal';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// import { ModalBody, ModalTitle } from 'react-bootstrap';
// import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export default function FilesCard({ file, ondeletHandle, partagersalleA, partagersalleB }) {
    const [showModal, setShowModal] = useState(false);
    const [modalpdfShow, setModalpdfShow] = useState(false);

    const [fullscreen, setFullscreen] = useState(true);
    const [viwefile, setViwefile] = useState("");


    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

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
        setModalpdfShow(true)
    }

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, []);

    // console.log("file de cards", file);
    // file.map(elem => console.log("elem => :::", elem))
    // const dataFile = file.map((elem) =>{
    //     description: elem.description,
    //     title : elem.title,
    //     images : elem.images.map(el => el)
    // })


    return (
        <>
            <div className="card col-sm-6 col-md-3 col-xl-2 mb-4" style={{ width: "18rem" }} >
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
                    if (`${elem.split(".").slice(-1)}` === "pdf") {
                        return (
                            <div key={j}>
                                <embed onClick={() => openImag(true)} className='embed-files' src={`http://localhost:5000${elem}` ? `http://localhost:5000${elem}` : "/images/filepdf.png"} />
                                <span onClick={() => { setViwefile(`http://localhost:5000${elem}`); openImag(true) }} className="btn fscreen-span" ><BsArrowsFullscreen /></span>
                            </div>
                        )
                    }
                    else {
                        return (
                            <Zoom key={j}><embed className='embed-files' src={`http://localhost:5000${elem}`} /></Zoom>
                        )
                    }
                })}
                <div className="card-body">
                    <h5 className="card-title">{file.title} </h5>
                    <p className="card-text">{file.description} </p>
                </div>
                <div className='d-flex justify-content-evenly p-2'>
                    <span onClick={() => { if (window.confirm("vous allez supprimez ce item ?")) ondeletHandle(file._id) }} className="btn"><BsTrashFill /></span>
                    <button onClick={() => { setShowModal(true); setFullscreen(true) }} className="btn"><BsShareFill /></button>
                </div>
            </div>
            <Modal className='partage-modal' fullscreen={fullscreen}
                show={showModal} onHide={() => setShowModal(false)}>
                <ModalHeader closeButton />
                <div className='p-3'>
                    <h2>Partager avec :</h2>
                    <ModalFooter className='d-flex flex-wrap justify-content-center'>
                        <button className="btn btn-info" onClick={() => { partagersalleA(file._id); setShowModal(false) }}>
                            {file.salonA ? "enlever le partage avec salle A" : "partager avec salleA"}</button>
                        <button className="btn btn-warning" onClick={() => { partagersalleB(file._id); setShowModal(false) }}>
                            {file.salonB ? "enlever le partage avec salle B" : "partager avec salleB"}</button>
                    </ModalFooter>
                </div>
            </Modal>

            <Modal fullscreen={fullscreen}
                show={modalpdfShow} onHide={() => setModalpdfShow(false)}>
                <ModalHeader closeButton />
                {/* <ModalTitle className='text-center'> premier cours</ModalTitle>
                </ModalHeader> */}
                {/* <ModalBody className='mx-auto'> */}
                <Document file={viwefile} onLoadSuccess={onDocumentLoadSuccess} >
                    {Array.from(
                        new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        )
                    )}

                </Document>
                {/* <div className='text-center mb-5'>
                        <p>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</p>
                        <button className='btn bg-primary' disabled={pageNumber <= 1} onClick={previousPage}> Previous</button>
                        <button className='btn bg-primary ms-3' disabled={pageNumber >= numPages} onClick={nextPage}> Next </button>
                    </div> */}
                {/* </ModalBody> */}
            </Modal>
        </>
    )
}
