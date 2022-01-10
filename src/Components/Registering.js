import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import chefCarton from "../assets/images/chefCarton.png";
import "../Styles/Registering.css"
// import { useNavigate } from "react-router-dom";
// import Image from "react-bootstrap/Image";
// import { Alert } from 'react-alert'
import { connect } from "react-redux";
import signupReducer from "../Reducers/signupReducer"
// import { signup, setisauth } from "../Actions/signupActions";// setisauth est supprimmer pour le moment 
import { signup } from "../actions/signupActions";
import Footer from "./Footer";


function Registering(props) {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const history = useNavigate();
    var initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Doit comporter 15 caractères ou moins')
            .required('Obligatoire'),
        lastName: Yup.string()
            .max(20, 'Doit comporter 20 caractères ou moins')
            .required('Obligatoire'),
        email: Yup.string()
            .email('Email est invalide')
            .required('Email est requis'),
        password: Yup.string()
            .min(6, 'Le mot de passe doit être au moins 6 caractères')
            .required('Mot de passe requis'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Le mot de passe doit correspondre')
            .required('Confirmer le mot de passe est requis'),
    })
    useEffect(() => {
        // if (props.isAuth) {
        // props.setisauth(); // il est supprimer pour le moment
        // if signup success, go to login screen
        // alert("Votre inscription s'est réalisée avec succès ! ");

        // history.push('/espace-formateur')
        //props.navigation.navigate("LogIn");
        // props.setisauth();
        // else if (!props.isAuth && !props.isLoading) { alert(props.errMsg) }
        // }
        // if (!props.isAuth) {
        //     console.error("une error survecu avec votre inscription ! ")
        // }
    });
    // [props.isAuth, props.isLoading]//pour l'instat en commentair 

    // function signupHandler() {
    //     const signupData = {
    //         name: name,
    //         email: email,
    //         password: password,
    //     };
    //     // props.signup(signupData);
    //     // console.log(signupData);
    // }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validate}
                onSubmit={(signupData, { resetForm }) => {
                    // console.log(signupData);
                    props.signup(signupData);
                    resetForm();
                }}
            >
                {formik => (

                    <div className="container my-5 row ms-auto me-auto">
                        <div className="col-md-6">
                            <h1 className="my-4 font-weight-bold ">S'inscrire</h1>
                            <Form>
                                <label htmlFor="First Name">Prèsnom</label>
                                <ErrorMessage name="firstName" component="div" className="error" />
                                <Field id="First Name" name="firstName" type="text" className={`form-control shadow-none `} />

                                <label htmlFor="last Name">Nom</label>
                                <ErrorMessage name="lastName" component="div" className="error" />
                                <Field id="last Name" name="lastName" type="text" className={`form-control shadow-none`} />

                                <label htmlFor="Email">Email</label>
                                <ErrorMessage name="email" component="div" className="error" />
                                <Field id="Email" name="email" type="email" className={`form-control shadow-none`} />

                                <label htmlFor="password">Password</label>
                                <ErrorMessage name="password" component="div" className="error" />
                                <Field id="password" name="password" type="password" className={`form-control shadow-none`} />

                                <label htmlFor="Confirm Password">Confirm Password</label>
                                <ErrorMessage name="confirmPassword" component="div" className="error" />
                                <Field id="Confirm Password" name="confirmPassword" type="password" className={`form-control shadow-none`} />

                                <button className="btn btn-dark mt-3" type="submit">S'inscrire</button>
                                {/* <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button> */}
                                {/* <button className="btn btn-secondary mt-3 ml-3" type='button' onClick={() => logoutHandle()} >Se déconnecter</button> */}
                            </Form>
                        </div>
                        <div className="col-md-6 mt-auto mb-auto">
                            <img className="img-fluid w-100" src={chefCarton} alt="chefimag" />
                        </div>
                    </div>
                )}
            </Formik>
            <Footer />
        </>
    );

}
const mapStateToProps = () => {
    return {
        // only map needed states here
        isLoading: signupReducer.isLoading,
        isAuth: signupReducer.isAuth,
        errMsg: signupReducer.errMsg,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        // only map needed dispatches here
        signup: (signupData) => dispatch(signup(signupData)),
        // setisauth: () => dispatch(setisauth()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registering);



    // <Container className="text-center">
    //     <Container>
    //         <p className="">ESPACE FORMATEUR</p>
    //     </Container>
    //     <Form onSubmit={signupHandler} className="col-6">
    //         <Col>
    //             <p className="">JE CRÉE MON COMPTE</p>
    //             <div className="log">
    //                 <p className="above">NOM ET PRÉNOM *</p>
    //                 <input className="account" placeholder="Renseignez votre nom et prénom"
    //                     onChange={e => setName(e.target.value)} />
    //                 <p className="above">ADRESSE EMAIL *</p>
    //                 <input className="account"
    //                     placeholder="Renseignez votre email"
    //                     onChange={e => setEmail(e.target.value)} />
    //                 <p className="above">MOT DE PASSE *</p>
    //                 <input className="account" placeholder="Saisissez votre mot de passe"
    //                     onChange={e => setPassword(e.target.value)}
    //                     type="password"
    //                 />
    //                 {/* <a href="###" onClick={() => signupHandler()}> */}
    //                 <button type="submit" className="botton" >M'INSCRIRE</button>
    //                 {/* </a> */}
    //                 <a href="/espace-formateur" ><div className="botton" >M'IDENTIFIER</div></a>
    //             </div>
    //         </Col>
    //     </Form>
    // </Container>
    // <Footer />