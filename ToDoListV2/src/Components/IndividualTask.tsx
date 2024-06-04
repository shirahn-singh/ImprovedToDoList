import { useState } from "react";

interface TaskProp {
  onDeleteTask: () => void;
}

const IndividualTask = ({ onDeleteTask }: TaskProp) => {
  const [editPressed, setEdit] = useState(false);
  const [originalTask, setOriginalTask] = useState('Temporary value to change');
  const [newTask, setNewTask] = useState(originalTask);

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSaveClick = () => {
    setEdit(false);
    setOriginalTask(newTask);
  };

  const handleCancelClick = () => {
    setEdit(false);
    setNewTask(originalTask); // Reset to original task value
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        {editPressed ? (
          <input type="text" value={newTask} onChange={handleInputChange} />
        ) : (
          originalTask
        )}
        <span>
          <button
            type="button"
            onClick={editPressed ? handleSaveClick : handleEditClick}
          >
            {editPressed ? "Save" : "Edit"}
          </button>
          {editPressed ? (
            <button type="button" onClick={handleCancelClick}>
              Cancel
            </button>
          ) : null}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={onDeleteTask}
          >
            Delete
          </button>
        </span>
      </div>
    </>
  );
};

export default IndividualTask;
