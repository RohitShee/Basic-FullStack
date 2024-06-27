import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [jokes,setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
        setJokes(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
  })

  return (
    <>
     <h1>chai aur fullstack</h1>
     <p> JOKES: {jokes.length}</p>

     {
      jokes.map((joke) =>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
