import React from "react";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="mt-2 z-10 bg-slate-800 w-80 flex flex-col justify-center items-center mb-5 rounded-md  ">
      {tasks.map((task, index) => (
        <li
        
          key={index}
          className="bg-slate-600 hover:scale-105 duration-300  shadow-slate-600 shadow-md p-1 rounded-md mt-2 w-72 flex justify-between text-slate-300 gap-5 mb-2"
          style={{
            textDecoration: task.completed ? "line-through" : "none",
             color: task.completed ? "black" : "pink",
          }}
        >
        <input className="cursor-pointer w-4 h-4 mt-1 p-9"
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
          />
          {task.text}
          
          <button
            className="px-2 bg-red-600 hover:bg-red-700  text-white rounded-md shadow-md active:scale-[.95] "
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
