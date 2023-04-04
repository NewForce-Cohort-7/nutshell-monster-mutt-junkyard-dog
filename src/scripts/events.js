import { getEvents, saveCompletion } from "./dataAccess.js"

const convertToListElement = (event) => {
    return`
    <li>
     ${events.name} is at ${events.location} at ${events.eventTime}.${events.description} 
   
   
    
   .join("")
    }
</select>
    <button class="event__delete"
    id="event--${events.id}">
Delete
</button>
</li>
`
}




export const events = () => {
    const events = getEvents()
    const sortEvents = events.sort ((a, b)=>new Date(a.eventDate) - new Date(b.eventDate))


    let html =  sortEvents.map (events => convertToListElement(events)).join("")
                

   return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("events--")) {
        const [,eventId] = click.target.id.split("--")
        deleteReservation(parseInt(eventId))
    }
})

//Need to come back and change this to fit our project. This should present the form pop up to be filled out.
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reserveId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. reserveId
                   2. clownId
                   3. date_created
            */
            const completion = {
                reserveId : +reserveId,
                clownId : +clownId,
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
