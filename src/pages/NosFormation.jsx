import React, { useRef, useState } from 'react'
import img1 from "../assets/images/coocking.jpg";
// import pdfile from "../assets/images/file.pdf"
import "./nosFormation.css";
import './nousContact.css'
import Modal from "react-modal";


export default function NosFormation() {
    const [showModal, setShowModal] = useState(false);

    const modal = useRef();
    // var img = document.getElementById("myImg");
    // var modalImg = document.getElementById("img01");
    // var caption = useRef();
    const openImag = () => {
        console.log("click open !");
        setShowModal(true)
        // modal.current.style.display = "block";
        // modalImg.src = this.src;
        // modalImg.alt = this.alt;
        // caption.current.innerHTML = this.alt;
    }
    // close modal on span icon close
    // const closeImag = () => {
    //     modalImg.className += "out";
    //     setTimeout(() => {
    //         modal.style.display = "none";
    //         modalImg.className = "modal-content"
    //     }, 400)
    // }


    return (
        <div className="wrapper">
            {/* <!-- Image Zoom HTML --> */}
            {/* <img className='myImg' ref={modal} src={img1} alt="premier img" width="500" height="300" onClick={() => openImag()} /> */}
            {/* <!-- The Modal --> */}
            {/* <div id="myModal" className="modal">
                <img className="modal-content" id="img01" />
                <div className='caption' ref={caption}></div>
            </div> */}
            {/* <embed className='myImg' ref={modal} src={img1} alt="premier img" width="200" height="100" onClick={() => openImag()} />
            <Modal className="modal-signup rounded bg-light col-5" role='dialog'
                ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                <embed className='modal-imag mx-auto d-block img-fluid' src={img1} alt="premier img" style={{ width: "200vw", height: "50vh" }} />
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
            </Modal> */}
            {/* <iframe className='myImg' allowFullScreen src={pdfile} alt="premier img" width="200" height="100" onClick={() => openImag()} /> */}
            {/* <img className='myImg' allowFullScreen src={img1} alt="premier img" width="200" height="100" onClick={() => openImag()} /> */}
            <Modal className="modal-signup rounded bg-light col-5" role='document'
                ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                <img className='modal-imag mx-auto d-block img-fluid' src={img1} alt="premier img" style={{ width: "200vw", height: "50vh" }} />
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
            </Modal>

            <ul className="bg-bubbles">
                <span className='kubb'></span>
                <span className='kubb'></span>
                <span className='kubb'></span>
                <span className='kubb'></span>
                <span className='kubb'></span>
                <span className='kubb'></span>
                <span className='kubb'></span>
                <span className='kubb'></span>
                <span className='kubb'></span>
                <span className='kubb'></span>
            </ul>
        </div>

    )
}
