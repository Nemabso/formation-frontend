import React from 'react';
import Footer from "../Components/Footer";
import Premier from '../Components/Article/Premier';
import Deuxieme from '../Components/Article/Deuxieme';
import Troixieme from '../Components/Article/Troixieme';
import Zero from '../Components/Article/Zero';
import NosValeur from '../Components/Article/NosValeur';

export default function NosMissions() {
    return (
        <>
            <Troixieme />
            <Zero />
            <NosValeur />
            <Premier />
            <Deuxieme />
            <Footer />
        </>
    )
}
