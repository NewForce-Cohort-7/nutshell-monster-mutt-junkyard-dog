import { sendEvent } from "./dataAccess.js"


const mainContainer = document.querySelector("#dashboard")

export const eventForm = () => {
    let html = `
   <div>
   <button class="button" id="addEvent" style="background-color: teal; font-family: Times New Roman">Add your Event</button></div>
   <form id="addEventForm" style="display: none;">
        <div class="field">
            <label class="label" for="eventName">Event Name</label>
            <input type="text" name="eventName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventDate">Event Date</label>
            <input type="date" name="eventDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventLocation">Location</label>
            <input type="text" name="eventLocation" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventTime">Time</label>
            <input type="text" name="eventTime" class="input" />
        </div>
        <div class="field">
            <label class="label" for="eventDescription">Event Description</label>
            <input type="text" name="eventDescription" class="input" />
        </div>
           <button class="button" id="saveEvent" style="background-color: teal; font-family: Times New Roman">Save Event</button>
        <div class="bg-image"></div>
    `

    return html
}


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "addEvent") {
        const form = document.getElementById("addEventForm")
        if (form.style.display === 'none') {
            //  this SHOWS the form
            form.style.display = 'block';
         }else {
            //  this HIDES the form
            form.style.display = 'none';

          }
    }
})


console.log (mainContainer)
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
        // Get what the user typed into the form fields
        const userEvent = document.querySelector("input[name='eventName']").value
        const userDate = document.querySelector("input[name='eventDate']").value
        const userLocation = document.querySelector("input[name='eventLocation']").value
        const userTime = document.querySelector("input[name='eventTime']").value
        const  userDescription= document.querySelector("input[name='eventDescription']").value
        

        // Make an object out of the user input
        const dataToSendToAPI = {
            name: userEvent,
            eventDate:userDate,
            location: userLocation,
            eventTime: userTime,
            description: userDescription
         
        }

        // Send the data to the API for permanent storage
        sendEvent(dataToSendToAPI)

        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))


    }
})
