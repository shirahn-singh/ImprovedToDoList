import { useState } from "react";
import "./App.css";
import IndividualTask from "./Components/IndividualTask";

function App() {

  var [editTask, editButtonClicked] = useState(false);
  var [deleteTask, deleteButtonClicked] = useState(false);

  return (
    <>  
    <IndividualTask
        text="Hello There"
        onDeleteTask={() => deleteButtonClicked(true)}
      ></IndividualTask>
    </>
  );
}

export default App;
