import { Nutshell } from "./Nutshell.js"
import { fetchRequests, fetchArticles, fetchCompletedChats } from "./dataAccess.js"

const dashboard = document.querySelector("#dashboard")

// ---------------------------------------------------
const render = () => {
    fetchCompletedChats()
    .then(() => fetchRequests())
    .then(() => fetchArticles())
    .then(
        () => {
            dashboard.innerHTML = Nutshell()
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


