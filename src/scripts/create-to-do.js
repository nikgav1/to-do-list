import toDoFactory from "./to-do-factory.js";

export default class createToDo {
    constructor(factoryFunction = toDoFactory) {
        this.factoryFunction = factoryFunction;
    }

    createNewToDo(title, description, dueDate, priority) {
        // Use the factory function to create a new to-do
        return this.factoryFunction(title, description, dueDate, priority);
    }
}