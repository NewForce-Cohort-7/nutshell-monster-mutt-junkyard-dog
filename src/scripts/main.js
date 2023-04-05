import { Nutshell } from "./Nutshell.js"
import { fetchRequests, fetchArticles } from "./dataAccess.js"
import { fetchBreweriesByState, fetchBreweriesByCity } from "./dataAccess.js"
const mainContainer = document.querySelector("#dashboard")

export const render = () => {
    fetchRequests()
    .then(() => fetchArticles())
    .then(() => fetchBreweriesByState())
    .then(() => fetchBreweriesByCity())
    .then(() =>  { 
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
