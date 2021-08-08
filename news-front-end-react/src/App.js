import { useState, useEffect } from 'react'
import axios from 'axios'

import Posts from './components/Posts'

const App = () => {

  // Component declarations
  let [posts, getPosts] = useState('')

  return(
    <div class="container">

      <Posts posts={posts}/>

    </div>

  )
}

export default App
