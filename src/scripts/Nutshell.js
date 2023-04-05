import { articleForm, articleList } from "./articles.js"
import { BreweryForm, breweryList } from "./breweries.js"
import { Navbar } from "./navBar.js"
export const Nutshell = () => {
      return `
      
      <div class="title-container">
      <div class="navbar">${Navbar()}</div>
      <br>
      <h2 class="articleHead" id="navArticles">Articles!</h2>
      </div>
      ${articleForm()}
      ${articleList()}
      <div class="brew">
      <h2 class="brewHead" id="navBrews">Breweries!</h2>
      ${BreweryForm()}
      ${breweryList()}
            </div>
      
      `
}

