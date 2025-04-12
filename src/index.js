import createToDo from "./scripts/create-to-do";
import createBtns from "./scripts/create-btns";
import { createForm } from "./scripts/create-form";
import { toLocalStorage, fromLocalStorage } from "./scripts/local-storage";
import handleButtonsPages from "./scripts/page-handling-button-logic";
import './style.css'

const toDoCreator = new createToDo();

function handleFormData(data) {
    const newToDo = toDoCreator.createNewToDo(data.title, data.description, data.dueDate, data.priority);
    toLocalStorage(newToDo);
}

function homeCreatingFunction() {
    console.log("Home button clicked!");
    // Add logic to render the home page
}

function projectCreatingFunction() {
    console.log("Projects button clicked!");
    // Add logic to render the projects page
}

createBtns('navbar')
handleButtonsPages('navbar', 'content', homeCreatingFunction, () => createForm('content', handleFormData), projectCreatingFunction);