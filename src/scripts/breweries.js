import { fetchBreweries, fetchBreweriesByState } from "./dataAccess.js";

const mainContainer = document.querySelector("#dashboard")

export const breweryList = async () => {
    const breweries = await fetchBreweries();
    return `
      <div class="brewery-list">
        ${breweries.map(brewery => {
          return `
            <div class="brewery-container" id="${brewery.id}">
              <div class="brewery-name">${brewery.name}</div>
              <div class="brewery-type">${brewery.brewery_type}</div>
              <div class="brewery-address">${brewery.street}</div>
              <div class="brewery-phone">${brewery.phone}</div>
              <div class="brewery-website">${brewery.website_url}</div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  };
  

export const breweryForm = () => {
  let html = `
    <button class="brewery-search-button">Search Breweries</button>
    <div class="brewery-form hidden">
      <label class="label" for="brewery-state">State</label>
      <input type="text" id="brewery-state" class="input"/>
      <label class="label" for="brewery-city">City</label>
      <input type="text" id="brewery-city" class="input"/>
      <button class="button" id="searchBreweries">Search</button>
    </div>
  `;
  return html;
};

mainContainer.addEventListener("click", clickEvent => {
  if (clickEvent.target.classList.contains("brewery-search-button")) {
    const breweryForm = document.querySelector(".brewery-form");
    breweryForm.classList.toggle("hidden");
    if (breweryForm.classList.contains("hidden")) {
      clickEvent.target.textContent = "Search Breweries";
    } else {
      clickEvent.target.textContent = "Cancel";
    }
  } else if (clickEvent.target.id === "searchBreweries") {
    // search for the breweries and display the list
    const state = document.querySelector("input[id='brewery-state']").value.trim();
    const city = document.querySelector("input[id='brewery-city']").value.trim();
    const breweries = fetchBreweriesByState(state, city);
    const breweryListHTML = breweryList(breweries);

    const breweryListContainer = document.querySelector('.brewery-list');
    breweryListContainer.innerHTML = breweryListHTML;

    const breweryForm = document.querySelector(".brewery-form");
    breweryForm.classList.add("hidden");
    document.querySelector(".brewery-search-button").textContent = "Search Breweries";
  }
});
