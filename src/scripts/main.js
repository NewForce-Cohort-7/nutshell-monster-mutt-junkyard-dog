import { Nutshell } from "./Nutshell.js"
import { fetchRequests, fetchArticles } from "./dataAccess.js"

const articlesContainer = document.querySelector("#articlesContainer")

export const render = () => {
    fetchRequests()
    .then(() => fetchArticles())
    .then(() => { 
            articlesContainer.innerHTML = Nutshell()
            
        }
    )
}

render()

dashboard.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
