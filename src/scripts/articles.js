import { getArticles, deleteArticle, saveArticle } from "./dataAccess.js";

const mainContainer = document.querySelector("#dashboard")


export const articleList = () => {
  const articles = getArticles();
  return `
  <div class="articleList">
    ${articles.map(article => {
      return `
        <div class="article-container" id="${article.id}">
          <div class="article-title">${article.title}</div>
          <div class="article-synopsis">${article.synopsis}</div>
          <div class="article-url">${article.url}</div>
          <div class="article-tags">
            ${article.tags.map(tag => {
              return `<button class="article-tag-button" data-tag="${tag}">${tag}</button>`;
            }).join("")}
          </div>
          <button class="article-delete-button" id="delete-article--${article.id}" value="${article.id}">Delete</button>
        </div>
      `;
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
          
          <label class="label" for="article-tags">Tags</label>
          <input type="text" id="new-article-tags" class="input"/> 
          
          <label class="label" for="article-synopsis">Synopsis</label>
          <input type="text" id="new-article-synopsis" class="input"/>
          
          <label class="label" for="article-url">URL</label>
          <input type="text" id="new-article-url" class="input"/>
          

          <button class="button" id="createArticle">Save Article</button>
        </div>
      `;
      return html;
    };
    

    
    mainContainer.addEventListener("click", clickEvent => {
      if(clickEvent.target.id.startsWith("delete-article--")){
        deleteArticle(parseInt(clickEvent.target.value))
      }
    })
      
    

mainContainer.addEventListener("click", clickEvent => {
  if (clickEvent.target.classList.contains("article-create-button")) {
    const articleForm = document.querySelector(".article-form");
    articleForm.classList.toggle("hidden");
    if (articleForm.classList.contains("hidden")) {
      clickEvent.target.textContent = "Create New Article";
    } else {
      clickEvent.target.textContent = "Cancel";
    }
  } else if (clickEvent.target.id === "createArticle") {
    
    const articleTitle = document.querySelector("input[id='new-article-title']").value;
    const articleSynopsis = document.querySelector("input[id='new-article-synopsis']").value;
    const articleUrl = document.querySelector("input[id='new-article-url']").value;
    const articleTags = document.querySelector("input[id='new-article-tags']").value.split(",").map(tag => tag.trim());

if (!articleTitle || !articleSynopsis || !articleUrl) {
  window.alert(`Enter all fields before saving`);
  return;

} else {
  const dataToSendToAPI = {
    title: articleTitle,
    synopsis: articleSynopsis,
    url: articleUrl,
    tags: articleTags
  };

      saveArticle(dataToSendToAPI);
      const articleForm = document.querySelector(".article-form");
      articleForm.classList.add("hidden");
      document.querySelector(".article-create-button").textContent = "Create New Article";
    }
  }
});
