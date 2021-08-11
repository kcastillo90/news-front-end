import { useState, useEffect } from 'react'
import axios from 'axios'                                // npm i axios for this to function
import 'bootstrap/dist/css/bootstrap.min.css'            // npm i react-bootstrap@next bootstrap@5.0.2 for Bootstrap to work
import Button from 'react-bootstrap/Button'              // imports Bootstrap button features
import '../style.css'                                    // import remaining style rules

const bcrypt = require('bcryptjs')


const Sessions = (props) => {

  // State Hooks
  const [username, setUsername] = useState('')
  const [password, setPassword] =useState('')
  const [isAuthenticated, userHasAuthenticated] = useState(false)

  // Handlers
  const setUserAuthenticated = e => {
    userHasAuthenticated(true)
  }

  const handleSetUser = e => {
    setUsername(e.target.value)
  }

  const handleSetPW = e => {
    setPassword(e.target.value)
  }

  const handleOpenLoginModal = e => {
    let modal = document.getElementById("new-session-modal")
    modal.style.display = "block"
  }

  const handleCloseLoginModal = e => {
    let modal = document.getElementById("new-session-modal")
    modal.style.display = "none"
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.get(
      'http://localhost:3000/users',
    ).then((resonse) => {
      username.findOne({username: username}, (err, foundUser) => {
        if (err) {
          console.log(err)
        } else if (!foundUser) {
          console.log('Sorry no user found')
        } else {
          console.log(foundUser)
          if (bcrypt.compareSync(password, foundUser.password)) {
            setUserAuthenticated()
          } else {
            console.log('Passwords do not match')
          }
        }
      })
    })
  }

  return(
    <div id="user-container">
      <button id="new-session" class="btn btn-primary" onClick={handleOpenLoginModal}>SIGN IN</button>
      <div id="new-session-modal" class="modal">
        <section class="add">
          <h2>SIGN IN:</h2>
          <button class="btn btn-danger" onClick={handleCloseLoginModal}>CLOSE</button>
          <form id="add-user" onSubmit={handleSubmit}>
            <div class="form-details">
            Username: <input name="username" type="text" onChange={handleSetUser}/><br />
            Password: <input name="password" type="password" onChange={handleSetPW}/><br />
            </div>
            <input class="btn btn-success" type="submit" value="SUBMIT"/>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Sessions
