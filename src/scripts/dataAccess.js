const applicationState = {
    completedChats: [],
    usernames: [],
}

// const dashboard = document.querySelector("#dashboard")

const API = "http://localhost:8088"

export const fetchUsernames = () => {
    return fetch(`${API}/usernames`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.usernames = data
            }
        )
}

export const fetchCompletedChats = () => {
    return fetch(`${API}/completedChats`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completedChats = data
            }
        )
}