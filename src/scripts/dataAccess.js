const mainContainer = document.querySelector("#dashboard")



const applicationState = {
     events : [],
}
const API = "http://localhost:8088"

export const fetchEvents = () => {
    return fetch(`${API}/events`)
        .then(response => response.json())
        .then(
            (eventInput) => {
                // Store the external state in application state
                applicationState.events = eventInput
            }
        )
}
export const getEvents = () => {
    return applicationState.events.map(events => ({ ...events}))
}


export const sendEvent = (userEventRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userEventRequest)
    }


    return fetch(`${API}/events`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteEvent = (id) => {
    return fetch(`${API}/events/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}





export const saveCompletion = (completionObject) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completionObject)
    }

//sends saveCompletion object to the API-JSON database
    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })}
