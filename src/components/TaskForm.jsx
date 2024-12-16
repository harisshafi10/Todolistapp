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
    <form
      onSubmit={submitHandler}
      className="flex flex-col sm:flex-row gap-3 items-center w-full"
    >
      <input
        className="bg-slate-800 rounded-md outline-none p-2 w-full  sm:w-80 md:w-80 lg:w-80 text-center shadow-slate-700 shadow-md"
        type="text"
        placeholder="Enter a Task"
        value={task}
        onChange={inputHandler}
      />
      <button
        className="p-2 bg-green-700 rounded-md hover:bg-green-800 shadow-slate-700 shadow-md active:scale-[.95] w-full sm:w-auto lg:w-20 lg:h-auto lg:p-1"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
