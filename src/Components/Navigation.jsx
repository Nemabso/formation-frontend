import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo2.svg";
import { AuthContext } from "../context/Auth";
import { logout } from "../services/AuthApi";
import "../Styles/Navigation.css";
import { useNavigate } from "react-router-dom";
export default function Navigation({ setUserID }) {
    const [isAuthenticated, setIsAuthenticated, userBack, setUserBack] = useContext(AuthContext);
    const navigate = useNavigate();
    console.log("userBack : ", userBack);

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        setUserID("");
        setUserBack(null);
        navigate(`/home/login`)
    }
    // console.log("isAutenticated Navbar", isAuthenticated);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="customNav bg-light p-3" >
                <Container className="cont"  >
                    <Navbar.Brand href="/home" >
                        <img src={logo} style={{ width: 70, height: 70 }} alt="logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-center ">
                        <Nav className="navbar navbar-expand-lg">
                            <li className="itemCover">
                                <a href="/home" className="nav-item">ACCUEIL</a>
                            </li>

                            <li className="itemCover">
                                <a href="/home" className="nav-item">NOS FORMATIONS</a>
                            </li>

                            <li className="itemCover">
                                <a href="/home/comptes" className="nav-item">BLOG</a>
                            </li>

                            <li className="itemCover">
                                <a href="/home/contact" className="nav-item">NOUS CONTACTER</a>
                            </li>
                            {(!isAuthenticated && (
                                <li className="itemCover">
                                    <span className="nav-item menu-button">COMPTES</span>
                                    <div className="dropdown">
                                        {/* <a href="/home/login">Admin</a> */}
                                        <a href="/home/login">Formateur</a>
                                        <a href="/home/eleveLogin">Eleve</a>
                                    </div>
                                </li>
                            )) || (
                                    <li className="itemCover">
                                        <button className="btn btn-danger" onClick={handleLogout} >Déconnexion</button>
                                    </li>
                                )
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
