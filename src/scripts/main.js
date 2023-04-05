import { Nutshell } from "./Nutshell.js"
import { fetchTasks,fetchJokes } from "./taskDataAccess.js"
import { fetchRequests, fetchArticles } from "./dataAccess.js"

const mainContainer = document.querySelector("#dashboard")

const render = () => {
    fetchTasks()
    .then(()=>fetchJokes())
    .then(()=>fetchRequests())
    .then(() => fetchArticles())
    .then(() => {
            mainContainer.innerHTML = Nutshell()
            
        }
    )
}

render()



//In taskDataAccess when user deletes task or inputs new task, check a checkbox & the data is saved permanently in db, dispatch event sends a "state change" signal....eventlistener hears and refresh page


mainContainer.addEventListener("stateChanged",customEvent => {
        render()
    }
)

mainContainer.addEventListener("jokestateChanged",customEvent => {
    render()
}
)



