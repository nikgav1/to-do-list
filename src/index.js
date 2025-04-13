import './style.css'
import createToDo from "./scripts/create-to-do";
import createBtns from "./scripts/create-btns";
import { createForm } from "./scripts/create-form";
import { toLocalStorage } from "./scripts/local-storage";
import handleButtonsPages from "./scripts/page-handling-button-logic";
import allToDoCreatingFunction from "./scripts/all-to-dos"

const toDoCreator = new createToDo();

allToDoCreatingFunction('content')

function handleFormData(data) {
    const newToDo = toDoCreator.createNewToDo(data.title, data.description, data.dueDate, data.priority);
    toLocalStorage(newToDo);
}
function homeCreatingFunction(){
    console.log('Will be added later...')
}
createBtns('navbar')
handleButtonsPages('navbar', 'content', homeCreatingFunction, () => createForm('content', handleFormData), () => allToDoCreatingFunction('content'));