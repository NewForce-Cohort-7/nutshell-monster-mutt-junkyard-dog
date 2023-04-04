const applicationState = {
    tasks:[],
    jokes:[]

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

const mainContainer = document.querySelector("#taskContainer")

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

export const deleteTask = (id) => {
    return fetch(`${API}/tasks/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const editTasks = (id) => {
    const fetchOptions = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({complete:true})
    }


    return fetch(`${API}/tasks/${id}`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


// //Fetch random joke data from external API

// const jokeAPI = "https://dad-jokes.p.rapidapi.com/random/joke"

// //Create a function that will house the fetch task

// export const fetchJokes = () => {
//     return fetch(`${jokeAPI}`)
//         .then(response => response.json())
//         .then(
//             (randomJoke) => {
//                 // Store the external state in application state
//                 applicationState.jokes = randomJoke
//             }
//         )
// }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a8cb382d1msh6f71fe0ce0cd722p1bcae0jsne4317167a6c9',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

export const fetchJokes = () => {
    return fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(
        (randomJoke) => {
            // Store the external state in application state
            applicationState.jokes.setup = randomJoke
        }
    )
	.catch(err => console.error(err));
    }



export const getJokes = () => {
    return applicationState.jokes.map(joke => ({...joke}))
}