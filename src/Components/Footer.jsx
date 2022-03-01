import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/logoSite.jpeg";
import '../Styles/footer.css'
import { BsGeoAlt, BsFillEnvelopeFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

export default function Footer() {
    return (
        <section className='bg-light p-4'>
            <Container className="cont4">
                <Row className="cont41">
                    <Col xs={12} sm={6} md={3} >
                        <div className="col4">
                            <img src="/images/logosite.svg" className="logo" alt="logo"></img>
                        </div>
                    </Col>

                    <Col sm={6} md={3} >
                        <div className="">
                            <p className="contactUs">Nous trouver :</p>
                            <Row className="rowIcons">
                                <Col sm={4} xs={4}>
                                    <BsGeoAlt className="icon" />
                                </Col>
                                <Col sm={4} xs={4}  >
                                    <FiPhoneCall className="icon" />
                                </Col>
                                <Col sm={4} xs={4} >
                                    <BsFillEnvelopeFill className="icon" />
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col sm={6} md={3}>
                        <div className="">
                            <p className="legal">Mentions légales</p>
                            <p className="condition">Confidentialité</p>
                            <p className="condition">Conditions Générales</p>
                        </div>
                    </Col>

                    <Col sm={6} md={3}>
                        <div className="">
                            <p className="legal">Qui sommes nous ?</p>
                            <p className="condition">Blog</p>
                            <p className="condition">Former et recruter</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
