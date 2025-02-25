import { useState } from 'react'
import './styles.css'
import Header from './components/Header'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Search />
    </>
  )
}

export default App
