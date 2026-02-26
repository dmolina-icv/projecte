import React, { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import seedTasks from "./data/seedTasks.json";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, done: false }]);
  };

  const handleToggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleLoadSeedTasks = () => {
    setTasks(seedTasks);
};


  return (
    <div className="container py-4">
      <h1 className="mb-4">Llista de Tasques</h1>
      <button
        className="btn btn-warning mb-3"
        onClick={handleLoadSeedTasks}
      >Carregar dades de prova</button>

      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleDone={handleToggleDone} onDelete={handleDeleteTask}/>
    </div>
  );
}
