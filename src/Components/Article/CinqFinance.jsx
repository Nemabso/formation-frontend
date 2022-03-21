import React from 'react';
import imaFinance from "./articleimages/financer.jpg";
import "./cinqFi.css";

export default function CinqFinance() {
    return (
        <article className='deuxiem-article'>
            <section className='trois-sec-right'>
                <div className='p-3'>
                    <h4>Comment financer votre formation ?</h4>
                    <div className='finance-line' />
                    <h1>Selon vos besoins nous trouvons la source de financement qui prend en charge 100% des frais de formation</h1>
                </div>
                <div className='p-3'>
                    <h4>Vous rencontrez des difficultés de recrutement ?</h4>
                    <div className='finance-line' />
                    <h1>Vous souhaitez recruter en nombre ou des profils rares, nous pouvons aussi vous accompagner</h1>
                </div>
            </section>
            <span className='d-none d-lg-block trois-vertical'></span>
            <section className='cinq-sec-right'>
                <img src={imaFinance} className='financ-imag' alt="pedagogique" />
                <div className='d-flex'>
                    {/* <div className='p-3' ><RiSingleQuotesR size={150} color='#08316B' /></div> */}
                    <p className='p-3'>La certification a été délivrée au titre de la catégorie d'action suivante : ACTION DE FORMATION</p>
                </div>
            </section>
        </article>
    )
}
