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
  editId: number | null = null
  editTitle = ''
  editContent = ''
  searchKeyword = ''
  searchTodos() {
    const keyword = this.searchKeyword.trim()
    if (!keyword) {
      this.loadTodos()
      return
    }
    this.todoService.searchTodos(keyword).subscribe((todos) => {
      this.todos = todos
    })
  }

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

  startEdit(todo: Todo) {
    this.editId = todo.id
    this.editTitle = todo.title
    this.editContent = todo.content
  }

  cancelEdit() {
    this.editId = null
    this.editTitle = ''
    this.editContent = ''
  }

  saveEdit() {
    if (this.editId === null) return
    this.todoService
      .updateTodo(this.editId, this.editTitle, this.editContent)
      .subscribe((updated) => {
        const idx = this.todos.findIndex((t) => t.id === this.editId)
        if (idx > -1) this.todos[idx] = updated
        this.cancelEdit()
      })
  }
}
