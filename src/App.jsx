import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)
  console.log(setPuppies)


  return (
    <div>
      
    </div>
  )
}

export default App
