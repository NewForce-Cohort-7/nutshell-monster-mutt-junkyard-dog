import { articleForm, articleList } from "./articles.js"
import { breweryForm, breweryList } from "./breweries.js"

export const Nutshell = () => {
      return `
      <div class="title-container">
      <h1 class="articleHead">Articles</h1>
      </div>
      ${articleForm()}
      ${articleList()}
      <div class="brew">
      ${breweryForm()}
      ${breweryList()}
            </div>
      
      `
}

