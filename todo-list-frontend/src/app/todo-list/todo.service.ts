import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface Todo {
  id: number
  title: string
  content: string
  isComplete?: boolean
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private apiUrl = 'http://localhost:5035/api/todos'

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl)
  }

  addTodo(title: string, content: string): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, { title, content })
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

  updateTodo(id: number, title: string, content: string): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, { title, content })
  }
}
