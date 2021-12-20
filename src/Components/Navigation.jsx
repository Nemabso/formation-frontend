import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo2.svg";
import "../Styles/Navigation.css";
export default function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="customNav bg-light p-4" >
                <Container className="cont"  >
                    <Navbar.Brand href="/" >
                        <img src={logo} style={{ width: 70, height: 70 }} alt="logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-center ">
                        <Nav className="navbar navbar-expand-lg">
                            <li className="itemCover">
                                {/* <Nav.Link href="/" > */}
                                <a href="/" className="nav-item">ACCUEIL</a>
                                {/* </Nav.Link> */}
                            </li>

                            <li className="itemCover">
                                {/* <Nav.Link href="/"> */}
                                <a href="/" className="nav-item">Nos formations</a>
                                {/* </Nav.Link> */}
                            </li>

                            <li className="itemCover">
                                {/* <Nav.Link href="/addformation"> */}
                                <a href="/" className="nav-item">Blog</a>
                                {/* </Nav.Link> */}
                            </li>

                            <li className="itemCover">
                                {/* <Nav.Link href="/inscription"> */}
                                <a href="/contact" className="nav-item">Nous contacter</a>
                                {/* </Nav.Link> */}
                            </li>

                            <li className="itemCover">
                                {/* <Nav.Link href="/espace-formateur"> */}
                                <a href="/espace-formateur" className="nav-item">Espace formateur</a>
                                {/* </Nav.Link> */}
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
