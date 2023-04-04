

export const siteChat = () => {
    let html = `
    <div class="chat">
            <input type="text" name="chatHistory" class="large-Input" />
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

