import React from 'react';
import "./nosExpertises.css";
import gestion from "./articleimages/gestion.svg";
import cooking from "./articleimages/cooking.svg";
import handshake from "./articleimages/handshak.svg";
import technique from "./articleimages/technique.svg";
import management from "./articleimages/management.svg";
import quote from "./articleimages/quote.png";

export default function NosExpertises() {
    return (
        <article className='expertises-article'>
            <div className='expertises-content'>
                <div className='expertises-top'>
                    <img src={quote}  width={50} height={50} loading='eager' title='quote' alt="single quote" />
                    <div className='expertises-title'>
                        <h2>Nos expertises</h2>
                        <hr />
                    </div>
                </div>

                <div className='d-flex flex-wrap align-items-center justify-content-around'>
                    <div className='d-flex align-items-center'>
                        <img src={gestion} alt="gestion" width={150} loading='eager' title='gestion' />
                        <h4>Gestion d'entreprise</h4>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={cooking} alt="cooking" width={150} loading='eager' title='cooking' />
                        <h4>Hygiène en restauration</h4>
                    </div>
                </div>
                <div className='d-flex flex-wrap align-items-center justify-content-around'>
                    <div className='d-flex align-items-center'>
                        <img src={handshake} alt="handshake" width={150} loading='eager' title='handshake' />
                        <h4>Relation client</h4>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={technique} alt="technique" width={150} loading='eager' title='technique' />
                        <h4>Techniques culinaires</h4>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <img src={management} alt="management" width={150} loading='eager' title='management' />
                    <h4>Management </h4>
                </div>
            </div>
        </article >
    )
}
