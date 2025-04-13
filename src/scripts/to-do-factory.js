import { v4 as uuidv4 } from "uuid";

export default function toDoFactory(title, description, dueDate, priority) {
  return {
    id: uuidv4(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    status: "Undone",
  };
}
