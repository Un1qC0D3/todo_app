import { TodoService } from './../todo.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  addTodo() {
    const title = this.newTodo.trim();
    if (!title) return;

    this.todoService.addTodo(title).subscribe((todo) => {
      this.todos.push(todo);
      this.newTodo = '';
    });
  }

  toggleTodo(todo: Todo) {
    this.todoService.updateTodo(todo.id, !todo.done).subscribe((updated) => {
      todo.done = updated.done;
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }
}
