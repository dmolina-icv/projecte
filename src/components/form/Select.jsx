import React from "react";

export function Select({ register, errors }) {
  return (
    <div className="mb-3">
      <label className="form-label">Categoria</label>
      <select className="form-select" {...register("taskCategory")}>
        <option value="">Selecciona una categoria</option>
        <option value="Personal">Personal</option>
        <option value="Casa">Casa</option>
        <option value="Feina">Feina</option>
        <option value="Estudis">Estudis</option>
      </select>
      {errors?.taskCategory && (
        <small className="text-danger">{errors.taskCategory.message}</small>
      )}
    </div>
  );
}
