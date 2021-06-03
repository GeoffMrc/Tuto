import React, { useState } from 'react';
import './style.css';
import { NewTask } from './NewTask';

const List = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = task => setTasks([...tasks, task]);

  return (
    <div>
      <NewTask addNewTask={addNewTask} />
      <div className="list">
        {tasks.map((task, index) => (
          <div className="task" key={task + index}>
            {task}
            <div onClick={() => setTasks(tasks.filter(a => a !== task))}>
              &times;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { List };
