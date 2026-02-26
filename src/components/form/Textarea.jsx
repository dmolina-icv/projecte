import React from "react";

export function Textarea({ register, errors }) {
  return (
    <div className="mb-3">
      <label className="form-label">Descripcio</label>
      <textarea className="form-control" rows={3} {...register("taskDescription")}></textarea>
      {errors?.taskDescription && (
        <small className="text-danger">{errors.taskDescription.message}</small>
      )}
    </div>
  );
}
