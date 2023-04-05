const brewAPI = "https://api.openbrewerydb.org/v1/breweries?per_page=3"

export const fetchBreweries = async () => {
    try {
      const response = await fetch("https://api.openbrewerydb.org/v1/breweries?per_page=3");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was a problem fetching the breweries:", error);
    }
  };
  

export const fetchBreweriesByState = (state, city) => {
    return fetch(`${brewAPI}/breweries?by_state=${state}&by_city=${city}`)
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }