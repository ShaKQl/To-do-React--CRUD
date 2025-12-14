import { useState } from 'react'
import './App.css'
import CustomForm from './components/CustorForm'
import TaskList from './components/TaskList'
import EditForm from './components/EditForm'
function App() {
  const [tasks, setTasks] = useState([])
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (taskId) => {
    setTasks(prevState => prevState.filter((task) => task.id !== taskId))
  }

  const toggleTask = (taskId) => {
    setTasks(prevState => prevState.map(task => task.id == taskId ? { ...task, checked: !task.checked } : task))
  }
  
  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => t.id == task.id 
      ? { ...t, name: task.name } 
      : t))
    setIsEditing(false)
  }
  

  const enterEditMode = (task) => {
    setEditedTask(task);
    updateTask(task)
    setIsEditing(true)
  }

  const closeEditMode = () => {
    setIsEditing(false)
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>My Task List</h1>
        </header>
        
        {isEditing && (
          <EditForm closeEditMode={closeEditMode} updateTask={updateTask} editedTask={editedTask}></EditForm>
        )}
        <CustomForm enterEditMode={enterEditMode} addTask={addTask} ></CustomForm>
        {tasks && <TaskList updateTask={updateTask}  enterEditMode={enterEditMode}  tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />}
      </div>
    </>
  )
}

export default App
