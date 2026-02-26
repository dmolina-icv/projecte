import React from "react";
import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, onToggleDone, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p>No hi ha tasques creades.</p>;
  }

  return (
    <table className="table table-bordered">
      <thead className="table-light">
        <tr>
          <th>Feta</th>
          <th>Nom</th>
          <th>Categoria</th>
          <th>Data limit</th>
          <th>Prioritat</th>
          <th>Important</th>
          <th>Descripcio</th>
          <th>Accions</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            onToggleDone={onToggleDone}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
