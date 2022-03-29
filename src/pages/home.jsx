import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import { Link } from 'react-router-dom';
// import vid from '../video/premier.mp4';
import { Container, Row, Col } from "react-bootstrap";
import './home.css'
import Footer from '../components/Footer';
import Modal from "react-bootstrap/Modal";
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import quote from "./imag/quote.png";

import axios from 'axios';
import { AuthContext } from '../context/Auth';
import Premier from '../components/Article/Premier';
import Quatre from '../components/Article/Quatre';
import CinqFinance from "../components/Article/CinqFinance";

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
                console.log("user get homeJSX::::", res.data);
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
                <div className='p-4 text-center filter-home'>
                    <div className='d-flex justify-content-center'>
                        <div><img src={quote} className='home-single-quote' alt="single quote" /></div>
                        <h1 className='home-cen-text'>Ensemble révèlons vos talents et <br /> construisons votre capital humain</h1>
                        <div className='home-single-quote-right'><img src={quote} className='home-single-quote' alt="single quote" /></div>
                    </div>
                    <img src="./logo512.png" className='homesite-logo' alt="logo home page" />
                    <h5 className='p-3'>
                        SPECIALISTE DE LA FORMATION DANS LES SECTEURS DE LA RESTAURATION ET DE LA VENTE
                    </h5>
                    <div className='etre-rappele'>
                        <a href={'tel:+33688464682'} className='circle'><span className='d-none'>phone</span></a>
                        <h4>
                            <b>Etre rappelé <br /> immédiatement</b>
                        </h4>
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
            <section className='p-4'>
                <div>
                    <Container>
                        <Row>
                            <Col sm={6} className="col11" >
                                <div className="home-video">
                                    <div className="video" style={{ position: "relative", paddingBottom: "56.25%" /* 16:9 */, paddingTop: 35, height: 0 }}>
                                        {/* <iframe
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", }}
                                            src="https://www.youtube.com/embed/BOwd8nsDh5Y" title="YouTube video player"
                                            frameBorder="0" allowFullScreen
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        ></iframe> */}
                                    </div>
                                </div>
                            </Col>

                            <Col sm={6} className='home-text'>
                                <div className="text-center">
                                    <p>Une offre de formation 100% sur mesure</p>
                                    <p>Vous êtes intéressé par la restauration ?</p>
                                    <p>IDOINE vous accompagne et vous conseille dans vos projets de formation.</p>
                                    {/* <a href="###"><div>En savoir plus</div></a> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className='p-4'>
                <div className='sec-company p-4'>
                    <h4 className='text-center pb-3'>Ils nous font confiance</h4>
                    <div className='text-center'>
                        <Carousel fade >
                            <Carousel.Item interval={2000} >
                                <img className='company-markes img-fluid' src="/images/basilic1.svg" alt="basilic" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/ninkasi.svg" alt="nankasi" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/originalfood.svg" alt="originalfood" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/buffalo-grill.png" alt="buffalo-grill" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/RossiBoisson.jpg" alt="RossiBoisson" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/MinoterieForest.svg" alt="Minoterie Forest" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/lagarotte.png" alt="lagarotte" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/phood.png" alt="phood" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/focaccia.png" alt="focaccia" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/sevens.png" alt="sevens" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/burger.png" alt="burger" />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className='company-markes img-fluid' src="/images/Alice-restaurant.svg" alt="Alice-restaurant" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>
            <Modal fullscreen={fullscreen} show={showModal} onHide={() => setShowModal(false)}>
                <ModalHeader closeButton />
                {pagenummber === 1 && <Premier />}
                {pagenummber === 2 && <Quatre />}
                {pagenummber === 3 && <CinqFinance />}
            </Modal>
            {/* <section className='sec-company p-4'>
                
                <div className='d-flex flex-wrap justify-content-evenly p-4'>
                    <img className='company-markes img-fluid' src="/images/basilic1.svg" alt="basilic" />
                    <img className='company-markes img-fluid' src="/images/ninkasi.svg" alt="nankasi" />
                    <img className='company-markes img-fluid' src="/images/originalfood.svg" alt="originalfood" />
                </div>
            </section> */}
            <p className='d-none'>{role && setIsAuthenticated && isAuthenticated}</p>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}
