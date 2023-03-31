import { Nutshell } from "./Nutshell.js"
import { fetchTasks } from "../taskDataAccess.js"

const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchTasks()
    .then(() => {
            dashboard.innerHTML = Nutshell()
            
        }
    )
}

render()

//In taskDataAccess when user input task data is saved permanently in db, dispatch event sends a "state change" signal....eventlistener hears and refresh page

mainContainer.addEventListener("stateChanged",customEvent => {
        render()
    }
)

