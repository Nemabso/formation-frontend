import React from 'react';
import "./nosValu.css";
import flesh from "./articleimages/flesh.png";

export default function NosValeur() {
    return (
        <article className='nosvaleur'>
            <div className='nosval-title'>
                <h3>NOS VALEURS</h3>
            </div>
            <section className='nosvalu-sec-main'>
                <div className=''>
                    <h2 className='nosval-vertical'>BIENVEILLANCE</h2>
                </div>
                <div className='nosvalu-flesh'>
                    <img src={flesh} className='nosval-flesh-imag' alt="flesh" />
                    <h4 className='nosval-text'>Donner du sens</h4>
                </div>
                <div className='nosvalu-flesh'>
                    <img src={flesh} className='nosval-flesh-imag' alt="flesh" />
                    <h4 className='nosval-text-b'>Transmettre</h4>
                </div>
                <div className='nosvalu-flesh'>
                    <img src={flesh} className='nosval-flesh-imag' alt="flesh" />
                    <h4 className='nosval-text-c'>Inclure</h4>
                </div>
            </section>
            <div>
                <h2 className='novalu-text-down'>EXIGENCE</h2>
            </div>

        </article>
    )
}
