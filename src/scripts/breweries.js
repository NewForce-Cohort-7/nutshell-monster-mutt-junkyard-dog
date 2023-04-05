import { getBreweries, fetchBreweriesByState,fetchBreweriesByCity } from "./dataAccess.js";

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
    <button class="button search-btn">Search Breweries</button>
    `;
    
    return html;
}


export const breweryList = () => {
    
    const breweries = getBreweries();
    return `
    ${breweries.map(brewery => {
        return`<div class="brewery-container">${brewery.name}</div>`;
    }).join("")
  }`}
