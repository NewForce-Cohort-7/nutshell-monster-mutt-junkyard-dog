
const applicationState = {
  articles: [],
  breweries: [],
  chats: [],
  messages: [],
  tasks: [],
  jokes: [],
  messages: [],
  events: []

}
const API = "http://localhost:8088";
const brewAPI = "https://api.openbrewerydb.org/v1/breweries"

const mainContainer = document.querySelector("#dashboard")








export const fetchEvents = () => {
  return fetch(`${API}/events`)
      .then(response => response.json())
      .then(
          (eventInput) => {
              // Store the external state in application state
              applicationState.events = eventInput
          }
      )
}
export const getEvents = () => {
  return applicationState.events.map(events => ({ ...events}))
}


export const sendEvent = (userEventRequest) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(userEventRequest)
  }


  return fetch(`${API}/events`, fetchOptions)
      .then(response => response.json())
      .then(() => {
          mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
      })
}

export const deleteEvent = (id) => {
  return fetch(`${API}/events/${id}`, { method: "DELETE" })
      .then(
          () => {
              mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
          }
      )
}





export const saveCompletion = (completionObject) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(completionObject)
  }

//sends saveCompletion object to the API-JSON database
  return fetch(`${API}/completions`, fetchOptions)
      .then(response => response.json())
      .then(() => {
          mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
      })}





export const fetchArticles = () => {
  return fetch(`${API}/articles`)
  .then(response => response.json())
  .then((data) => {
    applicationState.articles = data
    })
  };
  
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
  return applicationState.breweries.map(brewery => ({...brewery}))
}

export const fetchBreweriesByState = (breweryState) => {
  return fetch(`${brewAPI}?by_state=${breweryState}`)
  .then(response => response.json())
  .then((data) => { applicationState.breweries = data})
  
}

export const fetchBreweriesByCity = (breweryCity) => {
  return fetch(`${brewAPI}?by_city=${breweryCity}`)
  .then(response => response.json())
  .then((data) => {applicationState.breweries = data})
}

export const setBreweries = (brewery) => {
  applicationState.breweries = brewery
  document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getCompletedChats = () => {
  return applicationState.chats.map(chat => ({ ...chat }))
}

export const fetchCompletedChats = () => {
  return fetch(`${API}/chats`)
  .then(response => response.json())
  .then(
    (data) => {
      applicationState.chats = data
    }
    )
  }
  
  export const sendChat = (userMessage) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userMessage)
    }
    return fetch(`${API}/chats`, fetchOptions)
    .then(response => response.json())
.then(() => {
  mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
})
}

export const Chats = () => {
const completedChats = getCompletedChats()

let html = '<ul>'
const chatConversion = completedChats.map((chat => {
  return ` 
  <li>
  ${chat.username}:
  ${chat.chatSubmission} 
  <button class="request__delete"
  id="deleteChat--${chat.id}">
  &#128465
  </button>
  </li>
  `
}
))
html += chatConversion.join("") //joining ll request objects together
html+= '</ul>'
return html
}

export const deleteMessage = (id) => {
return fetch(`${API}/chats/${id}`, { method: "DELETE" })
.then(
  () => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
  }
  )
}
