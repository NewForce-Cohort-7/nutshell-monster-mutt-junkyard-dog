import { saveTasks } from "../taskDataAccess.js"


export const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitTask") {
        // Get what the user typed into the form fields
        const newInputTask = document.querySelector("input[name='taskInfo']").value
        const dueDate = document.querySelector("input[name='dueDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            task: newInputTask,
            dueDate: dueDate,
            completed: false
        }

        // Send the data to the API for permanent storage
        saveTasks(dataToSendToAPI)
    }
})

export const taskForm = () => {
    let html = `
        <div class="form">
            <label class="label" for="taskInfo"> Enter New Task</label>
            <input type="text" name="taskInfo" class="input" />
        </div>
        <div class="form">
            <label class="label" for="dueDate">Due Date</label>
            <input type="date" name="dueDate" class="input" />
        </div>

        <button class="button" id="submitTask">Submit Task</button>
    `

    return html
}