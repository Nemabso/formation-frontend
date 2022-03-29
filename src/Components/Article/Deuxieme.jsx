import React from 'react';
import imagArticle from "./articleimages/article1.png";
import "./deuxieme.css";

export default function deuxieme() {
    return (
        <article className='deuxiem-article'>
            <section className='deux-sec-left col-lg-6'>
                <div className='deux-title' >
                    <h2 className='text-center'>Notre démarche pédagogique</h2>
                </div>
                <img src={imagArticle} className='deux-imag' alt="pedagogique" />
            </section>
            <section className='deux-sec-right col-lg-6'>
                <div className='d-flex p-3 gap-4'>
                    <div>
                        <div className='deux-back-circle'>
                            <div className='deux-circle' />
                        </div>
                    </div>
                    <h5>
                        Un collectif construit sur un socle de valeurs communes, pour renforcer l'esprit d'équipe et les liens entre apprenants.
                    </h5>
                </div>
                <div className='d-flex p-3 gap-4'>
                    <div>
                        <div className='deux-back-circle'>
                            <div className='deux-circle' />
                        </div>
                    </div>
                    <h5>
                        Un apprentissage adapté aux générations Y, avec jeux de rôle et mobile learning.
                    </h5>
                </div>
                <div className='d-flex p-3 gap-4'>
                    <div>
                        <div className='deux-back-circle'>
                            <div className='deux-circle' />
                        </div>
                    </div>
                    <h5>
                        Une ingénierie et un parcours de formation adapté à votre organisation et vos méthodes.
                    </h5>
                </div>
                <div className='d-flex p-3 gap-4'>
                    <div>
                        <div className='deux-back-circle'>
                            <div className='deux-circle' />
                        </div>
                    </div>
                    <h5>
                        Une pédagogie qui révèle les talents de chacun en donnant du sens aux actions.
                    </h5>
                </div>
                <div className='d-flex p-3 gap-4'>
                    <div>
                        <div className='deux-back-circle'>
                            <div className='deux-circle' />
                        </div>
                    </div>
                    <h5>
                        Un suivi individualisé du parcours de formation qui assure la réussite et l'intégration de l'apprenant en entreprise.
                    </h5>
                </div>
            </section>
        </article>
    )
}
