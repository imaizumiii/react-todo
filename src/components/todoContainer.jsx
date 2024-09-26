import { useState } from "react";

const TodoContainer = () => {

  const [newTask, setNewTask] = useState("");
  const [tasks,setTasks] = useState([]);
  // const tasks = ["task1","task2"];
  const addTask = () => {
    if(newTask.trim()){
      setTasks([...tasks,newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (indexToRemove) => {
    setTasks(tasks.filter((task,index) => index !== indexToRemove));
  };

  return (
    <>
      <div className="todo-container">
        <h1>My ToDo List</h1>
        <div className="todo-input-container">
          <input
            type="text"
            id="new-todo"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button id="add-todo-btn" onClick={addTask}>Add</button>
        </div>
        <ul className="todo-list">
          {tasks.map((task,index) => (
            <li className="todo-item" key={index}>
              <span>{task}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoContainer;
