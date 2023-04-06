import { Nutshell } from "./Nutshell.js"
import { fetchRequests, fetchArticles, fetchCompletedChats,fetchEvents } from "./dataAccess.js"
import { fetchTasks,fetchJokes } from "./taskDataAccess.js"
import { DadJokes } from "./generateJoke.js"

const mainContainer = document.querySelector("#dashboard")
const jokeContainer = document.querySelector("#taskContainer")

// ---------------------------------------------------
const render = () => {

    fetchCompletedChats()
    .then(()=>fetchTasks())
    .then(()=>fetchRequests())
    .then(() => fetchRequests())
    .then(() => fetchArticles())
    .then(()=>fetchEvents())
    .then(
        () => {
            mainContainer.innerHTML = Nutshell()

        }
    )
}
render()


const renderJokehtml = () => {
    fetchJokes()
    .then(
        () => {
            jokeContainer.innerHTML = DadJokes()
        }
    )
}
renderJokehtml()


//In taskDataAccess when user deletes task or inputs new task, check a checkbox & the data is saved permanently in db, dispatch event sends a "state change" signal....eventlistener hears and refresh page

mainContainer.addEventListener("stateChanged",customEvent => {

        render()
    }

)


jokeContainer.addEventListener("jokestateChanged",customEvent => {
    renderJokehtml()
}

)







