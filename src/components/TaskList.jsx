import React from "react";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="mt-2 z-10 bg-slate-800 w-full max-w-[500px] flex flex-col items-center mb-5 rounded-md p-2 gap-3">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="bg-slate-600 hover:scale-105 duration-300 shadow-slate-600 shadow-md p-3 rounded-md w-full flex justify-between items-center text-slate-300"
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "gray" : "pink",
          }}
        >
          <div className="flex items-center gap-3">
            <input
              className="cursor-pointer w-5 h-5"
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span>{task.text}</span>
          </div>
          <button
            className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-md active:scale-[.95]"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
