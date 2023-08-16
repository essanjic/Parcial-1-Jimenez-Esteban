/* eslint-disable react/prop-types */


function Card(props){
  return (
    <div className='card'>
      <h2>Nombre: {props.nombre}</h2>
      <h2>Edad: {props.edad}</h2>
      <h2>Email: {props.email}</h2>
    </div>
  )
}
export default Card
  
