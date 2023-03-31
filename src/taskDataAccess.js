const applicationState = {
    tasks:[]

}

const API = "http://localhost:8088"

//Create a function that will house the fetch task

export const fetchTasks = () => {
    return fetch(`${API}/tasks`)
    //the response is the promise thats return by the link; the 1st .then() tells what is returned to be parsed as json
        .then(response => response.json())
        //now that we have the body of the data, the 2nd .then states what to do with it. In our case we assign the returned data to the task property in applicationState variable(is this transient state? & the permanent state database.json?)
        .then(
            (UserinputTasks) => {
                // Store the external state in application state
                applicationState.tasks = UserinputTasks
            }
        )
}


export const getTasks = () => {
    return applicationState.tasks.map(task => ({...task}))
}



//"Hey API!! I want you to create something new!" When user clicks the submit task button:take the new object in transient state(applicationState) and convert it into permanent state by storing it in the database.json file, then send alert that state has changed

const mainContainer = document.querySelector("#dashboard")

export const saveTasks = (newTaskInput) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTaskInput)
    }


    return fetch(`${API}/tasks`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}