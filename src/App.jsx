import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saveTasks = localStorage.getItem("tasks");
    return saveTasks ? JSON.parse(saveTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
<<<<<<< HEAD
    <div className="mt-5 rounded-2xl bg-slate-900 w-full max-w-[600px] min-h-[90vh] flex flex-col items-center mx-auto text-slate-300 px-4 sm:px-6 lg:px-8 *:selection:bg-yellow-500">
      <h1 className="font-bold mb-5 bg-slate-700 rounded-2xl w-full text-center h-12 text-2xl sm:text-3xl lg:text-4xl">
        TO-DO LIST
      </h1>
      <TaskForm addTask={addTask} />
      <div className="h-[60vh] w-full bg-slate-800 rounded-md overflow-y-scroll hide-scrollbar mt-5">
=======
    <div className="mt-5 rounded-2xl bg-slate-900 w-full max-w-[500px] min-h-[90vh] flex flex-col items-center mx-auto text-slate-300 px-4 sm:px-6 *:selection:bg-yellow-500">
      <h1 className="font-bold mb-5 bg-slate-700 rounded-2xl w-full text-center h-10 text-2xl sm:text-4xl">
        TO-DO LIST
      </h1>
      <TaskForm addTask={addTask} />
      <div className="h-[60vh] w-full bg-slate-800 rounded-md overflow-y-scroll mt-5">
>>>>>>> 6b195294505fad13a58db03af0dc8b9d27f53650
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
