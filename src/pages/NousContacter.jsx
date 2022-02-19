import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import img1 from "../assets/images/backCoutux.jpg"
import img2 from "../assets/images/chefCarton.png"
import img3 from "../assets/images/cooks.jpg"
import img4 from "../assets/images/herbs.jpg"

export default function NousContacter() {

    const arrOfImages = [
        img1, img2, img3, img4
    ];
    console.log("image array nous contacter", arrOfImages);
    const [indexOfImages, setIndexOfImages] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const openModalAndSetIndex = (index) => {
        setIndexOfImages(index);
        setShowModal(true);
        return;
    };
    return (
        <div >
            {arrOfImages.map((image, index) => (
                <img
                    key={image}
                    style={{ height: "200px", width: "300px", margin: "20px" }}
                    src={image}
                    alt={image}
                    onClick={() => openModalAndSetIndex(index)}
                />
            ))}

            {/* <div>
                <button type="button" onClick={() => setShowModal(true)}>
                    Show Lightbox
                </button>
            </div> */}

            {showModal && (
                <Lightbox
                    mainSrc={arrOfImages[indexOfImages]}
                    // nextSrc={arrOfImages[(indexOfImages + 1) % arrOfImages.length]}
                    // prevSrc={
                    //     arrOfImages[
                    //     (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
                    //     ]
                    // }
                    onCloseRequest={() => setShowModal(false)}
                // onMovePrevRequest={() =>
                //     setIndexOfImages(
                //         (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
                //     )
                // }
                // onMoveNextRequest={() =>
                //     setIndexOfImages(
                //         (indexOfImages + arrOfImages.length + 1) % arrOfImages.length
                //     )
                // }
                />
            )}
        </div>
    );


}
