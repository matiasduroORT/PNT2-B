
import './App.css'
import { Tarea } from './components/Tarea'
import { Boton } from './components/Boton'
import { useState } from 'react'

function App() {

  const tareaModel = {
    id: 1,
    text: 'Tarea 1',
    completado: false
  }

  const [tareas, setTareas] = useState([tareaModel])
  

  const sinCompletar = tareas.filter( tarea => !tarea.completado).length

  return (
    <>
     <div className='container center'>
      <h1 className='center title'>TODO App</h1>
        <div className='flow-right controls'>
          <span>Cantidad de tareas:{tareas.length}</span>
          <span>Sin Completar: <span id='unchecked-count'>{sinCompletar}</span></span>
        </div>
     <Tarea tareas={tareas} setTareas={setTareas} />
     <Boton tareas={tareas} setTareas={setTareas} />
     </div>
    </>
  )
}

export default App
