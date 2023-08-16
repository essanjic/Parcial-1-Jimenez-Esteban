import { useState } from 'react'
import './styles.modules.css'

 function Form(props) {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState(0)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')

  const onChangeNombre = e => {
    setNombre(e.target.value)
  }

  const onChangeEdad = e => {
    setEdad(e.target.value)
  }

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }  

  const handleSubmit = e => {
    e.preventDefault()

    if (nombre.trim() && email.length < 6) {
      setError('Por favor chequea que la información sea correcta')
    } else if (edad < 0 || edad > 120) {
        setError('La edad es incorrecta, por favor ingrese una edad válida')
    } else if (nombre[0] === ' ') {
      setError('El nombre no debe iniciar con un espacio en blanco')
    }else if (nombre.length < 3) {
      setError('El nombre debe tener al menos 3 caracteres')
    
    } else {
      setError('')  
      props.guardarPersona(nombre, edad, email)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor='nombre-apellido'>Nombre</label>
      <input
        type='text'
        id='nombre-apellido'
        value={nombre}
        placeholder='Ingrese su nombre'
        onChange={onChangeNombre}
      />

      <label htmlFor='edad'>Edad</label>
      <input
        type='number'
        id='edad'
        placeholder='Ingrese su edad'
        onChange={onChangeEdad}
      />
      <label htmlFor='email'>Mail</label>
      <input
        type='email'
        id='email'
        value={email}
        placeholder='Ingrese su correo electrónico'
        onChange={onChangeEmail}
      />
      <button>Enviar  📁</button>
      {error && <p>{error}</p>}
    </form>
  )
}
export default Form