import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import { Link } from 'react-router-dom';
// import vid from '../video/premier.mp4';
import { Container, Row, Col } from "react-bootstrap";
import imgUn from '../assets/images/chef1.jpg';
import imgdeux from '../assets/images/herbs.jpg';
import imgtrois from '../assets/images/resturant.jpg';
import '../Styles/home.css'
import Footer from '../Components/Footer';



export default function home() {
    return (
        <div>

            {/* <section className="col-12">
                <video className="backplan" loop muted autoPlay >
                    <source src={vid} />
                </video>
            </section> */}
            {/* section 1 */}
            <section>
                <Carousel>
                    <Carousel.Item interval={3000} >
                        <img src={imgUn} className="home-slids" alt="premier block" />
                        <Carousel.Caption>
                            <h3>premier</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={imgdeux} className="home-slids" alt="deuxieme block" />
                        <Carousel.Caption>
                            <h3>Deuxieme</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={imgtrois} className="home-slids" alt="Troixieme block" />
                        <Carousel.Caption>
                            <h3>Troixieme</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </section>
            {/* section 2 */}
            <section className='p-4'>
                <div className="sect1">
                    <Container>
                        <Row>
                            <Col sm={6} className="col11" >
                                <div className="home-video">
                                    <div className="video" style={{ position: "relative", paddingBottom: "56.25%" /* 16:9 */, paddingTop: 35, height: 0 }}>
                                        <iframe
                                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", }}
                                            src="https://www.youtube.com/embed/BOwd8nsDh5Y" title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={6} className='home-text'>
                                <div className="text-center">
                                    <p>Une offre de formation 100% sur mesure</p>
                                    <p>Vous êtes intéressé par la restauration ?</p>
                                    <p>EUREKA vous accompagne et vous conseille dans vos projets de formation.</p>
                                    <a href="###"><div>En savoir plus</div></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </section>
            {/* section 3 */}
            <section>
                <Footer />
            </section>

        </div>
    )
}
