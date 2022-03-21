import React from 'react';
import "./sixformation.css";

export default function SixForma() {
    return (
        <article className='six-article-forma'>
            <div className='sixforma-title'>
                <h2>Quelques exemples de thémes de formation :</h2>
            </div>
            <section className='six-sections-forma'>
                <section className='sixform-secs'>
                    <div className='sixform-titre'>
                        <h5>Gestion</h5>
                    </div>
                    <ul className='pt-3'>
                        <li><b>Initiation à l'économie d'entreprise, savoir lire un bilan et un compte de résultat</b></li>
                        <li><b>Définir des indicateurs de gestion et piloter son compte d"exploitation</b></li>
                        <li><b>La gestion de la marge et la non qualité</b></li>
                        <li><b>La maitrise de la masse salariale</b></li>
                    </ul>
                    <div className='sixform-titre'>
                        <h5>Hygiène</h5>
                    </div>
                    <ul className='pt-3'>
                        <li><b>L'HACCP</b></li>
                        <li><b>Le plan de maitrise sanitaire</b></li>
                    </ul>
                </section>
                <span className='d-none d-lg-block trois-vertical'></span>
                {/* deux rad */}
                <section className='sixform-secs'>
                    <div className='sixform-titre'>
                        <h5>Juridique</h5>
                    </div>
                    <ul className='pt-3'>
                        <li><b>Les droits et devoirs des salariés</b></li>
                        <li><b>Les baux commerciaux</b></li>
                        <li><b>Les différentes formes juridiques</b></li>
                    </ul>
                    <div className='sixform-titre'>
                        <h5>Vente</h5>
                    </div>
                    <ul className='pt-3'>
                        <li><b>La vente en BTOB (bâtire son plan d'action commercial, de la prospection à la vente) </b></li>
                        <li><b>La vente en BTOC (de l'accueil à la fidélisation)</b></li>
                    </ul>
                </section>
                <span className='d-none d-lg-block trois-vertical'></span>
                {/* trois rad */}
                <section className='sixform-secs'>
                    <div className='sixform-titre'>
                        <h5>Management</h5>
                    </div>
                    <ul className='pt-3'>
                        <li><b>Manager et animer une équipe</b></li>
                        <li><b>La communication</b></li>
                        <li><b>La gestion des relations confilictuelles</b></li>
                        <li><b>La gestion du stress</b></li>
                        <li><b>La gestion du temps</b></li>
                        <li><b>Piloter le changement</b></li>
                        <li><b>Le tutorat et l'apprentissage</b></li>
                    </ul>
                    <div className='sixform-titre'>
                        <h5>techniques culinaires</h5>
                    </div>
                    <ul className='pt-3'>
                        <li><b>Les produits</b></li>
                        <li><b>Les découpes</b></li>
                        <li><b>Les cuissons</b></li>
                        <li><b>Les process de mise en oeuvre et de conservation</b></li>
                    </ul>
                </section>
            </section>
        </article>
    )
}
