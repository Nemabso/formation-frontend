import React from 'react';
import "./themesFormation.css";
import quote from "./articleimages/quote.png";

export default function ThemesFormation() {
    return (
        <article className='six-article-forma'>
            <div className='p-4'>
                <div>
                    <img src={quote} className='quatre-quote' width={100} height={100} loading='eager' title='quote' alt="single quote" />
                </div>

                <div className='six-up'>
                    <h2>Quelques exemples de thémes de formation :</h2>
                    <div className='six-underline' />
                </div>
            </div>
            {/* <div className='sixforma-title'>
                <h1>Quelques exemples de thémes de formation :</h1>
            </div> */}
            <section className='six-sections-forma'>
                <section className='sixform-secs'>
                    <div className='sixform-titre'>
                        <h3 className='fs-4'>Gestion</h3>
                    </div>
                    <ul className='pt-3 d-grid gap-2'>
                        <li><h4 className='fs-5 fw-bold'>Initiation à l'économie d'entreprise, savoir lire un bilan et un compte de résultat</h4></li>
                        <li><h5 className='fw-bold'>Définir des indicateurs de gestion et piloter son compte d'exploitation</h5></li>
                        <li><h5 className='fw-bold'>La gestion de la marge et la non qualité</h5></li>
                        <li><h5 className='fw-bold'>La maitrise de la masse salariale</h5></li>
                    </ul>
                    <div className='sixform-titre'>
                        <h4>Hygiène</h4>
                    </div>
                    <ul className='pt-3 d-grid gap-2'>
                        <li><h5 className='fw-bold'>L'HACCP</h5></li>
                        <li><h5 className='fw-bold'>Le plan de maitrise sanitaire</h5></li>
                    </ul>
                </section>
                <span className='d-none d-lg-block trois-vertical'></span>
                {/* deux rad */}
                <section className='sixform-secs'>
                    <div className='sixform-titre'>
                        <h4>Juridique</h4>
                    </div>
                    <ul className='pt-3 d-grid gap-2'>
                        <li><h5 className='fw-bold'>Les droits et devoirs des salariés</h5></li>
                        <li><h5 className='fw-bold'>Les baux commerciaux</h5></li>
                        <li><h5 className='fw-bold'>Les différentes formes juridiques</h5></li>
                    </ul>
                    <div className='sixform-titre'>
                        <h4>Vente</h4>
                    </div>
                    <ul className='pt-3 d-grid gap-2'>
                        <li><h5 className='fw-bold'>La vente en BTOB (bâtir son plan d'action commercial, de la prospection à la vente) </h5></li>
                        <li><h5 className='fw-bold'>La vente en BTOC (de l'accueil à la fidélisation)</h5></li>
                    </ul>
                </section>
                <span className='d-none d-lg-block trois-vertical'></span>
                {/* trois rad */}
                <section className='sixform-secs'>
                    <div className='sixform-titre'>
                        <h5>Management</h5>
                    </div>
                    <ul className='pt-3 d-grid gap-2'>
                        <li><h5 className='fw-bold'>Manager et animer une équipe</h5></li>
                        <li><h5 className='fw-bold'>La communication</h5></li>
                        <li><h5 className='fw-bold'>La gestion des relations confilictuelles</h5></li>
                        <li><h5 className='fw-bold'>La gestion du stress</h5></li>
                        <li><h5 className='fw-bold'>La gestion du temps</h5></li>
                        <li><h5 className='fw-bold'>Piloter le changement</h5></li>
                        <li><h5 className='fw-bold'>Le tutorat et l'apprentissage</h5></li>
                    </ul>
                    <div className='sixform-titre'>
                        <h5 className='text-center'>techniques culinaires</h5>
                    </div>
                    <ul className='pt-3 d-grid gap-2'>
                        <li><h5 className='fw-bold'>Les produits</h5></li>
                        <li><h5 className='fw-bold'>Les découpes</h5></li>
                        <li><h5 className='fw-bold'>Les cuissons</h5></li>
                        <li><h5 className='fw-bold'>Les process de mise en oeuvre et de conservation</h5></li>
                    </ul>
                </section>
            </section>
        </article>
    )
}
