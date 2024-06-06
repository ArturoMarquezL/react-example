import { createContext, useState, useEffect } from "react"
import { tareas as data } from '../task'

export const TaskContext = createContext()

export  function TaskContextProvider(props) {

    const [tareas, setTareas] = useState([]);

    function createTask(tarea){
        setTareas([...tareas, {
          title: tarea.title,
          id: tareas.length,
          descripcion: tarea.description
        }])
      }


      function deleteTask(taskId){
        setTareas(tareas.filter(tarea => tarea.id !== taskId))
      }

      useEffect(() => {
        setTareas(data)
      }, [])


  return (
    <TaskContext.Provider value={{
        tareas: tareas,
        deleteTask: deleteTask,
        createTask: createTask
    }}>
        {props.children}

    </TaskContext.Provider>
  )
}
