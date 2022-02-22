import "./App.css";
import Form from "./pages/form";
import TodoList from "./pages/todoList";
import React, { useEffect, useState } from "react";

function App() {
  // storages
  const dataTask = JSON.parse(localStorage.getItem("task"));
  // input
  const [inputText, setInputText] = useState();
  // list task
  const [addTask, setAddTask] = useState(dataTask);
  // filter about completeTask
  const [completed, setCompleted] = useState("all");
  //
  const [filterTask, setFilterTask] = useState([]);

  useEffect(
    () => {
      filterHandler();
    },
    // if change 2 item in array  implementation function top
    [addTask, completed]
  );

  const filterHandler = () => {
    switch (completed) {
      case "completed":
        setFilterTask(addTask.filter((Task) => Task.completed === true));
        break;
      case "uncompleted":
        setFilterTask(addTask.filter((Task) => Task.completed === false));
        break;
      default:
        setFilterTask(addTask);
        break;
    }
  };

  return (
    <div className="App">
      <div className="card__todo">
        <h1>list Todo</h1>
        <Form
          setInputText={setInputText}
          addTask={addTask}
          setAddTask={setAddTask}
          inputText={inputText}
          setCompleted={setCompleted}
        />
        <TodoList
          addTask={addTask}
          setAddTask={setAddTask}
          filterTask={filterTask}
        />
      </div>
    </div>
  );
}

export default App;
