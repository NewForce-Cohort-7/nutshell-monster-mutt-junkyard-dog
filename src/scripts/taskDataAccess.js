const applicationState = {
    tasks:[],
    joke:{
        setup:'',
        punchline:''
}

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


//created an empty variable to house API key bc of bots on gitHub. Dont want to give them access to your API key

//need the API key for fetch function to work. Can use mine or create your own at:https://dadjokes.io/documentation/getting-started

//'5a8cb382d1msh6f71fe0ce0cd722p1bcae0jsne4317167a6c9'

//'f6c82aecabmsh86cd78b71f9e882p17a81bjsn278be13f0ae5'
const dadJokeKey='f6c82aecabmsh86cd78b71f9e882p17a81bjsn278be13f0ae5'

//Fetch random joke data from external API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${dadJokeKey}`,
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

export const fetchJokes = () => {
    return fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(
        (randomJoke) => {
            // Store the external state in application state
            //needed to use indexing bc data in body stored w/in an array
            applicationState.joke.setup=randomJoke.body[0].setup
            applicationState.joke.punchline=randomJoke.body[0].punchline
            
        }
    )
	.catch(err => console.error(err));
    }



export const getJoke = () => {
    return applicationState.joke
}

