export function toLocalStorage(data) {
    localStorage.setItem(data.id, JSON.stringify(data));
}
export function fromLocalStorage() {
    const toDoList = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        toDoList.push(JSON.parse(value));
    }
    return toDoList;
}
export function deleteFromLocalStorage(idOfToDo){
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key === idOfToDo){
            localStorage.removeItem(key)
        }
    }
}
export function changeStatusFromLocalStorage(idOfToDo){
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key === idOfToDo){
            const toDo = JSON.parse(localStorage.getItem(key));
            toDo.status = toDo.status === "Done" ? "Undone" : "Done";
            localStorage.setItem(key, JSON.stringify(toDo));
            return toDo.status
        }
    }
}