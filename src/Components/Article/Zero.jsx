import React from 'react';
import "./zero.css";
import imagmission from "./articleimages/mission.png";
import quote from "./articleimages/quote.png";

export default function Zero() {
    return (
        <article className='article-zero '>
            <section className='zero-sec'>
                <div className='zero-texts'>
                    <div className=''>
                        <div>
                            <img src={quote} className='premier-quote' width={100} height={100} alt="single quote" />
                        </div>

                        <div className='zero-up'>
                            <h2>Notre Mission</h2>
                            <div className='premier-underline' />
                        </div>
                        {/* <h2>Notre mission</h2> */}
                    </div>
                    <div className='nosmiss-texto'>
                        <h2>
                            Accompagner les entreprises,  dans une démarche de structuration des compétences et de fidélisation des salariés .
                        </h2>
                        <h3>
                            Réveler les talents, permettre la réussite des salariés durant leur intégration ou à la prise de nouvelles fonctions.
                        </h3>
                        <h3>
                            Construire les équipes à partir d’un socle de valeurs communes et renforcer la motivation lors des formations.
                        </h3>
                        <h3>
                            Aider à faire face aux difficultés  de recrutement.
                        </h3>
                    </div>
                </div>

                <div className='pb-3 m-auto'>
                    <div className='backmissionimag'>
                        <img className=' missionimag' src={imagmission} width={100} height={90} loading='eager' title='nos missions' alt="nos missions" />
                    </div>
                </div>

                <div className='d-none d-lg-block' style={{ width: "420px" }}></div>
                <span className='d-none d-lg-block zero-khali'></span>
            </section>
        </article>
    )
}
