import React from 'react';
import "./nosExpertises.css";
import gestion from "./articleimages/gestion.svg";
import cooking from "./articleimages/cooking.svg";
import handshake from "./articleimages/handshak.svg";
import technique from "./articleimages/technique.svg";
import management from "./articleimages/management.svg";
import quote from "./articleimages/quote.png";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function NosExpertises() {
    return (
        <article className='expertises-article'>
            <div className='expertises-content'>
                <div className='expertises-top'>
                    <img src={quote}  width={50} height={50} loading='eager' title='quote' alt="single quote" />
                    <div className='expertises-title'>
                        <h2>Nos expertises</h2>
                        <hr />
                    </div>
                </div>

                <Row className='d-flex flex-wrap align-items-center justify-content-around'>
                    <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                        <img src={gestion} alt="gestion" width={150} loading='eager' title='gestion' />
                        <h4>Gestion d'entreprise</h4>
                    </Col>
                    <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                        <img src={cooking} alt="cooking" width={150} loading='eager' title='cooking' />
                        <h4>Hygiène en restauration</h4>
                    </Col>
                    <Col xs={12} md={6}className='d-flex align-items-center justify-content-center'>
                        <img src={handshake} alt="handshake" width={150} loading='eager' title='handshake' />
                        <h4>Relation client</h4>
                    </Col>
                    <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                        <img src={technique} alt="technique" width={150} loading='eager' title='technique' />
                        <h4>Techniques culinaires</h4>
                    </Col>
                    <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
                        <img src={management} alt="management" width={150} loading='eager' title='management' />
                        <h4>Management </h4>
                    </Col>
                </Row>
            </div>
        </article >
    )
}
