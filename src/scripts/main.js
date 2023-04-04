import { Nutshell } from "./Nutshell.js"
import { fetchRequests, fetchArticles } from "./dataAccess.js"

const mainContainer = document.querySelector("#dashboard")

export const render = () => {
    fetchRequests()
    .then(() => fetchArticles())
    .then(() => { 
            articlesContainer.innerHTML = Nutshell()
            
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
