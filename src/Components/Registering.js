import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import chefCarton from "../assets/images/chefCarton.png";
import "../Styles/Registering.css"
// import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
const baseURL = "http://localhost:5000";

export default function Registering() {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    var initialValues = {
        role: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const validate = Yup.object({
        role: Yup.string()
            .required('Admin ou Prof'),
        lastName: Yup.string()
            .max(20, 'Doit comporter 20 caractères ou moins')
            .required('Obligatoire'),
        email: Yup.string()
            .email('Email est invalide')
            .required('Email est requis'),
        password: Yup.string()
            .min(6, 'Le mot de passe doit être au moins 6 caractères')
            // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
            //     'Votre mot de pass Doit contenir 6 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial')
            .required('6 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Le mot de passe doit correspondre')
            .required('Confirmer le mot de passe est requis'),
    })

    function handleSignup(signupData) {
        // console.log("from handlesubmit", signupData);
        axios({
            method: "post", baseURL: baseURL, url: "/user/signup", data: {
                role: signupData.role,
                lastName: signupData.lastName,
                email: signupData.email,
                password: signupData.password,
                confirmPassword: signupData.confirmPassword
            }
        })
            .then((res) => {
                // console.log("res de handlesignup", res);
                setMessage(res.data.message);
                setShowModal(true);
                // setTimeout(() => {
                //     navigate("/home")
                // }, 3000)
            }).catch(({ response }) => {
                setMessage(response.data.message);
                setShowModal(true)
            })
    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validate}
                onSubmit={(signupData, { resetForm }) => {
                    // console.log("from formik", signupData);
                    handleSignup(signupData)
                    resetForm();
                }}
            >
                {formik => (

                    <div className="container row p-4 pt-0 m-auto" style={{ minHeight: "71vh" }}>
                        <h3 className="p-2 text-center pt-0">Création du compte pour des Profs ou Admin !</h3>
                        <div className="col-md-6">
                            <Form>
                                <label htmlFor="last Name">Nom et prèsnom</label>
                                <ErrorMessage name="lastName" component="div" className="error" />
                                <Field id="last Name" name="lastName" type="text" placeholder="..." className={`form-control shadow-none`} />

                                <label htmlFor="role">Rôle</label>
                                <ErrorMessage name="role" component="div" className="error" />
                                <Field id="role" as="select" name="role" type="text" className={`form-control shadow-none `}>
                                    <option name="role">...</option><option name="role">Admin</option><option name="role">Formateur</option>
                                </Field>

                                <label htmlFor="Email">Email</label>
                                <ErrorMessage name="email" component="div" className="error" />
                                <Field id="Email" name="email" type="email" placeholder="..." className={`form-control shadow-none`} />

                                <label htmlFor="password">Mot de passe</label>
                                <ErrorMessage name="password" component="div" className="error" />
                                <Field id="password" name="password" type="password" placeholder="..." className={`form-control shadow-none`} />

                                <label htmlFor="Confirm Password">Confirmez votre Mot de passe</label>
                                <ErrorMessage name="confirmPassword" component="div" className="error" />
                                <Field id="Confirm Password" name="confirmPassword" type="password" placeholder="..." className={`form-control shadow-none`} />

                                <button className="btn btn-dark mt-3" type="submit">S'inscrire</button>
                                <button className="btn btn-warning mt-3 ml-3 mx-3" type="reset">Reset</button>
                            </Form>
                        </div>
                        <div className="col-md-6 m-auto p-2">
                            <img className="img-fluid" src={chefCarton} alt="chefimag" />
                        </div>
                    </div>
                )}
            </Formik>
            <Modal ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}
                className="modal-signup rounded-pill bg-light col-5" >
                <h1>{message}</h1>
                <button onClick={() => setShowModal(false)} className="btn btn-secondary" >Close</button>
            </Modal>
        </>
    );
}
