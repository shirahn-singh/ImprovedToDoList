import { useState } from "react";

interface TaskProp {
  onDeleteTask: () => void;
}

const IndividualTask = ({onDeleteTask}: TaskProp) => {
  var [editPressed, setEdit] = useState(false);
  var [task, changeTaskValue] = useState('Temporary value to change');

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleCancelClick = () => {
    setEdit(false);
  };

  return (
    <>
     <div className="d-flex justify-content-between">
     {editPressed ? <input type="text" value={task} /> : task}
      <span>
      <button type="button" onClick={handleEditClick}>
            {editPressed ? "Save" : "Edit"}
          </button>

          {editPressed? <button type="button" onClick={handleCancelClick}>
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
