import {getJoke, fetchJokes } from "./taskDataAccess.js";



//is this where i access the jokes? or do i access it in the addeventlistener? I know that im not saving it to my database, but is it right to still save it in my transient state?
export const DadJokes= ()=>{
    const joke = getJoke()

    let html =`
    <div class = "jokeContainer">
        <b>${joke.setup}</b><br><em>${joke.punchline}</em>;
        <input type="submit" id="joke-btn" value="Generate Jokes" />
        
    </div>`
    
    return html
    
}

// const mainContainer = document.querySelector("#dashboard")
const jokeContainer = document.querySelector("#taskContainer")

jokeContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("joke-btn")) {
        //wrote fetch function to only return 1 joke. so I have nothing to map through in my application state. Therefore in order to get a new joke when the button is clicked, the code below sends a state changed signal to the addeventlistener in main.js....the code w/in it renders the page= will display new joke 
       
        // const joke = getJoke()

        // const grabJoke= document.getElementById("placeJoke").innerHTML = `<b>${joke.setup}</b><br><em>${joke.punchline}</em>`;

        jokeContainer.dispatchEvent(new CustomEvent("jokestateChanged"))

}})