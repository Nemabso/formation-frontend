// import { baseURL } from "../constants/constants";
// // import AsyncStorage from "@react-native-community/async-storage";
// import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// //import swal from "sweetalert";
// //import { tokenConfig } from "./AuthActions";

// // action types
// export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
// export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
// export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
// // export const SET_IS_AUTH = "SET_IS_AUTH";

// // action creators
// export const signupRequest = () => { return { type: SIGNUP_REQUEST } };
// export const signupSuccess = (signupData) => { return { type: SIGNUP_SUCCESS, payload: signupData } };
// export const signupFailure = (errMsg) => { return { type: SIGNUP_FAILURE, payload: errMsg } };
// // export const setIsAuth = () => { return { type: SET_IS_AUTH } };
// // async impure action creator enabled by redux-thunk
// export const signup = (signupData) => {
//     // const navigate = useNavigate();
//     return (dispatch) => {
//         // console.log("return dispatch signupAction.js", dispatch);
//         dispatch(signupRequest());
//         console.log("signupRequest est envoyé !", signupData);
//         axios({
//             method: "post", baseURL: baseURL, url: "/signup", data: {
//                 firstName: signupData.firstName,
//                 lastName: signupData.lastName,
//                 email: signupData.email,
//                 password: signupData.password,
//                 confirmPassword: signupData.confirmPassword
//             },
//             //headers: {
//             // "auth-token": AsyncStorage.getItem("token"),
//             //},
//         }).then((res) => {
//             console.log("res 36:actionsignup", res);
//             dispatch(signupSuccess(signupData))
//             // navigate("/")
//             console.log("res data value est arrivé !")
//         }).catch((err) => { dispatch(signupFailure(err)) })
//     };
// };

// // export const setisauth = () => { return (dispatch) => { dispatch(setIsAuth()) } };