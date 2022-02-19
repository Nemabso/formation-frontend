import jwtDecode from "jwt-decode";

function removeItem(itemToRemove) {
    return window.sessionStorage.removeItem(itemToRemove)
}

function getItem(item) {
    return window.sessionStorage.getItem(item)
}

export function hasAuthenticated() {
    const token = getItem("miniblogToken");
    const result = token ? tokenIsValid(token) : false;

    if (result === false) {
        removeItem("miniblogToken")
    }

    return result;
};

export function logout() {
    removeItem("miniblogToken")
    removeItem("userName")
    removeItem("userId");
    removeItem("eleveCode")
}

function tokenIsValid(token) {
    const { exp } = jwtDecode(token);

    if (exp * 1000 > new Date().getTime()) {
        return true;
    } else {
        return false;
    }
}