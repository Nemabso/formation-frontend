import React from 'react';
import "./partenaires.css";
import emploi from "./imag/emploi.png";
import agefos from "./imag/agefos.jpg";
import akto from "./imag/akto.png";

export default function Partenaires() {
    return (
        <div className="partenaires-background">
            <section className="partenaires-content">
                <h1 className='text-center p-4'>NOS PARTENAIRES</h1>
                <div className="partenaires-logos">
                    <div>
                        <img src={emploi} width={200} title='emploi' height={"auto"} alt="emploi" />
                    </div>
                    <div>
                        <img src={akto} width={200} title='akto' height={"auto"} alt="akto" />
                    </div>
                    <div>
                        <img src={agefos} width={200} title='agefos' height={"auto"} alt="agefos" />
                    </div>
                </div>
            </section>
        </div>
    )
}
