import { getBreweries, fetchBreweriesByState,fetchBreweriesByCity, setBreweries } from "./dataAccess.js";

const mainContainer = document.querySelector("#dashboard")

export const BreweryForm = () => {
    
    let html = `<div id="search-brewery">
   <div class="cityForm">
    <label class="label" for="breweries-city">City</label>
    <input type="text" id="search-city" class="input"/>
    <button class="button" id="city-btn">Search by City</button>
    </div>
    <div class="stateForm"
    <label class="label" for="breweries-state">State</label>
    <input type="text" id="search-state" class="input"/>
    <button class="button" id="state-btn">Search by State</button>
    </div>
    </div>
    
    `;
    
    return html
}

document.addEventListener("click", clickEvent => {
  if( clickEvent.target.id === "city-btn") {
    let cityX = document.querySelector("input[id='search-city']").value 
    let cityY = cityX.replace(/ /g,"_")
    fetchBreweriesByCity(cityY)
    dashboard.dispatchEvent(new CustomEvent("stateChanged"))
  }
    
    }
)

document.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "state-btn") {
        let stateX = document.querySelector("input[id='search-state']").value
        let stateY = stateX.replace(/ /g,"_")
        fetchBreweriesByState(stateY)
        dashboard.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export const breweryList = () => {
    
    const breweries = getBreweries();
    return `
    ${breweries.map(brewery => {
        return`<div class="brewery-container">${brewery.name}</div>`
    }).join("")
  }
  `}
