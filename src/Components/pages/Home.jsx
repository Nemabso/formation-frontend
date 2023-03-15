import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import { Link } from 'react-router-dom';
// import vid from '../video/premier.mp4';
import { Container, Row, Col } from "react-bootstrap";
import './Home.css'
import Modal from "react-bootstrap/Modal";
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import quote from "./imag/quote.png";
import Typical from "react-typical";
import axios from 'axios';
import { AuthContext } from '../../context/Auth';
import Premier from '../Article/Premier';
import Quatre from '../Article/Quatre';
import CinqFinance from "../Article/CinqFinance";
import logofinance from "./imag/logofinance.png";
import marques from "./Marques";

export default function Home({ userID, setUserID }) {
    const [isAuthenticated, setIsAuthenticated, role, setRole] = useContext(AuthContext);
    // console.log(isAuthenticated, setIsAuthenticated, role);
    const [pagenummber, setPagenummber] = useState("")
    const [fullscreen, setFullscreen] = useState(true);
    const [showModal, setShowModal] = useState(false);
    // console.log("page nummber", pagenummber);

    const userId = userID ? userID : sessionStorage.getItem("userId");
    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:5000/user/login/${userId}`).then((res) => {
                // console.log("user get homeJSX::::", res.data);
                const { user } = res.data;
                setUserID(user._id);
                setRole(user.role);
            }).catch((err) => {
                console.log("error get files :", err);
                console.error(err)
            })
        }
    }, [userId, setUserID, setRole])
    return (
        <main>

            <section className='backgroung-hompage'>
                <div className='filter-home'>
                    <div style={{ minHeight: "15vh" }}>
                        <div className='d-flex justify-content-center'>
                            <div><img src={quote} loading='eager' title='single-quote' width={30} height={28} alt="single quote" /></div>
                            <h1 className='home-cen-text'><Typical loop={Infinity} wrapper="b" steps={[2000,
                                "BIENVENUE CHEZ IDOINE FORMATION", 3000,
                                "Ensemble révélons vos talents et construisons votre capital humain", 3000
                            ]} /> </h1>
                            <div className='home-single-quote-right'><img src={quote} width={30} height={28} loading='eager' title='single-quote' alt="single quote" /></div>
                        </div>
                    </div>
                    {/* <img src="./logo512.png" loading='eager' title='center logo' width={100} height={90} className='homesite-logo' alt="logo home page" /> */}
                    <h2 className='p-3 fs-4'>
                        <Typical loop={Infinity} wrapper="p" steps={[2000,
                            "SPECIALISTE DE LA FORMATION DANS LES SECTEURS DE LA RESTAURATION ET DE LA VENTE", 3000
                        ]} />
                    </h2>
                    <div className='etre-rappele'>
                        <a href={'tel:+33688464682'} className='circle'><span className='d-none'>phone</span></a>
                        <h3 className='fs-4'>
                            Etre rappelé <br /> immédiatement
                        </h3>
                    </div>
                </div>
            </section>
            {/* <hr style={{ backgroundColor: "red" }} /> */}

            <section className='check-info'>
                <div className='home-parag'>
                    <div>
                        <div className='home-back-circle'>
                            <button onClick={() => { setPagenummber(1); setFullscreen(true); setShowModal(true) }} className='home-circle' />
                        </div>
                    </div>
                    <p>Des formations sur mesure</p>
                </div>
                <div className='home-parag'>
                    <div>
                        <div className='home-back-circle'>
                            <button onClick={() => { setPagenummber(2); setFullscreen(true); setShowModal(true) }} className='home-circle' />
                        </div>
                    </div>
                    <p>Des professionnels par métier</p>
                </div>
                <div className='home-parag'>
                    <div>
                        <div className='home-back-circle'>
                            <button onClick={() => { setPagenummber(3); setFullscreen(true); setShowModal(true) }} className='home-circle' />
                        </div>
                    </div>
                    <p>Une prise en charge du financement possible à 100%</p>
                </div>
            </section>
            <section className='home-sec-two'>
                <div>
                    <Container>
                        <Row>
                            <Col sm={6} className="col11" >
                                <div className="home-video">
                                    <div className="video">
                                        {/* <iframe
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", }}
                                            src="https://www.youtube.com/embed/BOwd8nsDh5Y" title="YouTube video player"
                                            frameBorder="0" allowFullScreen
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        ></iframe> */}
                                        <img src={logofinance} className='img-fluid' title='Qualiopi' loading='eager' width={400} height={400} alt="logofinance" />
                                    </div>
                                </div>
                            </Col>

                            <Col sm={6} className='home-text'>
                                <div className="text-center">
                                    <p className='fs-5'>Une offre de formation 100% sur mesure</p>
                                    <p className='fs-5'>IDOINE vous accompagne et vous conseille dans vos projets de formation.</p>
                                    {/* <a href="###"><div>En savoir plus</div></a> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className='p-4'>
                <div className='sec-company p-4'>
                    <h4 className='text-center pb-3 fs-3' style={{ fontFamily: "charm" }} >Ils nous font confiance</h4>
                    <Row className='text-center'>
                        {/* <Carousel interval={3000}> */}
                        <Carousel interval={1000000}>
                            {marques.length !== 0 && marques.map((marque) => {
                                return (
                                    <Carousel.Item key={marque.title}>
                                        <div className='carousel-wrapper d-flex align-items-center justify-content-center'>
                                            <img className='company-markes' loading='eager' title={marque.title} src={marque.src} alt={marque.alt} />
                                        </div>
                                    </Carousel.Item>
                                )
                            })}  
                        </Carousel>
                    </Row>
                </div>
            </section>
            <Modal fullscreen={fullscreen} show={showModal} onHide={() => setShowModal(false)}>
                <ModalHeader closeButton />
                {pagenummber === 1 && <Premier />}
                {pagenummber === 2 && <Quatre />}
                {pagenummber === 3 && <CinqFinance />}
            </Modal>

            <p className='d-none'>{role && setIsAuthenticated && isAuthenticated}</p>

        </main>
    )
}
