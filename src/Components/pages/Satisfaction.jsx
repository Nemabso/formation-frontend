import React, { useEffect, useState } from 'react';
import CircleP from '../CircleP';
import "./satisfaction.css";
import { GrUser } from "react-icons/gr";
import { MdPersonSearch, MdDone } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import axios from 'axios';


export default function Satisfaction() {
    const [noteEmployeur, setNoteEmployeur] = useState(0);
    const [notePoleEmploi, setNotePoleEmploi] = useState(0);
    const [noteApprenant, setNoteApprenant] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:5000/review")
            .then((res) => {
                setNoteEmployeur(res.data.reduce((sum, avis) => sum + avis.rate, 0) / res.data.length * 20);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <article className='avis-clients'>
                <section className='avis-back-handshake'>
                    <div className='avis-back-filtre'>
                        <h1>STATISTIQUES DE SATISFACTION</h1>
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
                        <h2 className='avis-client-texts'>Satisfaction des employeurs</h2>
                        <CircleP className="avis-circle" percentage={noteEmployeur} colour={"#e8eaeb"} />
                    </div>
                    <div className='avis-client-secs'>
                        <div>
                            <MdDone fill='#0B346C' size={50} />
                            <MdPersonSearch fill='#0B346C' size={100} />
                        </div>
                        <h2 className='avis-client-texts'>Satisfaction Pôle Emploi</h2>
                        <CircleP percentage={0} colour={"#e8eaeb"} />
                    </div>
                    <div className='avis-client-secs'>
                        <FaThumbsUp fill='#0B346C' size={100} />
                        <h2 className='avis-client-texts'>Satisfacation des apprenants</h2>
                        <CircleP percentage={0} colour={"#e8eaeb"} />
                    </div>
                </section>

            </article>

        </>
    )
}
