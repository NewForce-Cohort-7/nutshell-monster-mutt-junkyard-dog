const applicationState = {
  articles: [],
  breweries: []
}
const API = "http://localhost:8088";
const cityAPI = "https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3"
const stateAPI = "https://api.openbrewerydb.org/v1/breweries?by_state=new_york&per_page=3"
const mainContainer = document.querySelector("#dashboard")


export const fetchRequests = () => {
  return fetch(`${API}/articles`)
    .then((response) => response.json())
    .then((articles) => {
      applicationState.articles = articles;
    });
};

export const getArticles = () => {
  return applicationState.articles.map(article => ({ ...article }))
}

export const deleteArticle = (articleId) => {
  return fetch(`${API}/articles/${articleId}`, {
    method: "DELETE"
  }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
  })
};


export const fetchArticles = () => {
  return fetch(`${API}/articles`)
    .then(response => response.json())
    .then((data) => {
      applicationState.articles = data
    })
};

export const saveArticle = (article) => {
  const fetchOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  }
    return fetch(`${API}/articles`, fetchOptions)
    .then(response => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })

}

export const getBreweries = () => {
  return applicationState.breweries.map(brewery => ({...brewery }))
}

export const fetchBreweriesByState = (breweryState) => {
return fetch(`${stateAPI}?by_state=${breweryState}`)
.then(response => response.json())
.then((parsedResponse) => { applicationState.breweries = parsedResponse})
console.log(applicationState.breweries)
}

export const fetchBreweriesByCity = (breweryCity) => {
  return fetch(`${cityAPI}?by_city=${breweryCity}`)
  .then(response => response.json())
  .then((parsedResponse) => {applicationState.breweries = parsedResponse})
}

