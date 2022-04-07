import React, { useEffect, useState } from 'react';
import CircleP from '../components/CircleP';
import Footer from '../components/Footer';
import "./avisClients.css";
import { GrUser } from "react-icons/gr";
import { MdPersonSearch, MdDone } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import axios from 'axios';


export default function AvisClient() {
    const [pourA, setPourA] = useState(null);
    const [pourB, setPourB] = useState(null);
    const [pourC, setPourC] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/user/getpourcent").then((res) => {
            const user = res.data.user;
            setPourA(user.pourcentA)
            setPourB(user.pourcentB)
            setPourC(user.pourcentC)
        }).catch((err) => {
            console.log("error get pourcent :", err);
            console.error(err)
        })
    }, [])

    return (
        <>
            <article className='avis-clients'>
                <section className='avis-back-handshake'>
                    <div className='avis-back-filtre'>
                        <h1>STATISTIQUES DE RÉUSSITE</h1>
                    </div>
                </section>

                {/* <svg width={200} height={200}>
                <g transform="rotate(-90 100 100)">
                    <circle r="70" cx={100} cy={100} fill='transparent' stroke='lightgrey' strokeWidth={"2rem"} strokeDasharray={438.8} strokeDashoffset={0}></circle>
                    <circle r="70" cx={100} cy={100} fill='transparent' stroke='blue' strokeLinecap='round' strokeWidth={"2rem"} strokeDasharray={438.8} strokeDashoffset={66}></circle>
                </g>
                <text x={"50%"} y={"50%"} dominantBaseline={"central"} textAnchor='middle'>hej</text>
            </svg> */}
                <section className="avis-client-sec-down">
                    <div className='avis-client-secs'>
                        <GrUser fill='#0B346C' size={80} />
                        <h2 className='avis-client-texts'>Satisfaction employeur</h2>
                        <CircleP className="avis-circle" percentage={pourA} colour={"#e8eaeb"} />
                    </div>
                    <div className='avis-client-secs'>
                        <div>
                            <MdDone fill='#0B346C' size={50} />
                            <MdPersonSearch fill='#0B346C' size={100} />
                        </div>
                        <h2 className='avis-client-texts'>Satisfaction Pôle Emploi</h2>
                        <CircleP percentage={pourB} colour={"#e8eaeb"} />
                    </div>
                    <div className='avis-client-secs'>
                        <FaThumbsUp fill='#0B346C' size={100} />
                        <h2 className='avis-client-texts'>Satisfaits apprenants</h2>
                        <CircleP percentage={pourC} colour={"#e8eaeb"} />
                    </div>
                </section>

            </article>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
