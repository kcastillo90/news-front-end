import { useState, useEffect } from 'react'
import axios from 'axios'

import Posts from './components/Posts'
import Users from './components/Users'
import Session from './components/Sessions'

const App = () => {

  // Component declarations
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  let [posts, getPosts] = useState('')
  let [users, getUsers] = useState('')
  let [session, getSession] = useState('')

  return(
    <div class="container">
      <h1 id="page-title">DISCUSS</h1>

      <div id="user-session-btns">
        <Users users={users}/>

        <Session session={session}/>
      </div>

      <Posts posts={posts}/>

    </div>

  )
}

export default App
