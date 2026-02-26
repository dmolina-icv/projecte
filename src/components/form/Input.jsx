import React from "react";

export function Input({ register, errors }) {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Nom de la tasca</label>
        <input type="text" className="form-control" {...register("taskName")} />
        {errors?.taskName && (
          <small className="text-danger">{errors.taskName.message}</small>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Data limit</label>
        <input type="date" className="form-control" {...register("taskDueDate")} />
        {errors?.taskDueDate && (
          <small className="text-danger">{errors.taskDueDate.message}</small>
        )}
      </div>
    </div>
  );
}
