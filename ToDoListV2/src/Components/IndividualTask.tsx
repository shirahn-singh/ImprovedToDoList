import { useState } from "react";
import "../Styling/IndividualTask.css";

interface TaskProp {
  onDeleteTask: () => void;
}

const IndividualTask = ({ onDeleteTask }: TaskProp) => {
  const [editPressed, setEdit] = useState(false);
  const [originalTask, setOriginalTask] = useState("Temporary value to change");
  const [newTask, setNewTask] = useState(originalTask);

  const handleEditClick = () => {
    setEdit(true);
  };

  //Think of combining handleSave and handleCancel into one function.
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
          <input
            type="text"
            className="input-task-box"
            value={newTask}
            onChange={handleInputChange}
          />
        ) : (
          originalTask
        )}
        <span>
          <button
            type="button"
            onClick={editPressed ? handleSaveClick : handleEditClick}
            className="button-padding"
          >
            {editPressed ? "Save" : "Edit"}
          </button>
          {editPressed ? (
            <button
              type="button"
              className="button-padding"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          ) : null}
          <button
            type="button"
            className="btn-close button-padding"
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
