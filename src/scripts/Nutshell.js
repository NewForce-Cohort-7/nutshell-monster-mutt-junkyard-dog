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
        <section class="joke">
        <h1> Just for Laughs</h1>
         ${DadJokes()}
        </section>
        <section class="taskForm">
        <h1>My Tasks</h1>
        ${TaskForm()}
        </section>
        
        <section class="incompleteTaskList">
        <h1>To Do!</h1>
        ${TaskList()}
        </section>

        <section class="completeTaskList">
        <h1>Done!!</h1>
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






