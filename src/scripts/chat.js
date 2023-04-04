

export const siteChat = () => {
    let html = `
    <div class="field">
            <input type="text" name="chatHistory" class="input" />
        </div>
        <div class="field">
            <label class="label" for="usernameLabel">Username</label>
            <input type="text" name="usernameInput" class="input" />
        </div>
        <div class="field">
            <label class="label" for="chatlabel">Chat</label>
            <input type="text" name="chatInput" class="input" />
        </div>

        <button class="button" id="sendButton">Send</button>
    `
    return html
}

