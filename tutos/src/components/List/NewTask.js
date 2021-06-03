import { useState } from 'react';

const NewTask = ({ addNewTask }) => {
  const [text, setText] = useState('');

  return (
    <>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => addNewTask(text)}>New task</button>
    </>
  );
};

export { NewTask };

