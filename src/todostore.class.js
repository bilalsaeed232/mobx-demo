import { observable, computed, autorun } from "mobx";

export class TodoStore {
  @observable todos = [];

  constructor() {
    autorun(() => console.log(this.report));
  }

  @computed
  get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  @computed
  get report() {
    if (this.todos.length === 0) {
      return "<none>";
    }
    return (
      `Next Todo: "${this.todos[0].task}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task,
      completed: false,
      assignee: null
    });
  }
}
