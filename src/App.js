import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

import './App.css';

function App() {
  const [tasks, setTasks ] = useState(
    [{
        id: 1,
        text: 'Doctors Appointment',
        day: '2 Feb 2021 10:00 am',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: '30 March 2021 10:00 am',
        reminder: true 
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: '23 Feb 2021 10:00 am',
        reminder: false
    }]
)

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
