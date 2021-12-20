import React, { useState, useRef, useEffect } from "react";
import "../Styles/Registering.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// import backgroundImage from "../assets/background.jpeg";
// import Image from "react-bootstrap/Image";
// import { Alert } from 'react-alert'
import { connect } from "react-redux";
import { signup, setisauth } from "../Actions/signupActions";
import Footer from "./Footer";


function Registering(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            props.setisauth();
            // if signup success, go to login screen
            if (props.isAuth) {
                alert("Votre inscription s'est réalisée avec succès ! ");
                history.push('/espace-formateur')
                //props.navigation.navigate("LogIn");

                props.setisauth();
            } else if (!props.isAuth && !props.isLoading) {
                alert(props.errMsg);
            }
        } else {
            didMountRef.current = true;
        }
    }, [props.isAuth, props.isLoading]);

    function signupHandler() {
        console.log(email);
        const signupData = {
            name: name,
            email: email,
            password: password,
        };
        props.signup(signupData);
        console.log(signupData);
    }

    return (
        <div >
            <Container className="center0">
                <Container>
                    <p className="clientSpace">ESPACE FORMATEUR</p>
                </Container>

                <Container>
                    <Row>
                        <Col xs={12} sm={2} md={3} >
                        </Col>
                        <Col sm={8} md={6}>
                            <div className="loginDiv">
                                <p className="alreadyReg">JE CRÉE MON COMPTE</p>
                                <p className="above">NOM ET PRÉNOM *</p>
                                <input className="inputAccount" placeholder="Renseignez votre nom et prénom" onChange={e => setName(e.target.value)} />
                                <p className="above">ADRESSE EMAIL *</p>
                                <input className="inputAccount"
                                    placeholder="Renseignez votre email"
                                    onChange={e => setEmail(e.target.value)} />
                                <p className="above">MOT DE PASSE *</p>
                                <input className="inputAccount" placeholder="Saisissez votre mot de passe" secureTextEntry={true}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                />
                                <a href="###" onClick={() => signupHandler()}>
                                    <div className="logIn" >M'INSCRIRE</div></a>
                                <a href="/espace-formateur" >
                                    <div className="logIn" >M'IDENTIFIER</div></a>
                            </div>
                        </Col>
                        <Col sm={2} md={3}>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </div >
    );

}
const mapStateToProps = (state) => {
    return {
        // only map needed states here
        isLoading: state.signupReducer.isLoading,
        isAuth: state.signupReducer.isAuth,
        errMsg: state.signupReducer.errMsg,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        // only map needed dispatches here
        signup: (signupData) => dispatch(signup(signupData)),
        setisauth: () => dispatch(setisauth()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registering);
