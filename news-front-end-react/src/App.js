import { useState, useEffect } from 'react'
import axios from 'axios'

import Articles from './components/Articles'

const App = () => {

  // Component declarations
  let [articles, getArticles] = useState('')

  return(
    <div class="container">

      <Articles articles={articles}/>

    </div>

  )
}

export default App
