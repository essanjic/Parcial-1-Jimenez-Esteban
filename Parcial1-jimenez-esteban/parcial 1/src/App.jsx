import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'
import { useState } from 'react'

function App() {
  const [persona, setPersona] = useState({})

  const guardarPersona = (nombre, edad, email) => {
    setPersona({ nombre, edad, email})
  }
  return (
    <>
      <Form guardarPersona={guardarPersona} />
      {Object.keys(persona).length === 0 ? undefined : (
        <Card nombre={persona.nombre} 
        edad={persona.edad}
        email={persona.email} />
      )}
    </>
  )
}

export default App