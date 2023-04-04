import { getJokes, fetchJokes } from "./taskDataAccess.js";



export const DadJokes= ()=>{
    const jokes = getJokes()
    console.log(jokes)
    let html =`
    <div class = "jokeContainer">
        <div id="joke-section">
        <input type="submit" id="btn" value="Generate Jokes" />
        </div>
    </div>`
 
}

const mainContainer = document.querySelector("#taskContainer")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btn")) {

// let generateBtn = document.querySelector("#btn");



}})