import { Component } from '@angular/core'
import { TodoService, Todo } from './todo.service'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos: Todo[] = []
  newTitle = ''
  newContent = ''

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos()
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos))
  }

  addTodo() {
    if (!this.newTitle.trim() || !this.newContent.trim()) return
    this.todoService
      .addTodo(this.newTitle, this.newContent)
      .subscribe((todo) => {
        this.todos.push(todo)
        this.newTitle = ''
        this.newContent = ''
      })
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== id)
    })
  }
}
