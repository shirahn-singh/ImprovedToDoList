import { useState } from "react";
import "./App.css";
import IndividualTask from "./Components/IndividualTask";

function App() {

 



  var initialList = ["item1", "item2", "item3"];
  var [editTask, editButtonClicked] = useState(false);
  var [deleteTask, deleteButtonClicked] = useState(false);
  var [addTask, updateNewTask] = useState('');
  var [taskList, setTaskList] = useState<string[]>(initialList);

  const AddTaskToList = () => {
    if (addTask) { 
      setTaskList([...taskList, addTask]);
      updateNewTask(''); 
   }
   else{
      alert("Enter a task to add. ")
   }
  };
  
  const handleAddItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNewTask(e.target.value);
  };

  return (
    <>
      <h2>To Do or not To Do List</h2>
      <input
            type="text"
            value={addTask}
            className="input-task-box font-weight-bold"
            onChange={handleAddItem}
          />
      <button type="button" className="button-padding" onClick = {AddTaskToList} >
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
