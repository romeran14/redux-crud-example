import { useSelector } from 'react-redux'
import './App.css'
import TaskForms from './components/TaskForms'
import TaskLists from './components/taskLists'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'


function App() {
 
 const taskState = useSelector((state) => state.tasks)
console.log(taskState)
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskLists></TaskLists>}/>
        <Route path='/create-task' element={<TaskForms></TaskForms>}/>
        <Route path='/edit-task/:id' element={<TaskForms></TaskForms>}/>
      </Routes>
      </BrowserRouter>
      </div>

    </div>
  )
}

export default App
