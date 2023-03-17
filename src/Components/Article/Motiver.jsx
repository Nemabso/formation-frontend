import React from 'react';
import teamimage from "./articleimages/team.png";
import quote from "./articleimages/quote.png"
import "./motiver.css";

export default function Motiver() {
    return (
        // du a changement d'avis de cliant a chaque fois left or right a été mis au contraire !

        <article className='troisieme-article'>
            <section className='tois-sec-left'>
                <div className='d-flex align-items-end'>
                    <div><img src={quote} className='trois-quote-imag' width={80} height={90} title='single quote' loading='eager' alt="single quote" /></div>
                    <h1 className='ps-3 fs-1'> Motiver pour réussir </h1>
                </div>
                <img src={teamimage} className='trois-imag' width={100} height={90} title='pedagogique' loading='eager' alt="pedagogique" />
            </section>
            <span className='d-none d-lg-block trois-vertical'></span>
            <section className='trois-sec-right'>
                <div className='p-3'>
                    <h2 className='fs-3'>
                        Il nous parait essentiel de transmettre des compétences non seulement techniques mais relationelles aux apprenants en travaillant sur 3 axes :
                    </h2>
                </div>
                <div className='p-3'>
                    <p className='fs-3 fw-bold'>les valeurs interpersonnelles</p>
                    <p className='fs-3 fw-bold'>la culture d'entreprise</p>
                    <p className='fs-3 fw-bold'>la bienveillance</p>
                </div>
                <div className='p-3'>
                    <h3><b> L'objectif étant de :</b></h3>
                    <h3> Rendre confiants les apprenants en soulignant leurs points forts </h3>
                </div>
                <div className='p-3'>
                    <h3>
                        provoquer l'envie en donnant du sens aux missions
                    </h3>
                </div>
            </section>
        </article>
    )
}
