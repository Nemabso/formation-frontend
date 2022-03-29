import React from 'react';
import "./zero.css";
import imagmission from "./articleimages/mission.png";

export default function Zero() {
    return (
        <article className='article-zero '>
            <section className='zero-sec'>
                <div className='zero-texts'>
                    <div className='nosmiss-title'>
                        <h3>Notre mission</h3>
                    </div>
                    <div className='nosmiss-texto'>
                        <h4>
                            Accompagner les entreprises,  du secteur de la restauration et du retail dans une démarche de structuration des compétences et de fidélisation des salariés.
                        </h4>
                        <h4>
                            Assurer la formation des équipes  avant l’ouverture d’un établissement.
                        </h4>
                        <h4>
                            Permettre la réussite de vos collaborateurs lors d’une évolution professionnelle et la prise de nouvelles responsabilités, en renforçant leurs compétences.
                        </h4>
                        <h4>
                            Aider à faire face au turnover, aux difficultés de recrutement avec un soutient sur la France entière.
                        </h4>
                    </div>
                </div>

                <div className='pb-3 m-auto'>
                    <div className='backmissionimag'>
                        <img className=' missionimag' src={imagmission} alt="nos mission" />
                    </div>
                </div>

                <div className='d-none d-lg-block' style={{ width: "420px" }}></div>
                <span className='d-none d-lg-block zero-khali'></span>
            </section>
        </article>
    )
}
