import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history"
import Posts from './components/Posts'
import Navbar from './components/nav-bar'

const App = () => {

  // Component declarations
  let [posts, getPosts] = useState('')
  let [navbar, getNavbar] = useState('')


  return(
      <div class="container">
        <h1 id="page-title">DISCUSS</h1>
        <Router>
          <Auth0ProviderWithHistory>
                <Navbar navbar={navbar}/>
          </Auth0ProviderWithHistory>
        </Router>
        <Posts posts={posts}/>
      </div>
    )
}

export default App
