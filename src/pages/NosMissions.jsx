import React from 'react';
import "./nosMission.css";
import Footer from "../components/Footer";
import Premier from '../components/Article/Premier';
import Deuxieme from '../components/Article/Deuxieme';
import Troixieme from '../components/Article/Troixieme';
import Zero from '../components/Article/Zero';
import NosValeur from '../components/Article/NosValeur';

export default function NosMissions() {
    return (
        <>
            <Zero />
            <NosValeur />
            <Troixieme />
            <Premier />
            <Deuxieme />
            <Footer />
        </>
    )
}
