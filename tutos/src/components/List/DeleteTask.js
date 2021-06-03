const DeleteTask = ({ onDelete, taskName }) => (
  <div onClick={() => onDelete(taskName)}>
    &times;
  </div>
);

export { DeleteTask };
