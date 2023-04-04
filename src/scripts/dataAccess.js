const applicationState = {
    articles: [],
    chats: [], 
    // usernames: [],
  }
  const API = "http://localhost:8088";
  
  const mainContainer = document.querySelector("#dashboard")

  // My stuff  --------------------------------------

export const fetchCompletedChats = () => {
    return fetch(`${API}/chats`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.chats = data
            }
        )
}
// ------------------------------------------------------
  
  
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

