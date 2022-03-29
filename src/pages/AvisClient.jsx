import React from 'react'
import CircleP from '../components/CircleP';
import Footer from '../components/Footer';
import "./avisClients.css";
import { FcBusinessman } from "react-icons/fc";
import { MdPersonSearch, MdDone } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";


export default function AvisClient() {
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
                    <section className='avis-client-secs'>
                        <FcBusinessman size={100} />
                        <h2 className='avis-client-texts'>Satisfaction employeur</h2>
                        <CircleP className="avis-circle" percentage={98} colour={"#0CBF0D"} />
                    </section>
                    <section className='avis-client-secs'>
                        <div>
                            <MdDone fill='darkblue' size={50} />
                            <MdPersonSearch fill='darkblue' size={100} />
                        </div>
                        <h2 className='avis-client-texts'>Satisfaction Pôle Emploi</h2>
                        <CircleP percentage={89} colour={"#0CBF0D"} />
                    </section>
                    <section className='avis-client-secs'>
                        <FaThumbsUp fill='darkblue' size={100} />
                        <h2 className='avis-client-texts'>Satisfaits apprenants</h2>
                        <CircleP percentage={90} colour={"#0CBF0D"} />
                    </section>
                </section>

            </article>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
