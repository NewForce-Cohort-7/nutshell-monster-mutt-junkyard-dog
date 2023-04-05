import { Nutshell } from "./Nutshell.js"
import { fetchEvents,fetchRequests, fetchArticles} from "./dataAccess.js"
import { fetchTasks,fetchJokes } from "./taskDataAccess.js"


const dashboard = document.querySelector("#dashboard")
const mainContainer = document.querySelector("#dashboard")

const render = () => {

    fetchTasks()
    .then(()=>fetchEvents())
    .then(()=>fetchJokes())
    .then(()=>fetchRequests())
    .then(() => fetchArticles())
    .then(() => {
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


