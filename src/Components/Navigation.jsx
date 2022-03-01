import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AuthContext } from "../context/Auth";
import { logout } from "../context/AuthApi";
import "../Styles/Navigation.css";
import { Link, useNavigate } from "react-router-dom";
export default function Navigation({ setUserID }) {
    const [isAuthenticated, setIsAuthenticated, role, setRole] = useContext(AuthContext);
    const navigate = useNavigate();
    const salleB = sessionStorage.getItem("salonBID");
    const salleA = sessionStorage.getItem("salonAID");

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        setUserID("");
        setRole(null);
        navigate(`/login`)
    }

    const logOutEleve = () => {
        sessionStorage.removeItem("salonBID");
        sessionStorage.removeItem("salonAID");
        navigate(`/eleveLogin`)
    }
    // console.log("isAutenticated Navbar", isAuthenticated);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="customNav bg-light p-3" >
                <Container className="cont">
                    <Navbar.Brand >
                        <img src="/images/logosite.svg" style={{ width: 85, height: 65 }} alt="logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-center ">
                        <Nav className="navbar navbar-expand-lg">
                            {((!salleB) && (!salleA) && (
                                <>
                                    <li className="itemCover">
                                        <Link to="/" className="nav-item">ACCUEIL</Link>
                                    </li>
                                    <li className="itemCover">
                                        <Link to="/nosformation" className="nav-item">NOS FORMATIONS</Link>
                                    </li>

                                    <li className="itemCover">
                                        <Link to="/comptes" className="nav-item">AVIS</Link>
                                    </li>

                                    <li className="itemCover">
                                        <Link to="/contact" className="nav-item">NOUS CONTACTER</Link>
                                    </li>
                                </>
                            ))}

                            {((!isAuthenticated) && (!salleB) && (!salleA) && (
                                <>
                                    <li className="itemCover">
                                        <span className="nav-item menu-button">COMPTES</span>
                                        <div className="dropdown">
                                            <Link to="/login">Formateur</Link>
                                            <Link to="/eleveLogin">Eleve</Link>
                                        </div>
                                    </li>
                                </>
                            ))}
                            {(salleB && (<button className="btn btn-danger mt-3" onClick={logOutEleve} >Déconnexion</button>))}
                            {(salleA && (<button className="btn btn-danger mt-3" onClick={logOutEleve} >Déconnexion</button>))}
                            {(role === "formateur" && (
                                <li className="itemCover">
                                    {(role === "formateur" && (<Link className="nav-item menu-button" to="/profa">MON COMPTE</Link>))}
                                    <div className="dropdown rounded" style={{ backgroundColor: "#9c9fa1ad" }}>
                                        <Link to="/sallea" >Salle A</Link>
                                        <Link to="/salleb" >Salle B</Link>
                                        <button className="btn btn-danger mt-3" onClick={handleLogout} >Déconnexion</button>
                                    </div>
                                </li>
                            ))}
                            {(role === "admin" && (
                                <li className="itemCover">
                                    {(role === "admin" && (<Link className="nav-item menu-button" to="/admin ">ADMIN</Link>))}
                                    <div className="dropdown rounded">
                                        <button className="btn btn-danger mt-3" onClick={handleLogout} >Déconnexion</button>
                                    </div>
                                </li>
                            ))}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
