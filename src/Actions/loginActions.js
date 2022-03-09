
// import { baseURL } from "../constants";
// import axios from "axios";
// //import store from '../../../Store';

// // action types
// export const LOGIN_REQUEST = "LOGIN_REQUEST";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";
// export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
// export const SET_CURRENT_USER = "SET_CURRENT_USER";
// export const LOGOUT_USER = "LOGOUT_USER";
// export const SET_VALUE_AUTH = "SET_VALUE_AUTH";
// export const SET_IS_AUTH = "SET_IS_AUTH";
// export const SET_IS_ADMIN = "SET_IS_ADMIN";
// export const SET_LIST_VALUE = "SET_LIST_VALUE";
// export const SET_ADD_VALUE = "SET_ADD_VALUE";
// export const SET_CURRENT_TRAINER = "SET_CURRENT_TRAINER";
// //import AsyncStorage from "@react-native-community/async-storage";


// // action creators
// export const loginRequest = () => { return { type: LOGIN_REQUEST } };
// export const loginSuccess = (loginData) => { return { type: LOGIN_SUCCESS, payload: loginData } };

// export const loginFailure = (errMsg) => { return { type: LOGIN_FAILURE, payload: errMsg } };
// // save the auth token to redux store
// export const setAuthToken = (authToken) => { return { type: SET_AUTH_TOKEN, payload: authToken } };
// export const setCurrentUser = (userId) => { return { type: SET_CURRENT_USER, payload: userId } };
// export const setCurrentTrainer = (data) => { return { type: SET_CURRENT_TRAINER, payload: data } };
// export const setValueAuth = (value) => { return { type: SET_VALUE_AUTH, payload: value } };
// export const setIsAuth = () => { return { type: SET_IS_AUTH } };
// export const setIsAdmin = () => { return { type: SET_IS_ADMIN } };
// export const setListValue = (value) => { return { type: SET_LIST_VALUE, payload: value } };
// export const setAddValue = (value) => { return { type: SET_ADD_VALUE, payload: value } };

// /*export const clearAppData = () => {
//   return async function () {
//     try {
//       const keys = await AsyncStorage.getAllKeys();
//       await AsyncStorage.multiRemove(keys);
//     } catch (error) {
//       console.error("Error clearing app data.");
//     }
//   };
// };

// export const logout = () => {
//   return function (dispatch) {
//     // setAuthenticationToken(false);
//     dispatch(setCurrentUser({}));

//     dispatch({
//       type: LOGOUT_USER,
//     });
//   };
// };*/



// // async impure action creator enabled by redux-thunk
// export const login = (loginData) => {
//     return (dispatch) => {
//         dispatch(loginRequest());
//         axios({
//             method: "post", url: "/login", baseURL: baseURL, data: {
//                 email: loginData.email,
//                 password: loginData.password,
//             },
//         }).then((res) => {
//             if (res.data.value) {
//                 dispatch(loginSuccess(res.data));
//             } else {
//                 dispatch(loginFailure(res.data.message));
//             }
//         }).catch((err) => {
//             dispatch(loginFailure(err.response.data.message));
//         });
//     };
// };
// export const setaddvalue = (value) => {
//     return (dispatch) => {
//         dispatch(setAddValue(value));
//     };
// };
// export const setvalueauth = (value) => {
//     return (dispatch) => {
//         dispatch(setValueAuth(value));
//     };
// };
// export const setisauth = () => {
//     return (dispatch) => {
//         dispatch(setIsAuth());
//     };
// };
// export const setisadmin = () => {
//     return (dispatch) => {
//         dispatch(setIsAdmin());
//     };
// };
// export const setlistvalue = (value) => {
//     return (dispatch) => {
//         dispatch(setListValue(value));
//     };
// };
// export const setcurrenttrainer = (data) => {
//     console.log(data);
//     console.log("iam her")
//     return (dispatch) => {
//         dispatch(setCurrentTrainer(data));
//     };

// };