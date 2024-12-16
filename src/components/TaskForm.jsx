import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const inputHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    } else {
      alert("Task cannot be empty");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input className="bg-slate-800 rounded-md mr-2 outline-none p-1 text-center shadow-slate-700 shadow-md"
        type="text"
        placeholder="Enter a Task"
        value={task}
        onChange={inputHandler}
      />
      <button className="p-1 bg-green-700 rounded-md hover:bg-green-800 shadow-slate-700 shadow-md active:scale-[.95]"
       type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
