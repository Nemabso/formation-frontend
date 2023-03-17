import React from 'react';
import imagArticle from "./articleimages/article1.png";
import "./demarchePedago.css";

export default function DemarchePedago() {
    return (
        <article className='deuxiem-article'>
            <section className='deux-sec-left col-lg-6'>
                <div className='deux-title' >
                    <h2 className='text-center'>Notre démarche pédagogique</h2>
                </div>
                <img src={imagArticle} className='deux-imag' width={"70%"} height={"auto"} loading='eager' title='pedagogique' alt="pedagogique" />
            </section>
            <section className='deux-sec-right col-lg-6'>

                <div className='d-flex p-3 gap-4'>
                    <div>
                        <div className='deux-back-circle'>
                            <div className='deux-circle' />
                        </div>
                    </div>
                    <h3 className='fs-4'>
                        Un apprentissage conçu pour toutes les générations, alternant théorie et mise en situation pratique.
                    </h3>
                </div>
                <div className='d-flex p-3 gap-4'>
                    <div>
                        <div className='deux-back-circle'>
                            <div className='deux-circle' />
                        </div>
                    </div>
                    <h3 className='fs-4'>
                        Une ingénierie et un  parcours de formation adaptés à votre organisation et vos méthodes.
                    </h3>
                </div>
                <div className='d-flex p-3 gap-4'>
                    <div>
                        <div className='deux-back-circle'>
                            <div className='deux-circle' />
                        </div>
                    </div>
                    <h3 className='fs-4'>
                        Une pédagogie dynamique et  multi-supports pour impliquer, révèler les talents de chacun, en donnant du sens aux actions.
                    </h3>
                </div>
                <div className='d-flex p-3 gap-4'>
                    <div>
                        <div className='deux-back-circle'>
                            <div className='deux-circle' />
                        </div>
                    </div>
                    <h3 className='fs-4'>
                        Un suivi individualisé du parcours de formation qui assure la réussite et  l’intégration de l’apprenant en entreprise.
                    </h3>
                </div>
            </section>
        </article>
    )
}
