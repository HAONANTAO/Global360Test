import { Component } from '@angular/core'
// import { RouterOutlet } from '@angular/router'
import { TodoListComponent } from './todo-list/todo-list.component'
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-root',
  imports: [TodoListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list-frontend'
}
