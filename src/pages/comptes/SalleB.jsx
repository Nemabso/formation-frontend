import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import FileViewer from "react-file-viewer";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { BsArrowsFullscreen } from "react-icons/bs";

// import Modal from "react-modal";
import Modal from 'react-bootstrap/Modal';
// import { ModalBody, ModalTitle } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';


export default function SalleB({ userID }) {

    const profID = userID ? userID : sessionStorage.getItem("salonBID");
    const [favorites, setFavorites] = useState([]);

    const [numPages, setNumPages] = useState(null);
    const [fullscreen, setFullscreen] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [viwefile, setViwefile] = useState("");

    // const imagTable = favorites.map((item) => item.images);
    // const imagArray = imagTable.flat();
    // console.log("imagArray", imagArray);
    // console.log("profID", profID);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    function openImag(breakpoint) {
        console.log("click open !");
        setFullscreen(breakpoint);
        setShowModal(true)
    }

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, []);

    useEffect(() => {

        if (profID) {
            axios.get(`http://localhost:5000/formation/getsalon-b/${profID}`).then((res) => {
                console.log("res de salon B", res);
                setFavorites(res.data);
            }).catch((err) => {
                console.log("une error de get Salon B", err);
                console.error(err)
            })
        }
    }, []);

    return (
        <>
            <h1 className='mt-3 ms-3'>Salle B</h1>
            <div className='d-flex flex-wrap justify-content-evenly align-items-start mb-4'>
                {favorites.map((item, index) => (
                    <div key={index} className="card position-relative mt-4" style={{ width: "18rem" }}>
                        {item.images.map((elem, j) => {
                            if (typeof elem === "string" && `${elem.split(".").slice(-1)}` === "docx") {
                                return (
                                    <FileViewer className="embed-files " filePath={`http://localhost:5000${elem}`}
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
                                    <div key={j} >
                                        <embed onClick={() => openImag(true)} className='embed-files' src={`http://localhost:5000${elem}`} />
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
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>

                    </div>
                ))}

            </div>
            <Modal fullscreen={fullscreen}
                show={showModal} onHide={() => setShowModal(false)}>
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
    );
}
