// import React, { useState, useRef, useEffect } from "react";
// import "../Styles/TrainerSpace.css";
// import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import { Link } from "react-router-dom";
// // import backgroundImage from "../assets/background.jpeg";
// // import Image from "react-bootstrap/Image";
// import logo from "../assets/logoSite.jpeg"
// import { connect } from "react-redux";
// import { BsGeoAlt, BsFillEnvelopeFill } from "react-icons/bs";
// import { FiPhoneCall } from "react-icons/fi";
// import axios from "axios";
// import { baseURL } from "../constants";
// // import AddFormation from "./AddFormation";
// import { useHistory } from "react-router-dom";
// import { login, setisauth, setisadmin, setlistvalue, setaddvalue } from "../Actions/loginActions";
// // import { setvalueauth } from "../Actions/loginActions";


// function Listformations(props) {

//     const [name, setName] = useState("");
//     const [formations, setFormations] = useState([]);
//     const [isChoosed, setIsChoosed] = useState(0);
//     const [currentFormation, setCurrentFormation] = useState({});
//     const [descriptionModified, setDescriptionModified] = useState("");
//     const [linkModified, setLinkModified] = useState("");
//     const [nameformationModified, setNameFormationModified] = useState("");
//     // const didMountRef = useRef(false);
//     // const forceUpdate = React.useReducer(bool => !bool)[1];

//     const history = useHistory();
//     useEffect(() => {

//         fetchUserDetails();


//     })
//     function ModifyFormation() {
//         axios({
//             method: "post",
//             url: "/UpdateFormation",
//             baseURL: baseURL,
//             data: {
//                 userid: props.listvalue,
//                 formationName: currentFormation.formationName,
//                 link: currentFormation.link,
//                 nameformationModified: nameformationModified,
//                 descriptionModified: descriptionModified,
//                 linkModified: linkModified,
//             },

//         })
//             .then((res) => {
//                 // const message = res.data.message;

//                 if (res.data.value) {
//                     alert("Formation a été modifiée !");
//                     setCurrentFormation(
//                         {
//                             formationName: nameformationModified,
//                             description: descriptionModified,
//                             link: linkModified
//                         }

//                     )
//                     setIsChoosed(1);

//                 }
//             })
//             .catch((err) => console.log(err));
//     };


//     function DeleteFormation() {
//         axios({
//             method: "post",
//             url: "/DeleteFormation",
//             baseURL: baseURL,
//             data: {
//                 userid: props.listvalue,
//                 formationName: currentFormation.formationName,
//                 link: currentFormation.link,
//             },

//         })
//             .then((res) => {
//                 // const message = res.data.message;

//                 if (res.data.value) {

//                     alert("Formation a été Supprimée !");
//                     setIsChoosed(0);


//                 }
//             })
//             .catch((err) => console.log(err));
//     };
//     function fetchUserDetails() {
//         axios({
//             method: "post",
//             url: "/getUserDetails",
//             baseURL: baseURL,
//             data: {
//                 userid: props.listvalue,
//             },

//         })
//             .then((res) => {

//                 setName(res.data.results[0].name);
//                 setFormations(res.data.results[0].formations)


//             })
//             .catch((err) => console.log(err));
//     }
//     function nameHandler(event) {

//         setNameFormationModified(event.target.value)

//     }
//     function descriptionHandler(event) {

//         setDescriptionModified(event.target.value);

//     }
//     function linkHandler(event) {

//         setLinkModified(event.target.value);

//     }

//     const listFormations = () => {
//         if (isChoosed === 0) {
//             if (formations.length !== 0) {
//                 return (
//                     formations.map((item) => (
//                         <div class="formDiv0"  >
//                             <a href="###" onClick={() => { setIsChoosed(1); setCurrentFormation(item) }}  >
//                                 <div class="formDiv" ><p class="formName" >{item.formationName.toUpperCase()}</p>
//                                 </div>


//                             </a>
//                         </div>
//                     ))
//                 );
//             }
//             else {
//                 return (
//                     <div class="formationTitle">AUCUNE FORMATION</div>
//                 )

//             }
//         }
//         else if (isChoosed === 2) {
//             return (
//                 <div>
//                     <Container>
//                         <Row>
//                             <Col sm={2} md={3}>

//                             </Col>
//                             <Col xs={12} sm={8} md={6}>
//                                 <div class="adDiv">
//                                     <p class="formationTitle">MODIFIER LA FORMATION</p>
//                                     <p class="above">NOM DE FORMATION</p>
//                                     <input class="inputAccount"
//                                         defaultValue={currentFormation.formationName}
//                                         type="text"
//                                         onChange={e => { nameHandler(e) }} />

//                                     <p class="above">DESCRIPTION</p>
//                                     <textarea class="inputDescription"
//                                         type="text"
//                                         defaultValue={currentFormation.description}
//                                         onChange={event => descriptionHandler(event)} />

//                                     <p class="above">LINK</p>
//                                     <input class="inputAccount"
//                                         defaultValue={currentFormation.link}
//                                         onChange={event => linkHandler(event)} />



//                                     <a href="###" onClick={() => ModifyFormation()}>
//                                         <div class="addButon" >Modifier la formation</div></a>


//                                 </div>
//                             </Col>
//                             <Col sm={2} md={3} >

//                             </Col>

//                         </Row>

//                     </Container>
//                 </div>
//             )
//         }
//         else {
//             return (
//                 <div>

//                     <Container>
//                         <Row>
//                             <Col xs={12} sm={2} md={3} >

//                             </Col>
//                             <Col sm={8} md={6}>
//                                 <p class="formationTitle">DÉTAILS DE LA FORMATION</p>
//                                 <p class="detail"> NOM: {currentFormation.formationName.toUpperCase()}</p>
//                                 <p class="detail"> DESCRIPTION: {currentFormation.description}</p>
//                                 <div class="column2">
//                                     <div
//                                         class="video"
//                                         style={{
//                                             position: "relative",
//                                             paddingBottom: "56.25%" /* 16:9 */,
//                                             paddingTop: 35,

//                                             height: 0,
//                                         }}
//                                     >
//                                         <iframe
//                                             style={{
//                                                 position: "absolute",
//                                                 top: 0,
//                                                 left: 0,
//                                                 width: "100%",
//                                                 height: "100%",
//                                             }}
//                                             src={currentFormation.link}
//                                             title="YouTube video player"
//                                             frameborder="0"
//                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                             allowfullscreen
//                                         ></iframe>
//                                     </div>
//                                 </div>

//                                 <p class="detail"> LIEN: <a href={currentFormation.link}>{currentFormation.link}</a></p>

//                             </Col>
//                             <Col sm={2} md={3}>

//                             </Col>

//                         </Row>

//                     </Container>

//                     <Container className="dmContainer">
//                         <Row>
//                             <Col xs={12} sm={6} className="colll1" >
//                                 <div>
//                                     <div class="addDiv1">
//                                         <a href="###" onClick={() => {
//                                             setIsChoosed(2);
//                                             setNameFormationModified(currentFormation.formationName);
//                                             setDescriptionModified(currentFormation.description);
//                                             setLinkModified(currentFormation.link)
//                                         }} ><p class="add1">Modifier</p></a>
//                                     </div>
//                                 </div>
//                             </Col>
//                             <Col sm={6} className="colll1" >
//                                 <div>
//                                     <div class="addDiv1">
//                                         <a href="###" onClick={() => DeleteFormation()}><p class="add1">Supprimer</p></a>
//                                     </div>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>

//                 </div>
//             )
//         }

//     }
//     const renderScreen = () => {

//         return (
//             <div>
//                 <Container className="center0">
//                     <Container>
//                         <Row>
//                             <Col sm={6}>
//                                 <div ><p class="clientSpace">ESPACE FORMATEUR</p></div>
//                             </Col>
//                             <Col sm={6}>
//                                 <div class="Name">NOM ET PRÉNOM : ADMIN</div>
//                             </Col>

//                         </Row>


//                     </Container>
//                     <Container>
//                         <Row>
//                             <Col xs={12} sm={12} md={8}>
//                                 <div class="formationList1"> <a class="retour" href="###" onClick={() => { props.setlistvalue(0); history.push('/espace-formateur') }}>
//                                     {"<"} Liste d'utilisateurs </a> <p class="formationList" >
//                                         <a class="retour" href="###" onClick={() => { setIsChoosed(0) }}> Liste de formations de {name.toUpperCase()} </a></p></div>
//                             </Col>
//                             <Col sm={4} md={4}  >
//                                 <div>
//                                     <div class="addDiv">
//                                         <a href="/addformation" ><p class="add">Ajouter une formation</p></a>
//                                     </div>
//                                 </div>
//                             </Col>

//                         </Row>


//                     </Container>




//                     <div>{listFormations()}</div>
//                 </Container>


//                 <Container className="cont4">
//                     <Row className="cont41">
//                         <Col xs={12} sm={6} md={3} >
//                             <div class="col4">
//                                 <img src={logo} class="logo" alt="logo" ></img>

//                             </div>
//                         </Col>
//                         <Col sm={6} md={3} >
//                             <div class="col4">
//                                 <p class="contactUs">Nous contacter :</p>
//                                 <Row className="rowIcons">
//                                     <Col sm={4} xs={4}>
//                                         <BsGeoAlt class="icon" />
//                                     </Col>
//                                     <Col sm={4} xs={4}  >
//                                         <FiPhoneCall class="icon" />
//                                     </Col>
//                                     <Col sm={4} xs={4} >
//                                         <BsFillEnvelopeFill class="icon" />
//                                     </Col>
//                                 </Row>

//                             </div>
//                         </Col>
//                         <Col sm={6} md={3}>
//                             <div class="col4">
//                                 <p class="legal">Mentions légales</p>
//                                 <p class="condition">Confidentialité</p>
//                                 <p class="condition">Conditions Générales</p>

//                             </div>
//                         </Col>
//                         <Col sm={6} md={3}>
//                             <div class="col4">
//                                 <p class="legal">Qui sommes nous ?</p>
//                                 <p class="condition">Blog</p>
//                                 <p class="condition">Former et recruter</p>

//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>

//             </div>
//         )




//     }
//     return (

//         <div>{renderScreen()}</div>


//     )


// }
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
// export default connect(mapStateToProps, mapDispatchToProps)(Listformations);