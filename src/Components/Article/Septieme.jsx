import React from 'react';
import "./sept.css";
import pre from "./articleimages/forma1.png";
import deux from "./articleimages/forma2.png";
import trois from "./articleimages/forma3.png";
import quatre from "./articleimages/forma4.png";
import cinq from "./articleimages/forma5.jpg";
import { Link } from 'react-router-dom';

export default function Septieme() {
    return (
        <article className='sept-article'>
            <section className='sept-sec-left'>
                <div className='p-3'>
                    <h1 >Des formations adaptées</h1>
                </div>
                <div className='sept-down-text'>
                    <h3 className='mb-5'> pour tous les niveaux</h3>
                    <div className='d-flex gap-3 align-items-center'>
                        <div><div className='sept-tire' /></div>
                        <h3>Jeunes diplomés</h3>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <div><div className='sept-tire' /></div>
                        <h3>Sans qualification</h3>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <div><div className='sept-tire' /></div>
                        <h3>Confirmés</h3>
                    </div>
                </div>
            </section>
            {/* <span className='d-none d-lg-block trois-vertical'></span> */}
            <section className='sept-sec-right'>
                <div className='d-flex flex-wrap p-3'>
                    <div>
                        <h2>Pour devenir :</h2>
                        <h4>Responsable de centre de profit</h4>
                        <h4>Manager dans la restauration </h4>
                        <h4>Maitre d’hôtel, serveur </h4>
                    </div>
                    <img src={quatre} className='sept-up-photo' alt="formation" />
                </div>
                <div className='d-flex flex-wrap justify-content-around'>
                    <div className=''>
                        <h4>Vendeur</h4>
                        <img src={trois} className='sept-up-photo' alt="formation" />
                    </div>
                    <div className=''>
                        <h4>Chargé d’affaires</h4>
                        <img src={cinq} className='sept-down-photo' alt="formation" />
                    </div>
                </div>
                <div className='d-flex flex-wrap justify-content-around'>
                    <div className=''>
                        <h4>Employé polyvalent <br /> de supermarché </h4>
                        <img src={pre} className='sept-up-photo' alt="formation" />
                    </div>
                    <div className=''>
                        <h4>Employé polyvalent <br /> de restauration </h4>
                        <img src={deux} className='sept-up-photo' alt="formation" />
                    </div>
                </div>
                <div className='p-3'>
                    <Link to="/contact">vous voulez en savoir plus ...</Link>
                </div>
            </section>
        </article>
    )
}
