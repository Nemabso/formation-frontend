import React from 'react';
import { BsQuestionCircleFill, BsWifi, BsFillStarFill } from "react-icons/bs";
import { GiBookmarklet } from "react-icons/gi";
import quote from "./articleimages/quote.png";
import { FcIdea } from "react-icons/fc";
import { CgFileDocument } from "react-icons/cg";
import "./premier.css";

export default function premier() {
    return (
        <article className='premier-article'>
            <section className='pre-upside'>
                <div className='mt-2' ><img src={quote} className='quote-imag' alt="single quote" /></div>

                <h1 className='p-3 d-flex align-items-center'>
                    Une équipe dédiée à votre écoute pour garantir la réussite de votre formation
                </h1>
            </section>
            {/* <hr /> */}
            <section className='pre-info-section'>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <BsQuestionCircleFill size={60} color='#08316B' />
                    </div>
                    <h5 className='text-center' >Analyse de votre besoin</h5>
                </div>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <GiBookmarklet size={60} color='#08316B' />
                    </div>
                    <h5 className='text-center' >Elaboration d'un parcours de formation sur mesure</h5>
                </div>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <BsWifi size={60} color='#08316B' />
                    </div>
                    <h5 className='text-center' >Aide au recrutement (en option)</h5>
                </div>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <FcIdea size={60} color='#08316B' />
                    </div>
                    <h5 className='text-center' >Animation de la formation</h5>
                </div>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <BsFillStarFill size={60} color='#08316B' />
                    </div>
                    <h5 className='text-center' >Suivi individualisé</h5>
                </div>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <CgFileDocument size={60} color='#08316B' />
                    </div>
                    <h5 className='text-center' >Mesure de la satisfaction</h5>
                </div>
            </section>
        </article>
    )
}
