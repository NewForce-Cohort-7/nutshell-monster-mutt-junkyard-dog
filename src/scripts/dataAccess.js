const applicationState = {
  articles: [],
  breweries: []
}
const API = "http://localhost:8088";
const brewURL = 'https://api.openbrewerydb.org/v1/breweries';

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

export const fetchBreweries = async () => {
  const response = await fetch(`${brewURL}`);
  const breweries = await response.json();
  applicationState.breweries = breweries;
  return breweries;
};

export const fetchBreweriesByState = async (state, city) => {
  const response = await fetch(`${brewURL}?by_state=${state}&by_city=${city}`);
  const breweries = await response.json();
  applicationState.breweries = breweries;
  return breweries;
};


export const getBreweries = () => {
  return applicationState.breweries.map((brewery) => ({ ...brewery }));
};

// export const fetchBreweries = () => {
//   return fetch(`${brewURL}/breweries`)
//     .then(response => response.json())
//     .then((data) => {
//       applicationState.breweries = data
//     })
// };

// export const saveBrewery = (brewery) => {
//   const fetchOptions = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(brewery)
//   }
//     return fetch(`${brewURL}/breweries`, fetchOptions)
//     .then(response => response.json())
//     .then(() => {
//       mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//     })

// }

// export const fetchBreweriesByState = async (state) => {
//   const response = await fetch(`${brewURL}?by_state=${state}`);
//   const breweries = await response.json();
//   return breweries;
// };


