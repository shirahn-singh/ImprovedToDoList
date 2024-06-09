import { useState } from "react";
import "../Styling/IndividualTask.css";
import Button from "./Button";

interface TaskProp {
  onDeleteTask: () => void;
  text: string;
}

const IndividualTask = ({ text, onDeleteTask }: TaskProp) => {
  const [editPressed, setEdit] = useState(false);
  const [originalTask, setOriginalTask] = useState(text);
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
            className="input-task-box font-weight-bold"
            value={newTask}
            onChange={handleInputChange}
          />
        ) : (
          originalTask
        )}
        <span>
        <Button  text={editPressed ? "Save" : "Edit"}
         onButtonTask={editPressed ? handleSaveClick: handleEditClick} >
        </Button>

          {editPressed ? (
            <button
              type="button"
              className="button-padding"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          ) : null}
          <Button text="Delete" onButtonTask={onDeleteTask}>
          </Button>
        </span>
      </div>
    </>
  );
};

export default IndividualTask;
