import { useState } from 'react'
import './App.css'
import Task from './components/task'
import TaskForm from './components/taskform';

const initialTasks = [
  {id: 1, name: "Task 1 description", status: 0},
  {id: 2, name: "Task 2 description", status: 0},
  {id: 3, name: "Task 3 description", status: 0},
]

const emptyTask = {id: 0, name: "", status: 0};

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState(emptyTask);
  const [completed, setCompleted] = useState(0);

  const taskList = tasks.map((task, index) => {
    return <Task handleStatus={handleStatus} del={()=>handleRemove(index)} key={task.id} task={task}></Task>
  });

  function handleStatus(task) {
    if (!task.status) {
      task.status = 1;
      setCompleted(completed+1);
    }
    else {
      task.status = 0;
      setCompleted(completed-1);
    }
  }

  function handleRemove(index) {
    if (tasks[index].status === 1) {
      setCompleted(completed-1);
    }
    setTasks(tasks.slice(0, index).concat(tasks.slice(index+1)));
  }

  function handleAddInput(e) {
    setNewTask({id: Date.now(), name: e.target.value, status: 0});
  }

  function handleAdd() {
    if (!newTask.name) return;
    setTasks([...tasks, newTask]);
    setNewTask(emptyTask);
  }

  return (
    <>
      <h2>Task list</h2>
      <a href='https://github.com/yeenathan/COMP-3170-lab4'>Github Repo</a>
      <p>You have {taskList.length-completed} tasks remaining</p>
      <TaskForm handleAddInput={handleAddInput} handleAdd={handleAdd}></TaskForm>
      <div className="task-list">
        {taskList}
      </div>
    </>
  )
}

export default App