import { siteChat } from "./chat.js"

export const Nutshell = () => {
      return `
      <h1>Nutshell Chat</h1>
        <section class="siteChat">
            ${siteChat()}
        </section>
      `
      // Render all your UI components here
}