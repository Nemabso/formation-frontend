import React from 'react';
import "./nosValu.css";
import flesh from "./articleimages/flesh.png";
import quote from "./articleimages/quote.png";

export default function NosValeur() {
    return (
        <article className='nosvaleur'>
            <div className='nosval-title'>
                <div>
                    <img src={quote} className='quatre-quote' width={100} height={100} alt="single quote" />
                </div>

                <div className='quet-up'>
                    <h2>Nos Valeurs</h2>
                    <div className='quatre-underline' />
                </div>
                {/* <h3>NOS VALEURS</h3> */}
            </div>
            <section className='nosvalu-sec-main'>
                <div>
                    <h2 className='nosval-vertical'>BIENVEILLANCE</h2>
                </div>
                <div className='d-block d-lg-flex'>
                    <div className='nosvalu-flesh'>
                        <img src={flesh} className='nosval-flesh-imag' width={"385px"} height={"367px"} title='flesh' loading='eager' alt="flesh" />
                        <h3 className='nosval-text fs-4'>Donner du sens</h3>
                    </div>
                    <div className='nosvalu-flesh'>
                        <img src={flesh} className='nosval-flesh-imag' width={"385px"} height={"367px"} title='flesh' loading='eager' alt="flesh" />
                        <h4 className='nosval-text-b'>Transmettre</h4>
                    </div>
                    <div className='nosvalu-flesh'>
                        <img src={flesh} className='nosval-flesh-imag' width={"385px"} height={"367px"} title='flesh' loading='eager' alt="flesh" />
                        <h4 className='nosval-text-c'>Inclure</h4>
                    </div>
                </div>
            </section>
            <div>
                <h2 className='novalu-text-down'>EXIGENCE</h2>
            </div>

        </article>
    )
}
