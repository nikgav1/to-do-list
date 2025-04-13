import {
  fromLocalStorage,
  deleteFromLocalStorage,
  changeStatusFromLocalStorage,
} from "./local-storage";

function toDoFucntionDelete(id) {
  deleteFromLocalStorage(id);
}

function changeStatusOfToDo(id) {
  return changeStatusFromLocalStorage(id);
}

export default function allToDoCreatingFunction(containerId) {
  const container = document.getElementById(containerId);
  fromLocalStorage().forEach((toDo) => {
    const title = document.createElement("p");
    title.textContent = `Title: ${toDo.title}`;

    const description = document.createElement("p");
    description.textContent = `Description: ${toDo.description}`;

    const dueDate = document.createElement("p");
    dueDate.textContent = `Due Date: ${toDo.dueDate}`;

    const priority = document.createElement("p");
    priority.textContent = `Priority: ${toDo.priority}`;

    const status = document.createElement("p");
    status.textContent = `Status: ${toDo.status}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete To-Do";

    deleteBtn.addEventListener("click", () => {
      toDoFucntionDelete(toDo.id);
      sharedContainer.remove();
    });

    const changeStatus = document.createElement("button");
    changeStatus.textContent = "Change status";

    changeStatus.addEventListener("click", () => {
      const newStatus = changeStatusOfToDo(toDo.id);
      status.textContent = `Status: ${newStatus}`;
    });

    const sharedContainer = document.createElement("div");
    sharedContainer.classList.add("to-do-list");

    sharedContainer.append(
      title,
      description,
      dueDate,
      priority,
      status,
      deleteBtn,
      changeStatus,
    );

    container.appendChild(sharedContainer);
  });
}
