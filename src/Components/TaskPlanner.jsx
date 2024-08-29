import React, { useState } from 'react';    

function TaskPlanner() {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskName) => {
        setTasks((prevTasks) => [...prevTasks, {id: Math.random().toString(), name: taskName}]);
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        };
  return (
    <div>
        <h1>Task Planner</h1> 
        <TaskForm onAddTask={addTask}/>
        <TaskList task={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

function TaskForm({onAddTask}) {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted');
        if(taskName === ''){
            alert('Task Name is required');
            return;
        }
        if(taskName.trim() !==''){
            onAddTask(taskName);
            setTaskName('');            
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder = "Tesk Description" value={taskName} onChange={(e) => setTaskName(e.target.value)} /> <br />
            <button type="submit">Add Task</button>
        </form>     
    </div>
  );
}

function TaskList({tasks, onDeleteTask}) {
  return (
    <div>
        <ul>
        {tasks.map((task) => (
            <li key={task.id}>
                {task.name}
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </li>   
        ))}
        </ul>
    </div>
  );
}



export default TaskPlanner;