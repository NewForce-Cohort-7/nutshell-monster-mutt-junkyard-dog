import { Nutshell } from "./Nutshell.js"
import { fetchTasks,fetchJokes } from "./taskDataAccess.js"

const mainContainer = document.querySelector("#taskContainer")

const render = () => {
    fetchTasks().then(fetchJokes)
    .then(() => {
            mainContainer.innerHTML = Nutshell()
            
        }
    )
}

render()

//In taskDataAccess when user deletes task or inputs new task & the data is saved permanently in db, dispatch event sends a "state change" signal....eventlistener hears and refresh page
//mainContainer = document.querySelector("#taskContainer")

mainContainer.addEventListener("stateChanged",customEvent => {
        render()
    }
)

