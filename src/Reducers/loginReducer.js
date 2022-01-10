// // import {Alert} from 'react-native';
// import AsyncStorage from "@react-native-community/async-storage";
// import {
//     LOGIN_REQUEST,
//     LOGIN_SUCCESS,
//     LOGIN_FAILURE,
//     // SET_AUTH_TOKEN,
//     SET_CURRENT_USER,
//     LOGOUT_USER,
//     SET_VALUE_AUTH,
//     SET_IS_AUTH,
//     SET_IS_ADMIN,
//     SET_LIST_VALUE,
//     SET_ADD_VALUE,
//     SET_CURRENT_TRAINER
// } from "../Actions/loginActions";

// // init state for login
// const initState = {
//     isLoading: false,
//     isAuth: false,
//     loginData: {},
//     errMsg: "",
//     userId: "",
//     valueAuth: 0,
//     admin: false,
//     listvalue: 0,
//     addvalue: 0,
//     currenttrainer: "",
// };

// const loginReducer = (state = initState, action) => {
//     switch (action.type) {
//         case LOGIN_REQUEST:
//             return {
//                 ...state,
//                 isLoading: true,
//             };
//         case LOGIN_SUCCESS:

//             return {
//                 isAuth: true,
//                 isLoading: false,
//                 loginData: action.payload,
//                 errMsg: "",
//                 userId: action.payload.id,
//                 admin: action.payload.admin,
//             };
//         case LOGIN_FAILURE:
//             AsyncStorage.removeItem("token");
//             return {
//                 isLoading: false,
//                 isAuth: false,
//                 loginData: {},
//                 errMsg: action.payload,
//             };
//         case SET_CURRENT_USER:
//             return {
//                 ...state,
//                 userDetails: action.payload,
//                 isAuth: true,
//             };
//         case SET_VALUE_AUTH:
//             return {
//                 ...state,
//                 valueAuth: action.payload,
//             };
//         case SET_IS_AUTH:
//             return {
//                 ...state,
//                 isAuth: false,
//             };

//         case SET_LIST_VALUE:
//             return {
//                 ...state,
//                 listvalue: action.payload,
//             };
//         case SET_ADD_VALUE:
//             return {
//                 ...state,
//                 addvalue: action.payload,
//             };
//         case SET_IS_ADMIN:
//             return {
//                 ...state,
//                 admin: false,
//             };
//         case LOGOUT_USER:
//             return {
//                 ...state,
//                 isAuth: false,
//             };
//         case SET_CURRENT_TRAINER:
//             console.log("hihi")
//             return {
//                 ...state,
//                 currenttrainer: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default loginReducer;