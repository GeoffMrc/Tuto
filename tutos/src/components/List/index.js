import React, { useState } from 'react';
import { NewTask } from './NewTask';

const List = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (task) => {
    console.log(`List: adding new task: ${task}`);
  };

  return (
    <div>
      List
      <NewTask addNewTask={addNewTask} />
    </div>
  );
};

export { List };
