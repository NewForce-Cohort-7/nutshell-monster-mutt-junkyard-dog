import { siteChat } from "./chat.js"
import { articleForm, articleList } from "./articles.js"

// export const Nutshell = () => {
//       return `
//       <h1>Nutshell Chat</h1>
//         <section class="siteChat">
//             ${siteChat()}
//         </section>
//       `
//       // Render all your UI components here
// }


export const Nutshell = () => {
      return `
      <div class="title-container">
      <h1 class="articleHead">Articles</h1>
      </div>
      ${articleForm()}
      ${articleList()}

      <h1>Nutshell Chat</h1>
        <section class="siteChat">
            ${siteChat()}
        </section>

      
      `
}

