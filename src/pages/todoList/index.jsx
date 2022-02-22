import "./style.css";
import Task from "../task";
import { useEffect, useState } from "react";

function TodoList({ addTask, setAddTask, filterTask }) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (filterTask.length) {
      const sort = filterTask.sort((a, b) => new Date(b?.id) - new Date(a?.id));
      setTasks(sort);
    }
  }, [filterTask]);

  return (
    <div className="todo__content">
      <ul>
        {tasks?.map((task) => (
          <Task
            text={task.text}
            key={task.id}
            task={task}
            setAddTask={setAddTask}
            addTask={tasks}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
