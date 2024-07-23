import { useRef, useState } from 'react'
import './App.css'
import DropBox from './components/DropBox'
import Header from './components/Header'

function App() {
  const headerRef = useRef(null)
  const [highlight, setHighlight] = useState(false);

  const handleSubmit = async (event, imageSrc) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('imageSrc', imageSrc.rawFile)
    console.log(imageSrc.rawFile)

    try {
      const response = await fetch('http://localhost:8080/gemini', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        console.log(response.status)
        return
      }

      const result = await response.json()
      console.log(result.message)

    } catch (error) {
      console.log(error)
    }




    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    // headerRef.current.scrollIntoView({ behavior: 'smooth' });
    // setHighlight(true)
  }


  return (
    <>
      <Header headerRef={headerRef} highlight={highlight} setHighlight={setHighlight} />
      <DropBox handleSubmit={handleSubmit} />
    </>
  )
}

export default App
