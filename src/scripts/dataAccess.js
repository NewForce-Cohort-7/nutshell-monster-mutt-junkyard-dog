const applicationState = {
  articles: []
}
const API = "http://localhost:8088";

const mainContainer = document.querySelector("#dashboard")


export const fetchRequests = () => {
  return fetch(`${API}/articles`)
    .then((response) => response.json())
    .then((articles) => {
      applicationState.articles = articles;
    });
};

// export const getArticles = () => {
//   return applicationState.articles.map(article => ({ ...article }))
// }

export const getArticles = () => {
  return fetch(`${API}/articles`)
    .then(response => response.json())
    .then(articles => {
      return articles.map(article => {
        return {
          ...article,
          tags: article.tags.split(",") // split the comma-separated tags string into an array
        }
      })
    })
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
  if (typeof article.tags === "string") {
    article.tags = article.tags.split(",").map(tag => tag.trim());
  }
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

// export const saveArticle = (article) => {
//   const fetchOptions = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(article)
//   }
//     return fetch(`${API}/articles`, fetchOptions)
//     .then(response => response.json())
//     .then(() => {
//       mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//     })

// }
