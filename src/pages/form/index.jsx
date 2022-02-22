import "./style.css";

function Form({ setInputText, inputText, addTask, setAddTask, setCompleted }) {
  const handelTask = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandle = (e) => {
    // stop send null task
    if (inputText) {
      setAddTask([
        ...addTask,
        // item task
        { text: inputText, completed: false, id: Date.now() },
      ])
    } else {
      alert('please write task')
    }
    // stop about refresh
    e.preventDefault()

    // clear or reset Input
    setInputText('')
  }

  // filter Completed or Uncompleted or All
  const completedHandler = (e) => {
    setCompleted(e.target.value);
  };

  return (
    <div className="addList">
      <form onSubmit={submitTodoHandle}>
        <div>
          <input
            type="text"
            className="input_todo"
            onChange={handelTask}
            value={inputText || ""}
            name="name"
          />
          <button className="btn_add" type="submit" onClick={submitTodoHandle}>
            Add To List
          </button>
        </div>

        <div className="select_item">
          <select
            name="todos"
            className="filter_item"
            onChange={completedHandler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
