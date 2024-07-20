import { useRef, useState } from 'react'
import './App.css'
import DropBox from './components/DropBox'
import Header from './components/Header'

function App() {
  const headerRef = useRef(null)
  const [highlight, setHighlight] = useState(false);


  return (
    <>
      <Header headerRef={headerRef} highlight={highlight} setHighlight={setHighlight} />
      <DropBox headerRef={headerRef} setHighlight={setHighlight}/>
    </>
  )
}

export default App
