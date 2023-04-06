import { siteChat } from "./chat.js"
import { articleForm, articleList } from "./articles.js"
import { BreweryForm, breweryList } from "./breweries.js"
import { Navbar } from "./navBar.js"
import { TaskForm } from "./taskForm.js"
import { TaskList, TaskListComplete } from "./taskList.js"
import { DadJokes } from "./generateJoke.js"
import { eventForm } from "./eventForm.js"
import { events } from "./events.js"

export const Nutshell = () => {
return `
      <div class="navBar"> ${Navbar()}</div>
    <h1>Event</h1>
    <section class="eventForm" id="navEvents">
    ${eventForm()}
    </section>
   <section class= "events">
   <h2>Agenda</h2>
   ${events()}
   </section>
   <div class="title-container">
      <h1 class="articleHead" id="navArticles">Articles</h1>
      </div>
      ${articleForm()}
      ${articleList()}
      <section class="joke">
        <h1> Just for Laughs</h1>
         ${DadJokes()}
        </section>
        <section class="taskForm" id="navTasks">
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
      <div class="brew">
      <h2 class="brewHead" id="navBrews">Breweries!</h2>
      ${BreweryForm()}
      ${breweryList()}
            </div>
            <div class="chat-container">
            <div class="chat-Title">
                  <h1>Nutshell Chat</h1>
            </div>
            <section class="siteChat" id="navChat">
                  ${siteChat()}
            </section> 
            
      </div>`
}








