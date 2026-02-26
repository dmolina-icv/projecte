import React from "react";

export function Checkbox({ register }) {
  return (
    <div className="mb-3 form-check">
      <br />
      <input type="checkbox" className="form-check-input" {...register("taskImportant")} />
      <label className="form-check-label">Marca com a important</label>
    </div>
  );
}
