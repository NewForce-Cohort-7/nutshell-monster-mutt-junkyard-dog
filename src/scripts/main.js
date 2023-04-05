import { Nutshell } from "./Nutshell.js"
import { fetchRequests, fetchArticles, fetchBreweries } from "./dataAccess.js"

const mainContainer = document.querySelector("#dashboard")

export const render = () => {
    fetchRequests()
    .then(() => fetchArticles())
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
