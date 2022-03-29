import React from 'react';
import "./quatre.css";
import gestion from "./articleimages/gestion.svg";
import cooking from "./articleimages/cooking.svg";
import handshak from "./articleimages/handshak.svg";
import technique from "./articleimages/technique.svg";
import management from "./articleimages/management.svg";

export default function Quatre() {
    return (
        <article className='quatre-article'>
            <div className='quatre-filtre-up'>
                <div className='quet-up'>
                    <h1>Nos expertises</h1>
                </div>
            </div>

            <section className='quatre-filtre'>
                <div className='d-flex flex-wrap align-items-center justify-content-around'>
                    <div className='d-flex align-items-center'>
                        <img src={gestion} alt="gestion" className='quatre-logo-svg' />
                        <h3>La gestion d'entreprise</h3>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={cooking} alt="cooking" className='quatre-logo-svg-cooking' />
                        <h3>L'hygiéne en restauration</h3>
                    </div>
                </div>
                {/* deuxieme radif */}
                <div className='d-flex flex-wrap align-items-center justify-content-around'>
                    <div className='d-flex align-items-center'>
                        <img src={handshak} alt="handshak" className='quatre-logo-svg' />
                        <h3>La relation client</h3>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={technique} alt="technique" className='quatre-logo-svg' />
                        <h3>Les technique culinaires</h3>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center pb-4'>
                    <img src={management} alt="management" className='quatre-logo-svg' />
                    <h3>Le management </h3>
                </div>
            </section >
        </article >
    )
}
