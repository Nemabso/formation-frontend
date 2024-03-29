import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AuthContext } from "../context/Auth";
import { logout } from "../context/AuthApi";
import "./Navigation.css";
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
        <header>
            <Navbar collapseOnSelect expand="lg" className="customNav container" >
                <Navbar.Brand >
                    <img src="./images/sitelogo.svg" width={100} height={70} loading="eager" title="site logo" alt="sitelogonavbar" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"><b>Menu</b></ Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav" className="nav-items-texts">
                    <Nav >
                        {((!salleB) && (!salleA) && (
                            <>
                                <li className="itemCover">
                                    <Link to="/" className="nav-item">ACCUEIL</Link>
                                </li>
                                <li className="itemCover">
                                    <Link to="/notremission" className="nav-item">NOTRE MISSION</Link>
                                    <div className="dropdown rounded">
                                        <Link to="/financer"><span className="p-2"> Financer votre formation</span></Link>
                                    </div>
                                </li>

                                <li className="itemCover">
                                    <Link to="/nosformation" className="nav-item">NOS FORMATIONS</Link>
                                </li>
                                <li className="itemCover">
                                    <Link to="/avisclient" className="nav-item">AVIS CLIENT</Link>
                                    <div className="dropdown rounded">
                                        <Link to="/avisapprenantes"><span className="p-2">Avis apprenants</span></Link>
                                        <Link to="/partenaires"><span className="p-2">Partenaires</span></Link>
                                    </div>
                                </li>

                                {/* <li className="itemCover">
                                        <Link to="/quisommesnous" className="nav-item">QUI SOMMES NOUS</Link>
                                    </li> */}
                                <li className="itemCover">
                                    <Link to="/contact" className="nav-item">NOUS CONTACTER</Link>
                                </li>
                            </>
                        ))}
                    </Nav>
                    <span >
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
                        {((!isAuthenticated) && (!salleB) && (!salleA) && (
                            <>
                                <li className="itemCover">
                                    <span className="nav-item menu-button">COMPTES</span>
                                    <div className="comptes-dropdown rounded">
                                        <Link to="/login">Formateur</Link>
                                        <Link to="/eleveLogin">Eleve</Link>
                                    </div>
                                </li>
                            </>
                        ))}
                    </span>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};
