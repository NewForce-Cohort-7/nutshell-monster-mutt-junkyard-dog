import { taskForm } from "./taskForm.js"

export const Nutshell = () => {
    return `
        <h1>Your Tasks</h1>
        <section class="taskForm">
        ${taskForm()}
        </section>

    `
}





