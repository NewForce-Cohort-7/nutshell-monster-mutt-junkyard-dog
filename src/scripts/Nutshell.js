import { TaskForm } from "./taskForm.js"
import { TaskList, TaskListComplete } from "./taskList.js"
import { DadJokes } from "./generateJoke.js"
import { articleForm, articleList } from "./articles.js"

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

    `
}






