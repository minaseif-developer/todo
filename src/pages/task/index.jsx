import "./style.css";

function Task({ text, task, addTask, setAddTask }) {
  // creat item
  const removeHandler = () => {
    const removeTask = addTask.filter((el) => el.id !== task.id);
    setAddTask(removeTask);
    localStorage.setItem("task", JSON.stringify(removeTask));
  };
  // complet task
  const completeHandler = () => {
    const data = addTask.map((item) => {
      if (item.id === task.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    setAddTask(data);
    localStorage.setItem("task", JSON.stringify(data));
  };

  return (
    <div className="list__todo">
      {/* if Uncompleted do not style if  completed add style completeTask */}
      <li className={` ${task.completed ? "completeTask" : ""}`}>{text}</li>
      <div>
        <button className="complete__btn" onClick={completeHandler}>
          complete
        </button>
        <button className="remove__btn" onClick={removeHandler}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Task;
