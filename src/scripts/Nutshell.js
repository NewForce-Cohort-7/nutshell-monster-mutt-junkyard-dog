import { articleForm, articleList } from "./articles.js"
import { breweryForm, breweryList } from "./breweries.js"

export const Nutshell = () => {
      return `
      <div class="title-container">
      <h2 class="articleHead">Articles</h2>
      </div>
      ${articleForm()}
      ${articleList()}
      <div class="brew">
      <h2 class="brewHead">Breweries</h2>
      <div class="brewery-form">
      ${breweryForm()}
      </div>
      <div class="brewery-list">
      ${breweryList()}
      </div>
            </div>
      
      `
}

