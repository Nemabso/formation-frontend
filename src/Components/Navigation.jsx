import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AuthContext } from "../context/Auth";
import { logout } from "../context/AuthApi";
import "../Styles/Navigation.css";
import { Link, useNavigate } from "react-router-dom";
export default function Navigation({ setUserID }) {
    const [isAuthenticated, setIsAuthenticated, role, setRole] = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log("userBack : ", userBack);

    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        setUserID("");
        setRole(null);
        navigate(`/login`)
    }
    // console.log("isAutenticated Navbar", isAuthenticated);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="customNav bg-light p-3" >
                <Container className="cont">
                    <Navbar.Brand >
                        <img src="/logo512.png" style={{ width: 85, height: 65 }} alt="logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-center ">
                        <Nav className="navbar navbar-expand-lg">
                            <li className="itemCover">
                                <Link to="/" className="nav-item">ACCUEIL</Link>
                            </li>

                            <li className="itemCover">
                                <Link to="/nosformation" className="nav-item">NOS FORMATIONS</Link>
                            </li>

                            <li className="itemCover">
                                <Link to="/comptes" className="nav-item">BLOG</Link>
                            </li>

                            <li className="itemCover">
                                <Link to="/contact" className="nav-item">NOUS CONTACTER</Link>
                            </li>
                            {(!isAuthenticated && (
                                <li className="itemCover">
                                    <span className="nav-item menu-button">COMPTES</span>
                                    <div className="dropdown">
                                        <Link to="/login">Formateur</Link>
                                        <Link to="/eleveLogin">Eleve</Link>
                                    </div>
                                </li>
                            ))}
                            {(role && (
                                <li className="itemCover">
                                    {(role === "admin" && (<Link className="nav-item menu-button" to="/admin ">ADMIN</Link>))}
                                    {(role === "formateur" && (<Link className="nav-item menu-button" to="/profa">FORMATEUR</Link>))}
                                    <div className="dropdown rounded">
                                        <Link to="/sallea" >Salle A</Link>
                                        <Link to="/salleb" >Salle B</Link>
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
