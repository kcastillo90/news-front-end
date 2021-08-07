import { useState, useEffect } from 'react'
import axios from 'axios'                                // npm i axios for this to function
import 'bootstrap/dist/css/bootstrap.min.css'            // npm i react-bootstrap@next bootstrap@5.0.2 for Bootstrap to work
import Button from 'react-bootstrap/Button'              // imports Bootstrap button features
import '../style.css'                                    // import remaining style rules

const Posts = (props) => {

  // State Hooks
  const [post, setPost] = useState([])                   // hook for actual post
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
      setPost(response.data)
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
          setPost(response.data)
          document.getElementById("add-post").reset()
        })
    })
  }

  const handleUpdatePost = postData => {
    axios
    put(
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
          setPost(response.data)
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
            setPost(response.data)
          })
      })
  }

  // Output
  return(

    <h1>Hello World!</h1>

  )

}

export default Posts
