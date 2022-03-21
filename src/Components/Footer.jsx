import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
// import logo from "../assets/logoSite.jpeg";
import './footer.css';
import { BsGeoAlt, BsFillEnvelopeFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);


    return (
        <>
            <section className='bg-light p-5'>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={3} >
                            <img src="/images/logosite.svg" onClick={() => navigate("/")} className="img-fluid footer-icon " alt="logo"></img>
                        </Col>

                        <Col sm={6} md={3} >
                            <div className="p-2">
                                <p>Nous trouver :</p>
                                <Row >
                                    <Col sm={4} xs={4}>
                                        <span role="button" onClick={() => { setShowModal(true); setFullscreen(true) }} className='text-primary'><BsGeoAlt /></span>
                                    </Col>
                                    <Col sm={4} xs={4}  >
                                        <a href="tel:votre numero" className='text-primary'> <FiPhoneCall /></a>
                                    </Col>
                                    <Col sm={4} xs={4} >
                                        <a href="mailto:example@gmail.com?subject= subject !" className='text-primary'><BsFillEnvelopeFill /></a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col sm={6} md={3}>
                            <div className="p-2">
                                <p>Mentions légales</p>
                                <p>Confidentialité</p>
                                <p>Conditions Générales</p>
                            </div>
                        </Col>

                        <Col sm={6} md={3}>
                            <div className="p-2">
                                <Link to={'/nosformation'}>Nos formations</Link>
                                {/* <p>Blog</p> */}
                                {/* <p className='mt-3'>Former et recruter</p> */}
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
            <Modal fullscreen={fullscreen}
                show={showModal} onHide={() => setShowModal(false)}>
                <ModalHeader closeButton />
                <MapContainer style={{ height: '50vh', width: '100%' }} center={[45.662623, 4.550621]}
                    zoom={9}
                    scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://api.maptiler.com/maps/streets/style.json?key=EFRLexSapLPN3ME1xQx9'
                        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=EFRLexSapLPN3ME1xQx9"
                    />
                    <Marker position={[45.523434, 4.2955373]}>
                        <Popup>
                            6 Rue Dorine Bourneton ZAC les coquelicots <br />42160 Andrézieux-Bouthéon
                        </Popup>
                    </Marker>
                </MapContainer>
            </Modal>
        </>
    )
}
