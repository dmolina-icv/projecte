import React from "react";

export function TaskItem({ task, index, onToggleDone, onDelete }) {
  return (
    <tr className={task.done ? "table-success" : ""}>
      <td>
        <input
          type="checkbox"
          checked={task.done || false}
          onChange={() => onToggleDone(index)}
        />
      </td>

      <td>{task.taskName}</td>
      <td>{task.taskCategory}</td>

      <td>
        {task.taskDueDate instanceof Date
          ? task.taskDueDate.toLocaleDateString()
          : task.taskDueDate}
      </td>

      <td>{task.taskPriority}</td>
      <td>{task.taskImportant ? "Sí" : "No"}</td>
      <td>{task.taskDescription}</td>

      <td>
        <a
          href="#"
          style={{ color: "red", textDecoration: "none" }}
          onClick={(e) => {
            e.preventDefault();
            onDelete(index);
          }}
        >
          Eliminar
        </a>
      </td>
    </tr>
  );
}
