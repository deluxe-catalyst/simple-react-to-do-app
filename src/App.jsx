import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import Column from './components/Column/Column'
import columnsData from './assets/columns'
import tasksData from './assets/tasks' 

import './App.css'

function App() {

  const [columns, setColumns] = useState(columnsData)
  const [tasks, setTasks] = useState(tasksData)

  const [handleColumnId, setColumnId] = useState(undefined);
  const [handleTaskId, setTaskId] = useState(undefined);
   
  function updColumnId(columnId){
    setColumnId(columnId);
  }

  function updTaskId(taskId){
    setTaskId(taskId);
  }

  
  useEffect(() => {
    if(handleColumnId && handleTaskId){
      const newTasksArr = [...tasks]
      const handleTaskIndex = newTasksArr.findIndex(task => task.id === handleTaskId)
      newTasksArr[handleTaskIndex].columnId = handleColumnId;
      const [removedTask] = newTasksArr.splice(handleTaskIndex, 1);
      newTasksArr.push(removedTask)
      setTasks(newTasksArr)
    }

  }, [handleTaskId, handleColumnId])

  return (
    <>
          <Header/>
          <main>
            {columns.map((column) => (
              <Column
                key={column.columnId}
                columnTitle={column.columnTitle}
                columnId={column.columnId}

                tasksArr = {tasks}

                // update = {updatedTasks}

                updTaskId = {updTaskId}
                updColumnId = {updColumnId}
              />
            ))}
            
          </main>
    </>
  )
}

export default App
