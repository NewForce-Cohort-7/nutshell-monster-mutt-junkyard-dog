import { eventForm } from "./eventForm.js"
import { events } from "./events.js"
import { articleForm, articleList } from "./articles.js"


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
    `
}


      
    