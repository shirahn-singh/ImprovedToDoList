import { useState } from "react";
import "./App.css";
import IndividualTask from "./Components/IndividualTask";
import Button from "./Components/Button";

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

  const handleDeleteTask = (index: number) => {
    setTaskList(taskList.filter((_, i) => i !== index))
  }

  return (
    <>
      <h2>To Do or not To Do List</h2>
      <input
            type="text"
            value={addTask}
            className="input-task-box font-weight-bold"
            onChange={handleAddItem}
          />
      
      <Button text="Add new task" onButtonTask={AddTaskToList}>
      </Button>

      {taskList.map((task, index) => (
        <IndividualTask
          onDeleteTask={() => handleDeleteTask(index)}
          text={task}
          key={index}
        ></IndividualTask>
      ))}
    </>
  );
}

export default App;
