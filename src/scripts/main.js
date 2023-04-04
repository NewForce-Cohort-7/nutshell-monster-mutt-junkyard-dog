import { Nutshell } from "./Nutshell.js"
import { fetchEvents } from "./dataAccess.js"
import { fetchRequests, fetchArticles } from "./dataAccess.js"

const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchEvents()
    .then(() =>fetchRequests())
    .then(() => fetchArticles())
.then(() => {
            dashboard.innerHTML = Nutshell()



const mainContainer = document.querySelector("#dashboard")
          
        }
    )
}

render()




mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

