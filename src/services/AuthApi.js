import { addItem, removeItem, getItem } from "./LocaleStorage"
import jwtDecode from "jwt-decode";
import axios from "axios";
const baseURL = "http://localhost:5000";


export function hasAuthenticated() {
    const token = getItem("miniblogToken");
    const result = token ? tokenIsValid(token) : false;

    if (result === false) {
        removeItem("miniblogToken")
    }

    return result;
};

export function logedin(user) {
    return axios({ method: "post", baseURL: baseURL, url: "/login", data: { email: user.email, password: user.password } })
        .then((res) => res.data.token)
        .then(token => {
            addItem("miniblogToken", token);

            return true;
        })
}

export function logout() {
    removeItem("miniblogToken")
}

function tokenIsValid(token) {
    const { exp } = jwtDecode(token);

    if (exp * 1000 > new Date().getTime()) {
        return true;
    } else {
        return false;
    }
}