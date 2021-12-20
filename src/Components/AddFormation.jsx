// import React, { useState, useEffect } from "react";
// import "../Styles/TrainerSpace.css";
// import PropTypes from 'prop-types';
// import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// import logo from "../assets/logoSite.jpeg"
// import { connect } from "react-redux";
// import { BsGeoAlt, BsFillEnvelopeFill } from "react-icons/bs";
// import { FiPhoneCall } from "react-icons/fi";
// import axios from "axios";
// import { baseURL } from "../constants";
// import { useHistory } from "react-router-dom";
// import { login, setisauth, setisadmin, setlistvalue, setaddvalue } from "../Actions/loginActions";


// function AddFormation(props) {

//     const [nameformation, setNameFormation] = useState("");
//     const [description, setDescription] = useState("");
//     const [link, setLink] = useState("");
//     const [name, setName] = useState("");
//     // const didMountRef = useRef(false);
//     const history = useHistory();

//     // const nn = "hanae";
//     useEffect(() => {
//         fetchUserDetails();
//     })

//     function fetchUserDetails() {
//         axios({
//             method: "post", url: "/getUserDetails", baseURL: baseURL,
//             data: { userid: props.listvalue },
//         }).then((res) => {
//             setName(res.data.results[0].name);
//         }).catch((err) => console.log(err));
//     }

//     function addHandler() {
//         axios({
//             method: "post", url: "/addFormation", baseURL: baseURL,
//             data: {
//                 userid: props.listvalue,
//                 nameformation: nameformation,
//                 description: description,
//                 link: link,
//             },
//         }).then((res) => {
//             // const message = res.data.message;
//             if (res.data.value) {
//                 alert("Formation a été ajoutée!")
//                 history.push('/listformations')
//             }
//         }).catch((err) => console.log(err));
//     }



//     return (
//         <div>
//             <Container className="center0">
//                 <Container>
//                     <Row>
//                         <Col sm={6}>
//                             <div ><p className="clientSpace">ESPACE FORMATEUR</p></div>
//                         </Col>
//                         <Col sm={6}>
//                             <div className="Name">NOM ET PRÉNOM : ADMIN</div>
//                         </Col>
//                     </Row>
//                 </Container>

//                 <div className="formationList1">
//                     <a className="retour" href="###" onClick={() => { props.setlistvalue(0); history.push('/espace-formateur') }}> {"<"} Liste d'utilisateurs </a>
//                     <a className="retour" href="###" onClick={() => history.push('/listformations')} > {"<"} Liste de formations de {name.toUpperCase()}</a>
//                     <p className="formationList" >Ajout d'une formation</p>
//                 </div>

//                 <Container>
//                     <Row>
//                         <Col sm={2} md={3}>
//                         </Col>
//                         <Col xs={12} sm={8} md={6}>
//                             <div className="adDiv">
//                                 <p className="above">NOM DE FORMATION</p>
//                                 <input className="inputAccount"
//                                     placeholder="Renseignez le nom de fomation"
//                                     onChange={e => setNameFormation(e.target.value)} />
//                                 <p className="above">DESCRIPTION</p>
//                                 <textarea className="inputDescription"
//                                     type="text"
//                                     placeholder="Renseignez la description"
//                                     onChange={e => setDescription(e.target.value)} />
//                                 <p className="above">LINK</p>
//                                 <input className="inputAccount"
//                                     placeholder="Renseignez le lien de formation"
//                                     onChange={e => setLink(e.target.value)} />
//                                 <a href="###" onClick={() => addHandler()}>
//                                     <div className="addButon" >Ajouter la formation</div></a>
//                             </div>
//                         </Col>
//                         <Col sm={2} md={3} >
//                         </Col>
//                     </Row>
//                 </Container>
//             </Container>

//             <Container className="cont4">
//                 <Row className="cont41">
//                     <Col xs={12} sm={6} md={3} >
//                         <div class="col4">
//                             <img src={logo} class="logo" alt="logo" ></img>
//                         </div>
//                     </Col>
//                     <Col sm={6} md={3} >
//                         <div className="col4">
//                             <p className="contactUs">Nous contacter :</p>
//                             <Row className="rowIcons">
//                                 <Col sm={4} xs={4}>
//                                     <BsGeoAlt className="icon" />
//                                 </Col>
//                                 <Col sm={4} xs={4}  >
//                                     <FiPhoneCall className="icon" />
//                                 </Col>
//                                 <Col sm={4} xs={4} >
//                                     <BsFillEnvelopeFill className="icon" />
//                                 </Col>
//                             </Row>
//                         </div>
//                     </Col>
//                     <Col sm={6} md={3}>
//                         <div className="col4">
//                             <p className="legal">Mentions légales</p>
//                             <p className="condition">Confidentialité</p>
//                             <p className="condition">Conditions Générales</p>
//                         </div>
//                     </Col>
//                     <Col sm={6} md={3}>
//                         <div className="col4">
//                             <p className="legal">Qui sommes nous ?</p>
//                             <p className="condition">Blog</p>
//                             <p className="condition">Former et recruter</p>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }
// AddFormation.propTypes = {
//     name: PropTypes.string
// };

// const mapStateToProps = (state) => {
//     return {
//         // only map needed states here
//         isLoading: state.loginReducer.isLoading,
//         isAuth: state.loginReducer.isAuth,
//         errMsg: state.loginReducer.errMsg,
//         listvalue: state.loginReducer.listvalue,
//         currenttrainer: state.loginReducer.currenttrainer,
//         addvalue: state.loginReducer.addvalue,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // only map needed dispatches here
//         login: (loginData) => dispatch(login(loginData)),
//         setisauth: () => dispatch(setisauth()),
//         setisadmin: () => dispatch(setisadmin()),
//         setlistvalue: (value) => dispatch(setlistvalue(value)),
//         setaddvalue: (value) => dispatch(setaddvalue(value)),

//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(AddFormation);