import { TaskForm } from "./taskForm.js"
import { TaskList, TaskListComplete } from "./taskList.js"
import { DadJokes } from "./generateJoke.js"
import { articleForm, articleList } from "./articles.js"
import { eventForm } from "./eventForm.js"
import { events } from "./events.js"



// Render all your UI components here

export const Nutshell = () => {
return `
    <h1>Event</h1>
    <section class="eventForm">
    ${eventForm()}
    </section>
   <section class= "events">
   <h2>Agenda</h2>
   ${events()}
   </section>
   <div class="title-container">
      <h1 class="articleHead">Articles</h1>
      </div>
      ${articleForm()}
      ${articleList()}
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

    
      </section>
      `
}

