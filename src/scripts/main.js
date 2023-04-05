import { Nutshell } from "./Nutshell.js"
import { fetchRequests, fetchArticles } from "./dataAccess.js"
import { fetchBreweries } from "./brewsAPI.js"
const mainContainer = document.querySelector("#dashboard")

export const render = () => {
    fetchRequests()
    .then(() => fetchArticles())
    .then(() => fetchBreweries())
    .then(() => { 
            mainContainer.innerHTML = Nutshell()
            
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
