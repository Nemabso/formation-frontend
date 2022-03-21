import React from 'react';
import teamimage from "./articleimages/team.jpg";
import quote from "./articleimages/quote.png"
import "./troixieme.css";

export default function Troixieme() {
    return (
        <article className='troisieme-article'>
            <section className='tois-sec-left'>
                <div className='d-flex'>
                    <div className='' ><img src={quote} className='quote-imag' alt="single quote" /></div>
                    <h1 className='p-3'>Motiver pour réussir</h1>
                </div>
                <img src={teamimage} className='trois-imag' alt="pedagogique" />
            </section>
            <span className='d-none d-lg-block trois-vertical'></span>
            <section className='trois-sec-right'>
                <div className='p-3'>
                    <h4>
                        Il nous parait essentiel de transmettre des compétences non seulement techniques mais relationelles aux apprenants en travaillant sur 3 axes : les valeurs interpersonnelles, la culture d'entreprise, la bienveillance.
                    </h4>
                </div>
                <div className='p-3'>
                    <h4>
                        L'objectif étant de :
                    </h4>
                    <h4><b> Rendre confiants les apprenants en soulignant leurs points forts provoquer l"envie en donnant du sens aux missions</b></h4>
                </div>
            </section>
        </article>
    )
}
