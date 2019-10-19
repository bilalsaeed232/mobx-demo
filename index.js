// main entry file of the project

import { TodoStore } from "./src/todostore.class";

const todoStore = new TodoStore();

// note we are always calling report
// function to see the current state after every change (mobx comes into play here, see next branch)

todoStore.addTodo("Take Shower");

todoStore.addTodo("Eat Breakfast");

todoStore.todos[0].completed = true;
todoStore.addTodo("Workout");

todoStore.todos[1].task = "Eat heavy breakfast!";
todoStore.todos[0].task = "Take cold shower";
