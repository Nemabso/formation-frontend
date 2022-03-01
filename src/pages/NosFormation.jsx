import React from 'react'
import Footer from '../components/Footer';
import "./nosFormation.css";
import './nousContact.css' // seulement pour background !  


export default function NosFormation() {

    return (
        <>
            <div className="wrapper">
                <ul className="bg-bubbles">
                    <span className='kubb'></span>
                    <span className='kubb'></span>
                    <span className='kubb'></span>
                    <span className='kubb'></span>
                    <span className='kubb'></span>
                    <span className='kubb'></span>
                    <span className='kubb'></span>
                    <span className='kubb'></span>
                    <span className='kubb'></span>
                    <span className='kubb'></span>
                </ul>
            </div>
            <div>
                <Footer />
            </div>
        </>

    )
}
