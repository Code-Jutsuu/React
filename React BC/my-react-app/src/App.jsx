import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      
      <Footer/>

    </>
  )
}

export default App
