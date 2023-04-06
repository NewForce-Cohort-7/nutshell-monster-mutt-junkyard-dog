import { deleteEvent, getEvents, saveCompletion } from "./dataAccess.js"

const convertToListElement = (event) => {
    return`
    <li><m>
     ${event.name} is at ${event.location} on ${event.eventDate} at ${event.eventTime}.${event.description} </m>
    
   
    
   
    <button class="event__delete" id="event--${event.id}">Delete</button>
</li>
`
}




export const events = () => {
    const events = getEvents()
    const sortEvents = events.sort ((a, b)=>new Date(a.eventDate) - new Date(b.eventDate))
   

    let html =  sortEvents.map (events => convertToListElement(events)).join("")
                

   return `<ul class="agendaList">${html}</ul>`
}

    






const mainContainer = document.querySelector("#dashboard")

mainContainer.addEventListener("click", clickevent => {                         
    if (clickevent.target.id.startsWith("event--")) {
        const [,eventId] = clickevent.target.id.split("--") 
            deleteEvent(parseInt(eventId))
    }
})

//Need to come back and change this to fit our project. This should present the form pop up to be filled out.
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "events") {
            const [eventId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. reserveId
                   2. clownId
                   3. date_created
            */
            const completion = {
               eventId : +eventId,
                date_created : Date.now()
            }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            saveCompletion(completion)
        }
    }
)
