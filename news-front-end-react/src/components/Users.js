import { useState, useEffect } from 'react'
import axios from 'axios'                                // npm i axios for this to function
import 'bootstrap/dist/css/bootstrap.min.css'            // npm i react-bootstrap@next bootstrap@5.0.2 for Bootstrap to work
import Button from 'react-bootstrap/Button'              // imports Bootstrap button features
import '../style.css'                                    // import remaining style rules

const Users = (props) => {

  // State Hooks
  const [user, setUser] = useState({})                   // hook for user creation
  const [username, setUserName] = useState('')           // hook for username creation
  const [password, setUserPassword] = useState('')       // hook for password creation

  // Use Effect
  useEffect( () => {
    axios
    .get('http://localhost:3000/users')
    // .get('https://desolate-hollows-backend.herokuapp.com/users')
    .then((response) => {
      setUser(response.data)
    })
  })

  // Handlers
  const handleNewUsername = e => {
    setUserName(e.target.value)
  }

  const handleNewUserPW = e => {
    setUserPassword(e.target.value)
  }

  const handleOpenUserModal = e => {
    let modal = document.getElementById("new-user-modal")
    modal.style.display = "block"
  }

  const handleCloseUserModal = e => {
    let modal = document.getElementById("new-user-modal")
    modal.style.display = "none"
  }

  const handleNewUserSubmit = e => {
    e.preventDefault()
    axios.post(
      'http://localhost:3000/users',
      // 'https://desolate-hollows-backend.herokuapp.com/users',
      {
        username: username,
        password: password,
      }
    ).then( () => {
      axios
      .get('http://localhost:3000/users')
      // .get('https://desolate-hollows-backend.herokuapp.com/users')
      .then((response) => {
        setUser(response.data)
        document.getElementById("add-user").reset()
        document.getElementById("new-user-modal").style.display="none"
      })
    })
  }

  return(
    <div id="user-container">
      <button id="new-user" class="btn btn-secondary" onClick={handleOpenUserModal}>CREATE USER</button>
      <div id="new-user-modal" class="modal">
        <section class="add">
          <h2>ADD NEW USER:</h2>
          <button class="btn btn-danger" onClick={handleCloseUserModal}>CLOSE</button>
          <form id="add-user" onSubmit={handleNewUserSubmit}>
            <div class="form-details">
            Username: <input name="username" type="text" onChange={handleNewUsername}/><br />
            Password: <input name="password" type="password" onChange={handleNewUserPW}/><br />
            </div>
            <input class="btn btn-success" type="submit" value="SUBMIT NEW USER"/>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Users
