import React from 'react';
import "./quatre.css";
import gestion from "./articleimages/gestion.svg";
import cooking from "./articleimages/cooking.svg";
import handshak from "./articleimages/handshak.svg";
import technique from "./articleimages/technique.svg";
import management from "./articleimages/management.svg";
import quote from "./articleimages/quote.png";

export default function Quatre() {
    return (
        <article className='quatre-article'>
            <div className='quatre-filtre-up'>
                <div>
                    <img src={quote} className='quatre-quote' width={100} height={100} alt="single quote" />
                </div>

                <div className='quet-up'>
                    <h2>Nos expertises</h2>
                    <div className='quatre-underline' />
                </div>
            </div>

            <section className='quatre-filtre'>
                <div className='d-flex flex-wrap align-items-center justify-content-around'>
                    <div className='d-flex align-items-center'>
                        <img src={gestion} alt="gestion" width={150} height={200} loading='eager' title='gestion' />
                        <h2>La gestion d'entreprise</h2>
                    </div>
                    <div className='d-flex align-items-center gap-3'>
                        <img src={cooking} alt="cooking" width={150} height={140} loading='eager' title='cooking' />
                        <h3>L'hygiéne en restauration</h3>
                    </div>
                </div>
                {/* deuxieme radif */}
                <div className='d-flex flex-wrap align-items-center justify-content-around'>
                    <div className='d-flex align-items-center gap-4'>
                        <img src={handshak} alt="handshak" width={150} height={200} loading='eager' title='handshak' />
                        <h2>La relation client</h2>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={technique} alt="technique" width={150} height={200} loading='eager' title='technique' />
                        <h3>Les techniques culinaires</h3>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center pb-4 gap-4'>
                    <img src={management} alt="management" width={150} height={140} loading='eager' title='management' />
                    <h2>Le management </h2>
                </div>
            </section >
        </article >
    )
}
