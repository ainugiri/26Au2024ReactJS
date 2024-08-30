import React, { useState } from 'react';

function TaskList(){
    const [tasks, setTasks] = useState('');
    const [TaskList, setTaskList] = useState([]);

    const handleInputChange = (e) => {
        setTasks(e.target.value);
    };

    const handleAddTask = () => {
        if(tasks !== ''){
            setTaskList([...TaskList, tasks]);
            setTasks('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTaskList = TaskList.filter((_,i) => i !== index);
        setTaskList(updatedTaskList);
    };
    return(
        <div>
            <input type="text" value={tasks} onChange={handleInputChange}  placeholder="Enter Task" />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {TaskList.map((task, index) => (
                    <li key={index}>{task} <button
                    onClick={() => handleDeleteTask(index)}>Delete</button></li>
                ))}
            </ul>   
        </div>
    )
}

export default TaskList;