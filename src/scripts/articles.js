import { getArticles, deleteArticle, saveArticle } from "./chatDataAccess.js";

const articlesContainer = document.querySelector("#articlesContainer")


export const articleList = () => {
  const articles = getArticles();
  return `
  <div class="articleList">
  ${articles.map(article => {
    return `
    <div id="new-article-form"></div>
    <div class="article-container" id="${article.id}">
    <div class="article-title">${article.title}</div>
        <div class="article-synopsis">${article.synopsis}</div>
        <div class="article-url">${article.url}</div>
        <button class="article-delete-button" id="delete-article--${article.id}" value="${article.id}">Delete</button>
        </div>
        `
      }).join("")}
      </div>
      `;
      
    };
    
    export const articleForm = () => {
      let html = `
        <button class="article-create-button">Create New Article</button>
        <div class="article-form hidden">
          <label class="label" for="article-title">Article</label>
          <input type="text" id="new-article-title" class="input"/>
          
          <label class="label" for="article-synopsis">Synopsis</label>
          <input type="text" id="new-article-synopsis" class="input"/>
          
          <label class="label" for="article-url">URL</label>
          <input type="text" id="new-article-url" class="input"/>
          
          <button class="button" id="createArticle">Save Article</button>
        </div>
      `;
      return html;
    };
    

    
    articlesContainer.addEventListener("click", clickEvent => {
      if(clickEvent.target.id.startsWith("delete-article--")){
        deleteArticle(parseInt(clickEvent.target.value))
      }
    })
      
    
//     dashboard.addEventListener("click", clickEvent => {
//       if (clickEvent.target.id === "createNewEvent") {
//         document.querySelector("#new-article-form").innerHTML = articleForm()
//       }
//     })
    
articlesContainer.addEventListener("click", clickEvent => {
  if (clickEvent.target.classList.contains("article-create-button")) {
    const articleForm = document.querySelector(".article-form");
    articleForm.classList.toggle("hidden");
    if (articleForm.classList.contains("hidden")) {
      clickEvent.target.textContent = "Create New Article";
    } else {
      clickEvent.target.textContent = "Cancel";
    }
  } else if (clickEvent.target.id === "createArticle") {
    // save the article and close the form
    const articleTitle = document.querySelector("input[id='new-article-title']").value;
    const articleSynopsis = document.querySelector("input[id='new-article-synopsis']").value;
    const articleUrl = document.querySelector("input[id='new-article-url']").value;
    if (!articleTitle || !articleSynopsis || !articleUrl) {
      window.alert(`Enter an article title, synopsis and URL before saving`);
      return;
    } else {
      const dataToSendToAPI = {
        title: articleTitle,
        synopsis: articleSynopsis,
        url: articleUrl
      };
      saveArticle(dataToSendToAPI);
      const articleForm = document.querySelector(".article-form");
      articleForm.classList.add("hidden");
      document.querySelector(".article-create-button").textContent = "Create New Article";
    }
  }
});


// dashboard.addEventListener("click", clickEvent => {
//   if (clickEvent.target.id === "createArticle") {
//     clickEvent.preventDefault();
//     const articleTitle = document.querySelector("input[id='new-article-title']").value
//     const articleSynopsis = document.querySelector("input[id='new-article-synopsis']").value
//     const articleUrl = document.querySelector("input[id='new-article-url']").value

//     if(!articleTitle || !articleSynopsis || !articleUrl){
//       window.alert(`Enter an article title, synopsis and URL before saving`)
//       return
//     }
//     else {const dataToSendToAPI = {
//       title: articleTitle,
//       synopsis: articleSynopsis,
//       url: articleUrl
//     }
//       saveArticle(dataToSendToAPI)
//   }
//   }
// })