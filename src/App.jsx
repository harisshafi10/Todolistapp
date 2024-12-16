import React, { useState, useEffect} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


const App = () => {
  const [tasks, setTasks] = useState(()=>{
    const saveTasks = localStorage.getItem('tasks');
    return saveTasks ? JSON.parse(saveTasks): [];
  });
  

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])
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
    <div className=" mt-5 rounded-2xl bg-slate-900 w-96 min-h-[90vh] flex flex-col  items-center ml-[35%] text-slate-300 *:selection:bg-yellow-500 ">
      <h1 className="font-bold mb-5  bg-slate-700 rounded-2xl w-full text-center h-10 text-4xl">TO-DO LIST</h1>
      <TaskForm addTask={addTask} />
      <div className="h-[68vh]  mt-[125px]   w-80 absolute bg-slate-800 rounded-md overflow-hidden"></div>
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;