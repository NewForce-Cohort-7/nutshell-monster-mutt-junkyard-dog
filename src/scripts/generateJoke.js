import { getJokes, fetchJokes } from "./taskDataAccess.js";


export const DadJokes= ()=>{

    let html =`
    <div class = "jokeContainer">
        <div id="joke-section">
        <h1>print joke here</h1>
        <input type="submit" id="btn" value="Generate Jokes" />
        </div>
    </div>`
    
    return html
    
}

const taskContainer = document.querySelector("#taskContainer")

taskContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("btn")) {
        fetchJokes().then(
            () => {
                const jokes = getJokes()
                console.log(jokes)
            }
        )

// let generateBtn = document.querySelector("#btn");<p>${joke.setup}${joke.punchlines}</>



}})