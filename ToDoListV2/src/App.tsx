import { useState } from "react";
import "./App.css";
import IndividualTask from "./Components/IndividualTask";

function App() {
  var [editTask, editButtonClicked] = useState(false);
  var [deleteTask, deleteButtonClicked] = useState(false);

  var taskList: string[] = ["item1", "item2", "item3"];

  return (
    <>
      <h2>To Do or not To Do List</h2>
      <button type="button" className="button-padding">
        Add new task
      </button>
      {taskList.map((task, index) => (
        <IndividualTask
          onDeleteTask={() => deleteButtonClicked(true)}
          text={task}
          key={index}
        ></IndividualTask>
      ))}
    </>
  );
}

export default App;
