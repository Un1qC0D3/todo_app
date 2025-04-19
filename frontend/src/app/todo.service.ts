import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(title: string): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, { title });
  }

  updateTodo(id: number, done: boolean): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, { done });
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
