import { siteChat } from "./chat.js"
import { articleForm, articleList } from "./articles.js"
import { TaskForm } from "./taskForm.js"
import { TaskList, TaskListComplete } from "./taskList.js"
import { DadJokes } from "./generateJoke.js"

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
        <section id= gridContainer>
        ${DadJokes()}
        ${TaskForm()}
        ${TaskList()}
        ${TaskListComplete()}
        </section>

        <section>
        <div class="title-container">
        <h1 class="articleHead">Articles</h1>
        </div>
      ${articleForm()}
      ${articleList()}
      </section>
      
      
      <div class="chat-container">
            <div class="chat-Title">
                  <h1>Nutshell Chat</h1>
            </div>
            <section class="siteChat">
                  ${siteChat()}
            </section> 
            
      </div>
    `
}






