import { getTasks,editTasks, deleteTask } from "./taskDataAccess.js";

const mainContainer = document.querySelector("#dashboard")

//Function to print incomplete tasks

export const TaskList = ()=>{
    const tasks= getTasks()
    
    let html = '<h1>To Do!</h1>'
    html+= '<ul>'
       
    
        
    const convertTaskToListElement= tasks.map((task)=>{
        if(task.complete === false){
                return `
                <div id="incomplete">
                    <li>${task.task} by ${task.dueDate} 
                    <input type="checkbox" id="task--${task.id}" >
                    <button class="task__delete"id="taskDelete--${task.id}">Delete</button>
                    </li>
                </div>`
            } 
            
        }
    )  

    html += convertTaskToListElement.join("")
    html+= '</ul>'
    
    return html    
    
    }

//Function to print completed tasks

export const TaskListComplete = ()=>{
    const tasks= getTasks()
        
    let html = '<h1>Done!</h1>'
    html+= '<ul>'
            
    const convertCompleteTaskToList= tasks.map((task)=>{

        if(task.complete === true){
                    return `<div id= "complete"><li>${task.task}by ${task.dueDate}  
                    <input type="checkbox" checked id="task--${task.id}" >
                    <button class="task__delete"id="taskDelete--${task.id}">Delete</button>
                    </li></div>`   
                    }
        }
        ) 

    html += convertCompleteTaskToList.join("")
    html+= '</ul>'
        
    return html    
        
}

// Addeventlistener for when user clicks delete button



mainContainer.addEventListener("click", click => {
        if (click.target.id.startsWith("taskDelete")) {
            const [,taskId] = click.target.id.split("--")
            deleteTask(parseInt(taskId))
        }
    })
    

    //change addeventlistener for when user checks a checkbox, distinguish checkbox list items by id
    
mainContainer.addEventListener("change", function(event) {
        if (event.target.id.startsWith("task--")){
            
            if(event.target.checked){
                const [,taskId] = event.target.id.split("--")
                editTasks(parseInt(taskId))
            }
        } 
    })

    