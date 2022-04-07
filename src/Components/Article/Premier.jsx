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
            <section className=''>
                <div>
                    <img src={quote} className='premier-quote' width={100} height={100} alt="single quote" />
                </div>

                <div className='premier-up'>
                    <h2>Une équipe dédiée à votre écoute pour garantir la réussite de votre formation</h2>
                    <div className='premier-underline' />
                </div>
                {/* <div className='mt-2' ><img src={quote} className='quote-imag' width={80} height={110} title='single quote' loading='lazy' alt="single quote" /></div>

                <h2 className='p-3 d-flex align-items-center'>
                    Une équipe dédiée à votre écoute pour garantir la réussite de votre formation
                </h2> */}
            </section>
            {/* <hr /> */}
            <section className='pre-info-section'>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <BsQuestionCircleFill size={60} color='#08316B' />
                    </div>
                    <h3 className='text-center fs-4' >Analyse de votre besoin</h3>
                </div>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <GiBookmarklet size={60} color='#08316B' />
                    </div>
                    <h4 className='text-center fs-4' >Elaboration d'un parcours de formation sur mesure</h4>
                </div>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <BsWifi size={60} color='#08316B' />
                    </div>
                    <h5 className='text-center fs-4' >Aide au recrutement</h5>
                </div>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <FcIdea size={60} color='#08316B' />
                    </div>
                    <h5 className='text-center fs-4' >Animation de la formation</h5>
                </div>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <BsFillStarFill size={60} color='#08316B' />
                    </div>
                    <h5 className='text-center fs-4' >Suivi individualisé</h5>
                </div>
                <div className='pre-icon-div'>
                    <div className='pre-icons'>
                        <CgFileDocument size={60} color='#08316B' />
                    </div>
                    <h5 className='text-center fs-4' >Mesure de la satisfaction</h5>
                </div>
            </section>
        </article>
    )
}
