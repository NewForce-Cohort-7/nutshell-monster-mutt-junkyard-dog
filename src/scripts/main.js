import { Nutshell } from "./Nutshell.js"
import { fetchEvents } from "./dataAccess.js"

const dashboard = document.querySelector("#dashboard")

const render = () => {
    fetchEvents()
    .then(() => {
            dashboard.innerHTML = Nutshell()
            
        }
    )
}

render()
//mainContainer.addEventListener(
  //  "stateChanged",
    //customEvent => {
      //  render()
    //}
//)
