import './style.css';
import { useState } from 'react';

const NewTask = ({ addNewTask }) => {
  const [text, setText] = useState('');

  const addTask = () => {
    if (text) {
      addNewTask(text);
      setText('');
    }
  };

  return (
    <>
      <input className="text" type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Task Name" />
      <button className="button" onClick={addTask}>New task</button>
    </>
  );
};

export { NewTask };

