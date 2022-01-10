export function removeItem(itemToRemove) {
    return window.localStorage.removeItem(itemToRemove)
}

export function getItem(item) {
    return window.localStorage.getItem(item)
}

export function addItem(localStorageName, newItem) {
    return window.localStorage.setItem(localStorageName, newItem)
}