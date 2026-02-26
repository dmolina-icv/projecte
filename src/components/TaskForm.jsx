import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "../schemas/taskSchema";
import { Input } from "./form/Input";
import { Select } from "./form/Select";
import { RadioGroup } from "./form/RadioGroup";
import { Textarea } from "./form/Textarea";
import { Checkbox } from "./form/Checkbox";
import { Submit } from "./form/Submit";

export function TaskForm({ onAddTask }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data) => {
    console.log("Tasca afegida:", data);
    onAddTask(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-3 border rounded mb-4">
      <Input register={register} errors={errors} />
      <Select register={register} errors={errors} />
      <RadioGroup register={register} errors={errors} />
      <Checkbox register={register} />
      <Textarea register={register} errors={errors} />
      <Submit />
    </form>
  );
}
