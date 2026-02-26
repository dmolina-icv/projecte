import { z } from "zod";

export const taskSchema = z.object({
  taskName: z.string().min(5, { message: "El nom ha de tindre 5 caracters com a minim" }),

  taskCategory: z.enum(["Personal", "Casa", "Feina", "Estudis"], {
    errorMap: () => ({ message: "Has de seleccionar una categoria valida" }),
  }),

  taskDueDate: z.coerce.date().refine((date) => date > new Date(), {
      message: "La data ha de ser posterior a la data actual",
    }),

  taskPriority: z.enum(["baixa", "mitja", "alta"], {
    errorMap: () => ({ message: "Selecciona una prioritat" }),
  }),

  taskImportant: z.boolean().optional(),

  taskDescription: z.string().max(300, { message: "La descripció no pot superar 300 caracters" }).optional(),
});
