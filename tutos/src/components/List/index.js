import React, { useState } from 'react';
import './style.css';
import { NewTask } from './NewTask';
import { DeleteTask } from './DeleteTask';

const List = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = task => setTasks([...tasks, task]);
  const deleteTask = taskToDelete => setTasks(tasks.filter(task => taskToDelete !== task));

  return (
    <div>
      <NewTask addNewTask={addNewTask} />
      <div className="list">
        {tasks.map((task, index) => (
          <div className="task" key={task + index}>
            {task}
            <DeleteTask onDelete={deleteTask} taskName={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { List };
