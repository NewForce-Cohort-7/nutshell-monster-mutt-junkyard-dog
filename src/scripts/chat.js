import { Chats, sendChat, deleteMessage } from "./dataAccess.js"

export const siteChat = () => {
    let html = `
    <div class="chat">
            ${Chats()}
        </div>
    <div class="chat-Input-Fields">
        <div class="username-Field">
            <label class="label" for="usernameLabel">Username</label>
            <input type="text" name="usernameInput" class="small-Input" />
        </div>
        <div class="new-Chat-Field">
            <label class="chat-Input-Label" for="chatlabel">Chat</label>
            <input type="text" name="chatInput" class="medium-Input" />
        </div>
     </div>

        <button class="send-Button" id="sendButton">Send</button>
    `
    return html
}

const mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendButton") {
        // Get what the user typed into the form fields
        const usernameInput = document.querySelector("input[name='usernameInput']").value
        const chatInput = document.querySelector("input[name='chatInput']").value
        // Make an object out of the user input
        const dataToSendToAPI = {
            username: usernameInput,
            chatSubmission: chatInput
        }

        // Send the data to the API for permanent storage
        // console.log(dataToSendToAPI)
         sendChat(dataToSendToAPI)
    }
})

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("deleteChat--")) {
        const [,chatId] = click.target.id.split("--")
        deleteMessage(parseInt(chatId))
    }
})

