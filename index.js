// main entry file of the project

const TodoStore = require("./src/todostore.class");

const todoStore = new TodoStore();

// note we are always calling report
// function to see the current state after every change (mobx comes into play here, see next branch)

todoStore.addTodo("Take Shower");
console.log(todoStore.report());

todoStore.addTodo("Eat Breakfast");
console.log(todoStore.report());

todoStore.todos[0].completed = true;
todoStore.addTodo("Workout");
console.log(todoStore.report());

todoStore.todos[1].task = "Eat heavy breakfast!";
console.log(todoStore.report());

todoStore.todos[0].task = "Take cold shower";
console.log(todoStore.report());
