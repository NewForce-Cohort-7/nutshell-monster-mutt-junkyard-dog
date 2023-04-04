import { saveTasks } from "./taskDataAccess.js"

export const TaskForm = () => {
   
    let html = `
    <div class = "taskForm">
        <button class= "button" id = "submitTask"> Submit Task</button>
        <form id="myForm" style="display: none;">
            <label class "label" for="taskName">Enter New Task:</label>
            <input type="text" name="taskName" class = "input"/><br> 
            <label class "label" for="dueDate">Due Date:</label>
            <input type="date" name="dueDate" class = "input"/><br>
            <input type="submit" id= "newTask" value="Submit">
        </form>
    </div>
    `

    return html
}

export const mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitTask") {
        const form = document.getElementById("myForm")
        if (form.style.display === 'none') {
            // 👇️ this SHOWS the form
            form.style.display = 'block';
         }else {
            // 👇️ this HIDES the form
            form.style.display = 'none';
            
          }
    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newTask") {
        // Get what the user typed into the form fields
        const newInputTask = document.querySelector("input[name='taskName']").value
        const dueDate = document.querySelector("input[name='dueDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            task: newInputTask,
            dueDate: dueDate,
            complete: false
        }

        // Send the data to the API for permanent storage
        saveTasks(dataToSendToAPI)
    }
})


