import { Nutshell } from "./Nutshell.js"
import { fetchRequests, fetchArticles, fetchCompletedChats,fetchEvents } from "./dataAccess.js"
import { fetchTasks,fetchJokes } from "./taskDataAccess.js"

const mainContainer = document.querySelector("#dashboard")

// ---------------------------------------------------
const render = () => {

    fetchCompletedChats()
    .then(()=>fetchTasks())
    .then(()=>fetchJokes())
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



//In taskDataAccess when user deletes task or inputs new task & the data is saved permanently in db, dispatch event sends a "state change" signal....eventlistener hears and refresh page
//mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("stateChanged",customEvent => {

        render()
    }

)


