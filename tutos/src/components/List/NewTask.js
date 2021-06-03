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
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTask}>New task</button>
    </>
  );
};

export { NewTask };

