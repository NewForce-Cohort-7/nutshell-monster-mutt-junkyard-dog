import { Nutshell } from "./Nutshell.js"
import { fetchCompletedChats, fetchUsernames } from "./dataAccess.js"

const dashboard = document.querySelector("#dashboard")
// const chatContainer = document.querySelector("#chatContainer")

const render = () => {
    fetchCompletedChats()
    .then(() => fetchUsernames())
    .then(
        () => {
            dashboard.innerHTML = Nutshell()
            
        }
    )
}

render()

// export const render = () => {
//     fetchRequests()
//     .then(() => fetchCompletedChats())
//     .then(() => fetchUsernames())
//     .then(() => { 
//             chatContainer.innerHTML = Nutshell()

//         }
//     )
// }

// render()