import { siteChat } from "./chat.js"
import { articleForm, articleList } from "./articles.js"
import { BreweryForm, breweryList } from "./breweries.js"
import { Navbar } from "./navBar.js"
import { TaskForm } from "./taskForm.js"
import { TaskList, TaskListComplete } from "./taskList.js"
import { eventForm } from "./eventForm.js"
import { events } from "./events.js"


export const Nutshell = () => {

return `
    <section id= gridContainer>
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
   
   <section class="taskForm">
        ${TaskForm()}
        ${TaskList()}
        ${TaskListComplete()}
    </section>

    <div class="chat-container">
      ${siteChat()}
    </div>
      
    <div class="brew">
            <h2 class="brewHead" id="navBrews">Breweries!</h2>
            ${BreweryForm()}
            ${breweryList()}
    </div>
      
      <div class="chat-container">
            <div class="chat-Title">
            <h1>Nutshell Chat</h1>
            </div>
      </div>

    <section class="siteChat">
        ${siteChat()}
    </section> 

      `

}








