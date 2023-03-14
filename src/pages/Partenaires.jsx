import React from 'react';
import Footer from '../Components/Footer';
import "./partenaires.css";
import emploi from "./imag/emploi.png";
import agefos from "./imag/agefos.jpg";
import akto from "./imag/akto.png";

export default function Partenaires() {
    return (
        <div>
            <article>
                <div className='part-back'>
                </div>

                <h1 className='text-center p-4'><b style={{ color: " #B8D6F6" }}> NOS </b>PARTENAIRES</h1>
                <section className="partenair-sec-down">
                    <div>
                        <img src={emploi} width={200} title='emploi' height={"auto"} alt="emploi" />
                    </div>
                    <div>
                        <img src={akto} width={200} title='akto' height={"auto"} alt="akto" />
                    </div>
                    <div>
                        <img src={agefos} width={200} title='agefos' className='pb-3' height={"auto"} alt="agefos" />
                    </div>
                </section>

            </article>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
