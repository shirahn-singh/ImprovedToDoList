import { useState } from "react";

interface TaskProp {
  text: string;
  onDeleteTask: () => void;
}

const IndividualTask = ({ text, onDeleteTask}: TaskProp) => {
  var [editPressed, setEdit] = useState(false);
  var [task, changeTaskValue] = useState('Temporary value to change');

  const handleEditClick = () => {
    setEdit(!editPressed);
  };

  return (
    <>
    {editPressed ? <input type="text" value={task} /> : task}
     <div className="d-flex justify-content-between">
      {text}
      <span>
      <button type="button" onClick={handleEditClick}>
            {editPressed ? "Save" : "Edit"}
          </button>

          {editPressed? <button type="button" onClick={handleEditClick}>
            Cancel
          </button>: null}

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onDeleteTask}
      >Delete</button>
      </span>
    </div>
    </>
   
  );
};

export default IndividualTask;
