import React, { useState } from 'react';
import { NewTask } from './NewTask';

const List = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = task => setTasks([...tasks, task]);

  return (
    <div>
      List
      <NewTask addNewTask={addNewTask} />
      {tasks.map((task, index) => (
        <div key={task + index}>
          {task}
        </div>
      ))}
    </div>
  );
};

export { List };
