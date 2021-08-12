import { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './components/Posts'
import Navbar from './components/nav-bar'

const App = () => {

  // Component declarations
  let [posts, getPosts] = useState('')
  let [navbar, getNavbar] = useState('')


  return(
      <div class="container">
        <h1 id="page-title">NEWS POST</h1>
        <h3 id="tagline">Post your favorite news here!</h3>
        <Navbar navbar={navbar}/>
        <Posts posts={posts}/>
      </div>
    )
}

export default App
