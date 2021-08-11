import { useState, useEffect } from 'react'
import axios from 'axios'                                // npm i axios for this to function
import 'bootstrap/dist/css/bootstrap.min.css'            // npm i react-bootstrap@next bootstrap@5.0.2 for Bootstrap to work
import Button from 'react-bootstrap/Button'              // imports Bootstrap button features
import '../style.css'                                    // import remaining style rules

const Posts = (props) => {

  // State Hooks
  const [user, setUser] = useState({})                   // hook for user creation
  const [username, setUserName] = useState('')           // hook for username creation
  const [password, setUserPassword] = useState('')       // hook for password creation
  // session hook goes here
  const [posts, setPosts] = useState([])                 // hook for actual post
  const [link, setLink] = useState('')                   // hook for URL to article
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')                   // date of article publication, not post
  const [topics, setTopics] = useState('')
  const [image, setImage] = useState('')                 // URL for relevant article image

  // useEffect
  useEffect( () => {
    axios
    // .get('http://localhost:3000/')
    .get('https://desolate-hollows-backend.herokuapp.com/')
    .then((response) => {
      setPosts(response.data)
    })
  })

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

  const handleNewLink = e => {
    setLink(e.target.value)
  }

  const handleNewTitle = e => {
    setTitle(e.target.value)
  }

  const handleNewAuthor = e => {
    setAuthor(e.target.value)
  }

  const handleNewDate = e => {
    setDate(e.target.value)
  }

  const handleNewTopics = e => {
    setTopics(e.target.value)
  }

  const handleNewImage = e => {
    setImage(e.target.value)
  }

  const handleUpdateLink = e => {
    setLink(e.target.value)
  }

  const handleUpdateTitle = e => {
    setTitle(e.target.value)
  }

  const handleUpdateAuthor = e => {
    setAuthor(e.target.value)
  }

  const handleUpdateDate = e => {
    setDate(e.target.value)
  }

  const handleUpdateTopics = e => {
    setTopics(e.target.value)
  }

  const handleUpdateImage = e => {
    setImage(e.target.value)
  }

  const handleOpenModal = e => {
    let modal = document.getElementById("new-post-modal")
    modal.style.display = "block"
  }

  const handleClosePostModal = e => {
    let modal = document.getElementById("new-post-modal")
    modal.style.display = "none"
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

  const handleNewPostSubmit = e => {
    e.preventDefault()
    axios.post(
      // 'http://localhost:3000',
      'https://desolate-hollows-backend.herokuapp.com/',
      {
        link: link,
        title: title,
        author: author,
        date: date,
        topics: topics,
        image: image,
      }
    ).then( () => {
      axios
        // .get('http://localhost:3000')
        .get('https://desolate-hollows-backend.herokuapp.com/')
        .then((response) => {
          setPosts(response.data)
          document.getElementById("add-post").reset()
          document.getElementById("new-post-modal").style.display="none"
        })
    })
  }

  const handleUpdatePost = postData => {
    axios
    .put(
      // `http://localhost:3000/${postData._id}`,
      `https://desolate-hollows-backend.herokuapp.com/${postData._id}`,
      {
        link: link,
        title: title,
        author: author,
        date: date,
        topics: topics,
        image: image,
      }
    ).then( () => {
      axios
        // .get('http://localhost:3000')
        .get('https://desolate-hollows-backend.herokuapp.com/')
        .then((response) => {
          setPosts(response.data)
          document.getElementById('edit-post').reset()
        })
    })
  }

  const handleDelete = postData => {
    axios
      // .delete(`http://localhost:3000/${postData._id}`)
      .delete(`https://desolate-hollows-backend.herokuapp.com/${postData._id}`)
      .then( () => {
        axios
          // .get('http://localhost:3000')
          .get('https://desolate-hollows-backend.herokuapp.com/')
          .then((response) => {
            setPosts(response.data)
          })
      })
  }

  // Output
  return(
    <main id="main-container">
      <h1 id="page-title">DISCUSS</h1>
      <button id="new-post" class="btn btn-primary" onClick={handleOpenModal}>NEW POST</button>
      <div id="new-post-modal" class="modal">
        <section class="add">
          <h2>ADD NEW POST:</h2>
          <button class="btn btn-danger" onClick={handleClosePostModal}>CLOSE</button>
          <form id="add-post" onSubmit={handleNewPostSubmit}>
            <div class="form-details">
            Title: <input name="title" type="text" onChange={handleNewTitle}/><br />
            Link: <input name="link" type="text" onChange={handleNewLink}/><br />
            Author: <input name="author" type="text" onChange={handleNewAuthor}/><br />
            Date: <input name="date" type="text" onChange={handleNewDate}/><br />
            Image URL: <input name="image" type="text" onChange={handleNewImage}/><br />
            Topics: <input name="topics" type="text" onChange={handleNewTopics}/><br />
            </div>
            <input class="btn btn-success" type="submit" value="SUBMIT POST"/>
          </form>
        </section>
      </div>
      <button id="new-user" class="btn btn-primary" onClick={handleOpenUserModal}>NEW USER</button>
      <div id="new-user-modal" class="modal">
        <section class="add">
          <h2>ADD NEW USER:</h2>
          <button class="btn btn-danger" onClick={handleCloseUserModal}>CLOSE</button>
          <form id="add-user" onSubmit={handleNewUserSubmit}>
            <div class="form-details">
            Username: <input name="username" type="text" onChange={handleNewUsername}/><br />
            Password: <input name="password" type="text" onChange={handleNewUserPW}/><br />
            </div>
            <input class="btn btn-success" type="submit" value="SUBMIT NEW USER"/>
          </form>
        </section>
      </div>
      <section>
        <ul id="posts">
          {
            posts.map((post) => {
              return <li>
                <a href={post.link} target="_blank"><img class="article-img" src={post.image}/></a>
                <h3>{post.title}</h3>
                <details>
                  <summary>Click here for article details</summary>
                  <div id="details-and-edit">
                    <div class="post-details">
                      <h3>Author: {post.author}</h3>
                      <h3>Published: {post.date}</h3>
                      <h3>Topics Include: {post.topics}</h3>
                    </div>
                    <details>
                      <summary>Show edit form:</summary>
                      <div class="edit-container">
                        <form id="edit-post" onSubmit= { e => { handleUpdatePost(post) }}>
                          <div class="form-details">
                            Title: <input name="title" type="text" onChange={handleUpdateTitle}/><br />
                            Link: <input name="link" type="text" onChange={handleUpdateLink}/><br />
                            Author: <input name="author" type="text" onChange={handleUpdateAuthor}/><br />
                            Date: <input name="date" type="text" onChange={handleUpdateDate}/><br />
                            Image URL: <input name="image" type="text" onChange={handleUpdateImage}/><br />
                            Topics: <input name="topics" type="text" onChange={handleUpdateTopics}/><br />
                          </div>
                          <div class="submit-delete-btns">
                            <input class="btn btn-secondary" type="submit" value="SUBMIT EDITS"/>
                            <button class="btn btn-danger" onClick={ e => { handleDelete(post) }}>DELETE POST</button>
                          </div>
                        </form>
                      </div>
                    </details>
                  </div>
                </details>
              </li>
            })
          }
        </ul>
      </section>

    </main>
  )
}

export default Posts
