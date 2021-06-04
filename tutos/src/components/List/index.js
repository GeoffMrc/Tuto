import React, { useEffect, useState } from 'react';
import './style.css';
import { NewTask } from './NewTask';
import { DeleteTask } from './DeleteTask';
import DoneButton from './NewTask/DoneButton';

const List = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const addNewTask = task => setTasks([...tasks, task]);
  const deleteTask = taskToDelete => setTasks(tasks.filter(task => taskToDelete !== task));

  const save = () => localStorage.setItem('tasks', JSON.stringify(tasks));

  useEffect(save, [tasks]);

  return (
    <div>
      <NewTask addNewTask={addNewTask} />
      <div className="list">
        {tasks.map((task, index) => (
          <div className="task" key={task + index}>
            {task}
            <DoneButton />
            <DeleteTask onDelete={deleteTask} taskName={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { List };
