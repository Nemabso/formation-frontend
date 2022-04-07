import React from 'react';
import imaFinance from "./articleimages/financer.png";
import logoFinance from "./articleimages/logofinance.png";
import "./cinqFi.css";

export default function CinqFinance() {
    return (
        <article className='cinqieme-article'>
            <section className='cinq-sec-left'>
                <div className='p-3 d-grid gap-3'>
                    <h2 className='fs-3'>  Vous souhaitez former vos équipes avant l’ouverture d’un établissement ou durant son exploitation ?</h2>
                    <div className='finance-line' />
                    <h3 className='fs-4'>Nous vous proposons des solutions de formation adaptées, alternant  apprentissages théoriques et pratiques.</h3>
                </div>
                <div className='p-3 d-grid gap-3'>
                    <h1 className='fs-3'>Vous ne savez pas comment financer votre formation ?</h1>
                    <div className='finance-line' />
                    <h2 className='fs-4'>Selon vos besoins,<b> nous trouvons la source de financement qui prend en charge 100% des frais de formation, sans aucune avance de trésorerie.</b> Nous vous aidons pour le montage des dossiers administratifs.</h2>
                </div>
                <div className='p-3 d-grid gap-3'>
                    <h2 className='fs-3'> Vous rencontrez des difficultés de recrutement ?</h2>
                    <div className='finance-line' />
                    <h3 className='fs-4'>Nous pouvons aussi vous accompagner sur les recrutements en nombre ou la recherche de profils plus rares. </h3>
                </div>
            </section>
            <span className='d-none d-lg-block trois-vertical'></span>
            <section className='cinq-sec-right'>
                <img src={imaFinance} className='financ-imag' width={"345px"} height={"486px"} title='image' alt="pedagogique" />
                <div className='back-logo-financer'>
                    <img src={logoFinance} className='logo-financer' width={"200px"} height={"auto"} title='logo' alt="logo finance" />
                </div>
                <div className='d-flex'>
                    {/* <div className='p-3' ><RiSingleQuotesR size={150} color='#08316B' /></div> */}
                    <p className='pt-3'>La certification a été délivrée au titre de la catégorie d'action suivante :<br /> ACTION DE FORMATION</p>
                </div>
            </section>
        </article>
    )
}
