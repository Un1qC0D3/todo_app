import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService, Todo } from './todo.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
