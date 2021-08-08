import { useState, useEffect } from 'react'
import axios from 'axios'                                // npm i axios for this to function
import 'bootstrap/dist/css/bootstrap.min.css'            // npm i react-bootstrap@next bootstrap@5.0.2 for Bootstrap to work
import Button from 'react-bootstrap/Button'              // imports Bootstrap button features
import '../style.css'                                    // import remaining style rules

const Posts = (props) => {

  // State Hooks
  const [posts, setPosts] = useState([])                 // hook for actual post
  const [link, setLink] = useState('')                   // hook for URL to article
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')                   // date of article publication, not post
  const [topics, setTopics] = useState('')
  const [image, setImage] = useState('')                 // URL for relevant article image
  const [showDetails, setShowDetails] = useState(false)  // hook for hiding/showing article details

  // useEffect
  useEffect( () => {
    axios
    .get('http://localhost:3000')
    .then((response) => {
      setPosts(response.data)
    })
  })

  // Handlers
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

  const handleShowDetails = e => {
    if (showDetails === false) {
      setShowDetails(true)
    } else {
      setShowDetails(false)
    }
  }

  const handleNewPostSubmit = e => {
    e.preventDefault()
    axios.post(
      'http://localhost:3000',
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
        .get('http://localhost:3000')
        .then((response) => {
          setPosts(response.data)
          document.getElementById("add-post").reset()
        })
    })
  }

  const handleUpdatePost = postData => {
    axios
    .put(
      `http://localhost:3000/${postData._id}`,
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
        .get('http://localhost:3000')
        .then((response) => {
          setPosts(response.data)
          document.getElementById('edit-post').reset()
        })
    })
  }

  const handleDelete = postData => {
    axios
      .delete(`http://localhost:3000/${postData._id}`)
      .then( () => {
        axios
          .get('http://localhost:3000')
          .then((response) => {
            setPosts(response.data)
          })
      })
  }

  // Output
  return(
    <main id="main-container">
      <h1>DISCUSS</h1>
      <section>
        <ul id="posts">
          {
            posts.map((post) => {
              return <li>
                <a href={post.link} target="_blank"><img src={post.image}/></a>
                <h3>{post.title}</h3>
                {showDetails === true ? (
                  <div id="details-and-edit">
                    <div class="post-details">
                      <h3>Author: {post.author}</h3>
                      <h3>Published: {post.date}</h3>
                      <h3>Topics Include: {post.topics}</h3>
                    </div>
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
                ) : (
                  <h5 onClick={handleShowDetails}>Click here to show details!</h5>
                )}
              </li>
            })
          }
        </ul>
      </section>
      <section id="add">
        <h2>ADD NEW POST:</h2>
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
    </main>
  )
}

export default Posts
