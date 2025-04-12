export function toLocalStorage(data) {
    localStorage.setItem(data.title, JSON.stringify(data));
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