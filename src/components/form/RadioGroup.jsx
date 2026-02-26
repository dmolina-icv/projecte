import React from "react";

export function RadioGroup({ register, errors }) {
  return (
    <div>
      <label className="form-label d-block">Prioritat</label>

      <div className="form-check">
        <input className="form-check-input" type="radio" value="baixa" {...register("taskPriority")} />
        <label className="form-check-label">Baixa</label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="radio" value="mitja" {...register("taskPriority")} />
        <label className="form-check-label">Mitjana</label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="radio" value="alta" {...register("taskPriority")} />
        <label className="form-check-label">Alta</label>
      </div>

      {errors?.taskPriority && (
        <small className="text-danger">{errors.taskPriority.message}</small>
      )}
    </div>
  );
}
