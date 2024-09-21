import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Food/>
      <Footer/>

    </>
  )
}

export default App
